import { COURS } from "@/app/hooks/useCours";
import { INSCRIPTION } from "@/app/hooks/useInscriptions";
import { NOTE } from "@/app/hooks/useNotes";

enum ANOMALY_TYPE {
  NOTE_SANS_INSCRIPTION = "NOTE_SANS_INSCRIPTION",
  COURS_INCONNU = "COURS_INCONNU",
  INSCRIPTION_SANS_COURS = "INSCRIPTION_SANS_COURS",
  DUPLICATA_NOTE = "DUPLICATA_NOTE",
  NOTE_SANS_CREDIT = "NOTE_SANS_CREDIT",
}

interface ANOMALY {
  type: ANOMALY_TYPE;
  matricule: string;
  annee: number;
  details: {
    mnemonique: string;
    intitule: string;
    credit: number;
    titulaire: string;
    note?: number;
  }[];
}

export async function reportAnomalies(
  inscriptions: INSCRIPTION[],
  cours: COURS[],
  notes: NOTE[]
): Promise<ANOMALY[]> {
  const results: ANOMALY[] = [];

  const coursMap = new Map<string, COURS>();
  cours.forEach(c => coursMap.set(c.mnemonique, c));

  const notesByStudent = new Map<string, NOTE>();
  const duplicates: string[] = [];

  for (const note of notes) {
    const key = `${note.matricule}-${note.mnemonique}`;

    if (notesByStudent.has(key)) {
      duplicates.push(note.matricule);
    }

    notesByStudent.set(key, note);
  }

  for (const inscription of inscriptions) {
    const anomalies: ANOMALY_TYPE[] = [];
    const attendedCours: COURS[] = [];
    const studentNotes: NOTE[] = [];

    const parsedCours: string[] = Array.isArray(inscription.cours_json) ? inscription.cours_json : JSON.parse((inscription.cours_json as string).toString());

    parsedCours.forEach(mnemonique => {
      const cours = coursMap.get(mnemonique);

      if (cours) {
        attendedCours.push(cours);
      } else {
        attendedCours.push({
          mnemonique,
          intitule: "",
          credit: 0,
          titulaire: ""
        });

        anomalies.push(ANOMALY_TYPE.COURS_INCONNU);
      }

      const note = notesByStudent.get(`${inscription.matricule}-${mnemonique}`);

      if (note) {
        studentNotes.push(note);
      }
    });

    studentNotes.forEach(note => {
      if (!parsedCours.includes(note.mnemonique)) {
        anomalies.push(ANOMALY_TYPE.NOTE_SANS_INSCRIPTION);
      }
    });

    const studentDuplicates = duplicates.filter(d => d.startsWith(inscription.matricule));
    studentDuplicates.forEach(() => {
      anomalies.push(ANOMALY_TYPE.DUPLICATA_NOTE);
    });

    const noteSansCredit = studentNotes.filter((note) => {
      return attendedCours.some((c) => c.mnemonique === note.mnemonique && (!c.credit || c.credit <= 0));
    });

    if (noteSansCredit.length > 0) {
      anomalies.push(ANOMALY_TYPE.NOTE_SANS_CREDIT);
    }

    if (anomalies.length > 0) {
      const details = attendedCours.map(cours => {
        const note = studentNotes.find(n => n.mnemonique === cours.mnemonique)?.note;
        return { ...cours, note };
      });

      anomalies.forEach(type => {
        results.push({
          type,
          matricule: inscription.matricule,
          annee: inscription.annee_etude,
          details,
        });
      });
    }
  }

  return results;
}

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

  const notesByStudent = new Map<string, NOTE[]>();
  const duplicates: string[] = [];

  for (const note of notes) {
    const key = `${note.matricule}-${note.mnemonique}`;
    if (!notesByStudent.has(note.matricule)) {
      notesByStudent.set(note.matricule, []);
    }

    const studentNotes = notesByStudent.get(note.matricule)!;
    if (studentNotes.some(n => n.mnemonique === note.mnemonique)) {
      duplicates.push(key);
    }
    studentNotes.push(note);
  }

  for (const inscription of inscriptions) {
    const anomalies: ANOMALY_TYPE[] = [];
    const attendedCours: COURS[] = [];

    const parsedCours: string[] = JSON.parse(inscription.cours_json.toString());

    parsedCours.forEach(mnemonique => {
      const c = coursMap.get(mnemonique);
      if (c) {
        attendedCours.push(c);
      } else {
        anomalies.push(ANOMALY_TYPE.COURS_INCONNU);
      }
    });

    const studentNotes = notesByStudent.get(inscription.matricule) ?? [];

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
      const details = attendedCours.map(c => {
        const note = studentNotes.find(n => n.mnemonique === c.mnemonique)?.note;
        return { ...c, note };
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

import { COURS } from "@/app/hooks/useCours";
import { INSCRIPTION } from "@/app/hooks/useInscriptions";
import { NOTE } from "@/app/hooks/useNotes";

enum ANOMALY_TYPE {
  NOTE_SANS_INSCRIPTION,
  COURS_INCONNU,
  INSCRIPTION_SANS_COURS,
  DUPLICATA_NOTE,
  NOTE_SANS_CREDIT,
}

interface ANOMALIES {
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
): Promise<ANOMALIES[]> {
  const results: ANOMALIES[] = [];

  const notesByStudent = new Map<string, number>();
  const duplicates: string[] = [];

  for (const note of notes) {
    const key = `${note.matricule}-${note.mnemonique}`;

    if (notesByStudent.has(key)) {
      duplicates.push(note.matricule);
    }

    notesByStudent.set(key, note.note);
  }

  for (const inscription of inscriptions) {
    const anomalies: ANOMALY_TYPE[] = [];

    const inscriptionNotes = notes.filter(note => note.matricule === inscription.matricule);
    const attendedCours = cours.filter(cour => inscription.cours_json.includes(cour.mnemonique));

    const noteSansCredit: number[] = [];

    inscriptionNotes.forEach(note => {
      const foundNote = attendedCours.filter(cours => cours.mnemonique === note.mnemonique);

      if (!foundNote) {
        anomalies.push(ANOMALY_TYPE.NOTE_SANS_INSCRIPTION);
      }
    });

    const parsedCours: string[] = JSON.parse(inscription.cours_json.toString());

    parsedCours.forEach(mnemonique => {
      const foundCours = cours.filter(c => c.mnemonique === mnemonique);

      if (!foundCours) {
        anomalies.push(ANOMALY_TYPE.COURS_INCONNU);
      }
    });

    if (inscription.cours_json.length === 0) {
      anomalies.push(ANOMALY_TYPE.INSCRIPTION_SANS_COURS);
    }

    if (duplicates.length > 0) {
      const filtered = duplicates.filter(matricule => matricule === inscription.matricule);

      if (filtered.length > 0) {
        filtered.forEach(() => {
          anomalies.push(ANOMALY_TYPE.DUPLICATA_NOTE);
        })
      }
    }

    if (noteSansCredit.length > 0) {
      noteSansCredit.forEach(() => {
        anomalies.push(ANOMALY_TYPE.NOTE_SANS_CREDIT);
      });
    }

    if (anomalies.length > 0) {
      const details = attendedCours.map((cour) => {
        const note = notesByStudent.get(`${inscription.matricule}-${cour.mnemonique}`);

        if (note && (cour.credit === undefined || cour.credit <= 0)) {
          noteSansCredit.push(note);
        }

        return {
          ...cour,
          note,
        }
      });

      anomalies.forEach((type) => {
        results.push({
          type,
          matricule: inscription.matricule,
          annee: inscription.annee_etude,
          details,
        });
      })
    }
  }

  return results;
}

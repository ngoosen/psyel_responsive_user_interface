import { COURS } from "@/app/hooks/useCours";
import { INSCRIPTION } from "@/app/hooks/useInscriptions";
import { NOTE } from "@/app/hooks/useNotes";

interface BULLETIN_RESULT {
  student: {
    matricule: string;
    nom: string;
    prenom: string;
    annee: number;
  };
  ects_total_inscrits: number;
  ects_obtenus: number;
  moyenne_ponderee: number;
  reussite: boolean;
  details: {
    mnemonique: string;
    intitule: string;
    credit: number;
    titulaire: string;
    note?: number;
  }[];
}

export async function computeBulletins(
  inscriptions: INSCRIPTION[],
  cours: COURS[],
  notes: NOTE[]
): Promise<BULLETIN_RESULT[]>  {
  const notesMap = new Map<string, number>();
  for (const note of notes) {
    notesMap.set(`${note.matricule}-${note.mnemonique}`, note.note);
  }

  const results: BULLETIN_RESULT[] = inscriptions.map((inscr) => {
    const student = {
      matricule: inscr.matricule,
      nom: inscr.nom,
      prenom: inscr.prenom,
      annee: inscr.annee_etude,
    };

    const attendedCours = cours.filter(cour => inscr.cours_json.includes(cour.mnemonique));

    let ects_total_inscrits = 0;
    let ects_obtenus = 0;

    let notePonderee = 0;
    let creditCoursNotes = 0;

    let allCoursEvaluated = true;

    const details = attendedCours.map((cour) => {
      ects_total_inscrits += cour.credit;

      const note = notesMap.get(`${inscr.matricule}-${cour.mnemonique}`);

      if (note) {
        notePonderee += note * cour.credit;
        creditCoursNotes += cour.credit;

        if (note >= 10) {
          ects_obtenus += cour.credit;
        }
      } else {
        allCoursEvaluated = false;
      }

      return {
        ...cour,
        note,
      };
    });

    const moyenne_ponderee = creditCoursNotes > 0 ? notePonderee / creditCoursNotes : 0;

    const reussite = ects_obtenus >= 60 || (moyenne_ponderee >= 10 && allCoursEvaluated);

    return {
      student,
      ects_total_inscrits,
      ects_obtenus,
      moyenne_ponderee,
      reussite,
      details,
    };
  });

  return results;
}

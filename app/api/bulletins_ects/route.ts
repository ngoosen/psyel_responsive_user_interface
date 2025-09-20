import { COURS } from "@/app/hooks/useCours";
import { INSCRIPTION } from "@/app/hooks/useInscriptions";
import { NOTE } from "@/app/hooks/useNotes";
import { NextResponse } from "next/server";

interface DATA_STRUCTURE {
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

export async function GET() {
  const apiUrls = [
    "https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/inscriptions",
    "https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/cours",
    "https://b0s0kwos00g48ow8cg0skg4w.89.116.111.143.sslip.io/notes"
  ];

  const fetchPromises = apiUrls.map(async (api) => {
    const response = await fetch(api);
    return response.json();
  });

  let results: DATA_STRUCTURE[] = [];

  await Promise.all(fetchPromises)
    .then((values) => {
      const inscriptions: INSCRIPTION[] = values[0];
      const cours: COURS[] = values[1];
      const notes: NOTE[] = values[2];

      results = inscriptions.map((inscr) => {
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

          const note: NOTE | undefined = notes.find(note => note.matricule === inscr.matricule && note.mnemonique === cour.mnemonique);

          if (note) {
            notePonderee += note.note * cour.credit;
            creditCoursNotes += cour.credit;

            if (note.note >= 10) {
              ects_obtenus += cour.credit;
            }
          } else {
            allCoursEvaluated = false;
          }

          return {
            ...cour,
            note: note?.note,
          };
        });

        const moyenne_ponderee = notePonderee / creditCoursNotes;

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
    });

  return NextResponse.json(results);
}

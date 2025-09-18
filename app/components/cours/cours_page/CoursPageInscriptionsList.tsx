import { useContext, useEffect, useState } from "react";

import styles from "../../../style/components/cours/cours_page/CoursPageInscriptionsList.module.scss";

import { DataContext } from "@/app/hooks/contexts/useData";

import CoursPageInscriptionsListItem from "./CoursPageInscriptionsListItem";

interface COURS_PAGE_INSCRIPTIONS_LIST_PROPS {
  mnemonique: string;
}

export interface COURS_INSCRIPTION_NOTE {
  fullName: string;
  matricule: string;
  anneeEtude: number;
  note?: number;
}

export default function CoursPageInscriptionsList(props: COURS_PAGE_INSCRIPTIONS_LIST_PROPS) {
  const { mnemonique, } = props;

  const [coursInscriptions, setCoursInscriptions] = useState<COURS_INSCRIPTION_NOTE[]>([]);

  const {
    inscriptions,
    notes,
  } = useContext(DataContext);

  useEffect(() => {
    const filteredInscriptions = inscriptions.filter(inscr => inscr.cours_json.includes(mnemonique));
    const filteredNotes = notes.filter(note => note.mnemonique === mnemonique);

    const joinedResults = filteredInscriptions.map(inscr => {
      const foundNote = filteredNotes.find(note => note.matricule === inscr.matricule);

      let adjustedResult: COURS_INSCRIPTION_NOTE = {
        fullName: `${inscr.nom.toUpperCase()} ${inscr.prenom}`,
        matricule: inscr.matricule,
        anneeEtude: inscr.annee_etude,
      }

      if (foundNote) {
        adjustedResult = {
          ...adjustedResult,
          note: foundNote.note,
        }
      }

      return adjustedResult;
    });

    setCoursInscriptions(joinedResults.sort((inscr1, inscr2) => inscr1.fullName.localeCompare(inscr2.fullName)));
  }, [mnemonique, inscriptions, notes]);

  return (
    <article className={styles.main}>
      <h4>Inscriptions</h4>

      <table>
        <thead>
          <tr>
            <th>Personne inscrite</th>
            <th>Année d&apos;étude</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {coursInscriptions.map((inscription, index) => <CoursPageInscriptionsListItem key={`inscriptions_${index}`} inscription={inscription} />)}
        </tbody>
      </table>
    </article>
  );
}

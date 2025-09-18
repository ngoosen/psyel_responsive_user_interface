import styles from "../../../style/components/inscriptions/inscription_page/InscriptionPageCoursList.module.scss";

import { INSCRIPTION } from "@/app/hooks/useInscriptions";

import { DataContext } from "@/app/hooks/contexts/useData";
import { useContext } from "react";
import InscriptionPageCoursListItem from "./InscriptionPageCoursListItem";

interface INSCRIPTION_PAGE_ANNEE_ETUDE_PROPS {
  inscription: INSCRIPTION
}

export default function InscriptionPageCoursList(props: INSCRIPTION_PAGE_ANNEE_ETUDE_PROPS) {
  const {
    inscription,
  } = props;

  const { cours, } = useContext(DataContext);

  return (
    <article className={styles.main}>
      <div>
        <h4>Cours</h4>
        <p>Année d&apos;étude {inscription.annee_etude}</p>
      </div>

      <table className={styles.cours_table}>
        <thead>
          <tr>
            <th>Intitulé</th>
            <th>Professeur titulaire</th>
            <th>Crédits</th>
            <th>Note</th>
          </tr>
        </thead>

        <tbody>
          {inscription.cours_json.map((mnemonique) => (
            <InscriptionPageCoursListItem key={`inscription__cours_${mnemonique}`} cours={cours.find(c => c.mnemonique === mnemonique)} />
          ))}
        </tbody>
      </table>
    </article>
  );
}

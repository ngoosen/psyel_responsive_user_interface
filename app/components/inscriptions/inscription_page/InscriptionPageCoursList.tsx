import styles from "../../../style/components/inscriptions/inscription_page/InscriptionPageCoursList.module.scss";

import { COURS } from "@/app/hooks/useCours";
import { INSCRIPTION } from "@/app/hooks/useInscriptions";

import InscriptionPageCoursListItem from "./InscriptionPageCoursListItem";

interface INSCRIPTION_PAGE_ANNEE_ETUDE_PROPS {
  inscription: INSCRIPTION
  cours: COURS[]
}

export default function InscriptionPageCoursList(props: INSCRIPTION_PAGE_ANNEE_ETUDE_PROPS) {
  const {
    inscription,
    cours,
  } = props;

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

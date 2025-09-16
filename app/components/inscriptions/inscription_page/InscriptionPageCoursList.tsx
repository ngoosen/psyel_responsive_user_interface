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
    <article>
      <p>Année d&apos;étude: {inscription.annee_etude}</p>

      <ul className={styles.cours_list}>
        {inscription.cours_json.map((mnemonique) => (
          <InscriptionPageCoursListItem key={`inscription__cours_${mnemonique}`} cours={cours.find(c => c.mnemonique === mnemonique)} />
        ))}
      </ul>
    </article>
  );
}

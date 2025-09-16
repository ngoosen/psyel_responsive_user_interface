import { NOTE } from "@/app/hooks/useNotes";
import styles from "../../../style/components/cours/cours_page/CoursPageInscriptionsList.module.scss";

import { INSCRIPTION } from "@/app/hooks/useInscriptions";

interface COURS_PAGE_INSCRIPTIONS_LIST_PROPS {
  inscriptions: INSCRIPTION[];
  notes: NOTE[];
}

export default function CoursPageInscriptionsList(props: COURS_PAGE_INSCRIPTIONS_LIST_PROPS) {
  const {
    inscriptions,
    notes,
  } = props;

  return (
    <article className={styles.main}>
      <h4>Inscriptions</h4>
    </article>
  );
}

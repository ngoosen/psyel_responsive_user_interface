import Link from "next/link";
import styles from "../../../style/components/cours/cours_page/CoursPageInscriptionsListItem.module.scss";

import { COURS_INSCRIPTION_NOTE } from "./CoursPageInscriptionsList";

interface COURS_PAGE_INSCRIPTIONS_LIST_ITEM_PROPS {
  inscription: COURS_INSCRIPTION_NOTE;
}

export default function CoursPageInscriptionsListItem(props: COURS_PAGE_INSCRIPTIONS_LIST_ITEM_PROPS) {
  const { inscription, } = props;

  return (
    <tr className={styles.main}>
      <td>
        <Link href={`/inscription/${inscription.matricule}`} className={styles.inscription_link}>{inscription.fullName}</Link>
      </td>
      <td>{inscription.anneeEtude}</td>
      <td>{inscription.note ?? "N/A"}</td>
    </tr>
  );
}

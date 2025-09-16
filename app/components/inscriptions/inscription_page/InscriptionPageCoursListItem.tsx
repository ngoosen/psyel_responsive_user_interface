import Link from "next/link";

import styles from "../../../style/components/inscriptions/inscription_page/InscriptionPageCoursListItem.module.scss";

import { COURS } from "@/app/hooks/useCours";

interface INSCRIPTION_PAGE_COURS_LIST_ITEM_PROPS {
  cours?: COURS;
}

export default function InscriptionPageCoursListItem(props: INSCRIPTION_PAGE_COURS_LIST_ITEM_PROPS) {
  const { cours, } = props;

  if (cours) {
    return (
      <tr className={styles.main}>
        <td>
          <Link href={`/cours/${cours.mnemonique}`} className={styles.cours_link}>
            {cours.intitule}
          </Link>
        </td>
        <td>
          {cours.titulaire}
        </td>
        <td>
          {cours.credit}
        </td>
        <td>
          5
        </td>
      </tr>
    );
  }

  return <></>;
}

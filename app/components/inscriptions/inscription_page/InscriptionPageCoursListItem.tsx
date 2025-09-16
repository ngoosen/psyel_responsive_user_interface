import Link from "next/link";

import { COURS } from "@/app/hooks/useCours";
import styles from "../../../style/components/inscriptions/inscription_page/InscriptionPageCoursListItem.module.scss";

interface INSCRIPTION_PAGE_COURS_LIST_ITEM_PROPS {
  cours?: COURS;
}

export default function InscriptionPageCoursListItem(props: INSCRIPTION_PAGE_COURS_LIST_ITEM_PROPS) {
  const { cours, } = props;

  if (cours) {
    return (
      <li className={styles.main}>
        <Link href={`/cours/${cours.mnemonique}`}>
          {cours.intitule}
        </Link>
      </li>
    );
  }

  return <></>;
}

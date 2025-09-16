import localFont from "next/font/local";
import Link from "next/link";

import styles from "../../style/components/cours/CoursCard.module.scss";

import { COURS } from "@/app/hooks/useCours";

const firaSansSemiBold = localFont({ src: "../../assets/fonts/FiraSans-SemiBold.ttf" });
const firaSansRegular = localFont({ src: "../../assets/fonts/FiraSans-Regular.ttf" });

interface COURS_CARD_PROPS {
  cours: COURS;
}

export default function CoursCard(props: COURS_CARD_PROPS) {
  const { cours, } = props;

  return (
    <li className={`${styles.main} ${firaSansRegular.className}`}>
      <Link href={`/cours/${cours.mnemonique}`} className={styles.cours_link}>
        <p className={firaSansSemiBold.className}>{cours.intitule}</p>
      </Link>

      <p className={styles.professor_name}>Titulaire: <span>{cours.titulaire}</span></p>

      <div className={styles.details}>
        <p>Mnémonique: {cours.mnemonique}</p>
        <p>{cours.credit} ECTS</p>
      </div>
    </li>
  );
}

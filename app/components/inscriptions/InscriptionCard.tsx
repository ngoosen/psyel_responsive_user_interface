"use client";

import Link from "next/link";
import styles from "../../style/components/inscriptions/InscriptionCard.module.scss";

import { INSCRIPTION } from "@/app/hooks/useInscriptions";

interface INSCRIPTION_CARD_PROPS {
  inscription: INSCRIPTION;
}

export default function InscriptionCard(props: INSCRIPTION_CARD_PROPS) {
  const { inscription, } = props;

  return (
    <Link href={`/inscription/${inscription.matricule}`} className={styles.link_container}>
      <article className={styles.main}>
        <p>{inscription.nom} {inscription.prenom}</p>
      </article>
    </Link>
  );
}

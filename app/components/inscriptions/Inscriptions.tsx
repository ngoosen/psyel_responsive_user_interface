"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";

import styles from "../../style/components/inscriptions/Inscriptions.module.scss";

import useInscriptions, { INSCRIPTION } from "../../hooks/useInscriptions";
import InscriptionCard from "./InscriptionCard";

const firaSansSemiBold = localFont({ src: "../../assets/fonts/FiraSans-SemiBold.ttf" });

export default function Inscriptions() {
  const [inscriptions, getInscriptions] = useInscriptions();
  const [displayedInscriptions, setDisplayedInscriptions] = useState<INSCRIPTION[]>([]);

  useEffect(() => {
    getInscriptions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filteredSortedInscriptions = [...new Map(inscriptions.map(inscr => [inscr.matricule, inscr])).values()]
      .sort((inscr1, inscr2) => inscr1.nom.localeCompare(inscr2.nom));

    setDisplayedInscriptions(filteredSortedInscriptions);
  }, [inscriptions]);

  return (
    <article className={styles.main}>
      <input type="checkbox" name="" id="" className={firaSansSemiBold.className} />
      <article className={styles.inscriptions_list}>
        {displayedInscriptions.map((inscription, index) => <InscriptionCard key={index} inscription={inscription} />)}
      </article>
    </article>
  );
}

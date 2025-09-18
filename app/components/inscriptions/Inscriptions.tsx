"use client";

import localFont from "next/font/local";
import { useContext, useEffect, useState } from "react";

import styles from "../../style/components/inscriptions/Inscriptions.module.scss";

import { DataContext } from "@/app/hooks/contexts/useData";
import { INSCRIPTION } from "../../hooks/useInscriptions";

import SearchBar from "../ui/SearchBar";
import InscriptionCard from "./InscriptionCard";

const firaSansSemiBold = localFont({ src: "../../assets/fonts/FiraSans-SemiBold.ttf" });

function getUniqueValues(inscriptions: INSCRIPTION[]) {
  return [...new Map(inscriptions.map(inscr => [inscr.matricule, inscr])).values()];
}

function sortAlphabetically(inscriptions: INSCRIPTION[]) {
  return getUniqueValues(inscriptions).sort((inscr1, inscr2) => inscr1.nom.localeCompare(inscr2.nom));
}

export default function Inscriptions() {
  const [displayedInscriptions, setDisplayedInscriptions] = useState<INSCRIPTION[]>([]);
  const [noResult, setNoResult] = useState<boolean>(false);

  const { inscriptions, } = useContext(DataContext);

  useEffect(() => {
    setDisplayedInscriptions(sortAlphabetically(inscriptions));
  }, [inscriptions]);

  function changeSearchHandler(value: string) {
    setNoResult(false);

    if (value === "") {
      setDisplayedInscriptions(sortAlphabetically(inscriptions));
      return;
    }

    const filtered = inscriptions.filter(inscr => {
      return (
        inscr.nom.toLowerCase().includes(value.toLowerCase()) ||
        inscr.prenom.toLowerCase().includes(value.toLowerCase()) ||
        `${inscr.nom} ${inscr.prenom}`.toLowerCase().includes(value.toLowerCase()) ||
        `${inscr.prenom} ${inscr.nom}`.toLowerCase().includes(value.toLowerCase())
      );
    });

    if (filtered.length === 0) {
      setNoResult(true);
    }

    setDisplayedInscriptions(sortAlphabetically(filtered));
  }

  return (
    <article className={styles.main}>
      <input type="checkbox" name="" id="" className={`${firaSansSemiBold.className} ${styles.title_input}`} />

      <section className={styles.content}>
        <SearchBar onChange={changeSearchHandler} />

        {noResult && (
          <article className={styles.no_result}>
            <p>Aucun inscrit correspondant</p>
          </article>
        )}

        <article className={styles.inscriptions_list}>
          {displayedInscriptions.map((inscription, index) => <InscriptionCard key={index} inscription={inscription} />)}
        </article>
      </section>
    </article>
  );
}

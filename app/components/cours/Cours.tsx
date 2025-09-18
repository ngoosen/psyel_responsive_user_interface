"use client";

import localFont from "next/font/local";
import { useContext, useEffect, useState } from "react";

import styles from "../../style/components/cours/Cours.module.scss";

import { DataContext } from "@/app/hooks/contexts/useData";
import { COURS } from "../../hooks/useCours";

import SearchBar from "../ui/SearchBar";
import CoursCard from "./CoursCard";

const firaSansSemiBold = localFont({ src: "../../assets/fonts/FiraSans-SemiBold.ttf" });

function sortAlphabethically(values: COURS[]) {
  return values.sort((cours1, cours2) => cours1.intitule.localeCompare(cours2.intitule))
}

export default function Cours() {
  const [displayedCours, setDisplayedCours] = useState<COURS[]>([]);
  const [noResult, setNoResult] = useState<boolean>(false);

  const { cours, } = useContext(DataContext);

  useEffect(() => {
    setDisplayedCours(sortAlphabethically(cours));
  }, [cours]);

  function changeSearchHandler(value: string) {
    setNoResult(false);

    if (value === "") {
      setDisplayedCours(sortAlphabethically(cours));
      return;
    }

    const filtered = cours.filter(c => c.intitule.toLowerCase().includes(value.toLowerCase()));

    if (filtered.length === 0) {
      setNoResult(true);
    }

    setDisplayedCours(sortAlphabethically(filtered));
  }

  return (
    <article className={styles.main}>
      <input type="checkbox" name="" id="" className={`${firaSansSemiBold.className} ${styles.title_input}`} />
      <section className={styles.content}>
        <SearchBar onChange={changeSearchHandler} />

        {noResult && (
          <article className={styles.no_result}>
            <p>Aucun cours correspondant</p>
          </article>
        )}

        <ul>
          {displayedCours.map((cour, index) => <CoursCard key={index} cours={cour} />)}
        </ul>
      </section>
    </article>
  );
}

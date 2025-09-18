"use client";

import localFont from "next/font/local";
import { useContext, useEffect, useState } from "react";

import styles from "../../style/components/cours/Cours.module.scss";

import { DataContext } from "@/app/hooks/contexts/useData";
import { COURS } from "../../hooks/useCours";

import CoursCard from "./CoursCard";

const firaSansSemiBold = localFont({ src: "../../assets/fonts/FiraSans-SemiBold.ttf" });

export default function Cours() {
  const [displayedCours, setDisplayedCours] = useState<COURS[]>([]);

  const { cours, } = useContext(DataContext);

  useEffect(() => {
    setDisplayedCours(cours.sort((cours1, cours2) => cours1.intitule.localeCompare(cours2.intitule)));
  }, [cours]);

  return (
    <article className={styles.main}>
      <input type="checkbox" name="" id="" className={firaSansSemiBold.className} />
      <ul>
        {displayedCours.map((cour, index) => <CoursCard key={index} cours={cour} />)}
      </ul>
    </article>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import localFont from "next/font/local";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "../../../style/components/cours/cours_page/CoursPage.module.scss";

import useCours, { COURS } from "@/app/hooks/useCours";
import CoursPageInscriptionsList from "./CoursPageInscriptionsList";

const firaSansLight = localFont({ src: "../../../assets/fonts/FiraSans-Light.ttf" });
const firaSansSemiBold = localFont({ src: "../../../assets/fonts/FiraSans-SemiBold.ttf" });

export default function CoursPage() {
  const params = useParams<{ mnemonique: string }>();

  const [cours,, getCoursByMnemonique] = useCours();

  const [currentCours, setCurrentCours] = useState<COURS>();

  useEffect(() => {
    getCoursByMnemonique(params.mnemonique);
  }, []);

  useEffect(() => {
    if (cours.length > 0) {
      setCurrentCours(cours.find(c => c.mnemonique === params.mnemonique));
    }
  }, [cours]);

  if (currentCours) {
    return (
      <main className={styles.main}>
        <section className={styles.cours_data}>
          <h2 className={firaSansLight.className}>Fiche de cours</h2>
          <h3 className={firaSansSemiBold.className}>{currentCours.intitule} <span className={firaSansLight.className}>({currentCours.credit} ECTS)</span></h3>

          <div className={styles.details}>
            <p className={styles.mnemonique}>Mnémonique: {currentCours.mnemonique}</p>
            <p>Professeur titulaire: {currentCours.titulaire}</p>
          </div>

          <CoursPageInscriptionsList mnemonique={params.mnemonique} />
        </section>
      </main>
    );
  }

  return <main className={styles.main}></main>;
}

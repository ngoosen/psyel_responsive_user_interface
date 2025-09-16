"use client";

import localFont from "next/font/local";
import { useEffect } from "react";

import styles from "../../style/components/cours/Cours.module.scss";

import useCours from "../../hooks/useCours";

const firaSansSemiBold = localFont({ src: "../../assets/fonts/FiraSans-SemiBold.ttf" });

export default function Cours() {
  const [cours, getCours] = useCours();

  useEffect(() => {
    getCours();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className={styles.main}>
      <input type="checkbox" name="" id="" className={firaSansSemiBold.className} />
      <article>
        {cours.map((cour, index) => <p key={index}>{cour.intitule}</p>)}
      </article>
    </article>
  );
}

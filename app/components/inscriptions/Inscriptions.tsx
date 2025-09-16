"use client";

import localFont from "next/font/local";
import { useEffect } from "react";

import styles from "../../style/components/inscriptions/Inscriptions.module.scss";

import useInscriptions from "../../hooks/useInscriptions";

const firaSansSemiBold = localFont({ src: "../../assets/fonts/FiraSans-SemiBold.ttf" });

export default function Inscriptions() {
  const [inscriptions, getInscriptions] = useInscriptions();

  useEffect(() => {
    getInscriptions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className={styles.main}>
      <input type="checkbox" name="" id="" className={firaSansSemiBold.className} />
      <article>
        {inscriptions.map((inscription, index) => <p key={index}>{inscription.prenom} {inscription.nom}</p>)}
      </article>
    </article>
  );
}

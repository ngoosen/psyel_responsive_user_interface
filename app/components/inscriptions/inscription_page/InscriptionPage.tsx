/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import localFont from "next/font/local";
import { useParams } from "next/navigation";
import { useEffect } from "react";

import styles from "../../../style/components/inscriptions/inscription_page/InscriptionPage.module.scss";

import useInscriptions from "@/app/hooks/useInscriptions";
import InscriptionPageCoursList from "./InscriptionPageCoursList";

const firaSansLight = localFont({ src: "../../../assets/fonts/FiraSans-Light.ttf" });
const firaSansSemiBold = localFont({ src: "../../../assets/fonts/FiraSans-SemiBold.ttf" });

export default function InscriptionPage() {
  const params = useParams<{ matricule: string }>();
  const [inscription,, getInscription] = useInscriptions();

  useEffect(() => {
    getInscription(params.matricule);
  }, [params.matricule]);

  if (inscription.length > 0) {
    return (
      <main className={styles.main}>
        <section className={styles.inscription_data}>
          <h2 className={firaSansLight.className}>Fiche étudiant</h2>
          <h3 className={firaSansSemiBold.className}>{inscription[0].nom.toUpperCase()} {inscription[0].prenom}</h3>
          <p className={styles.matricule}>Matricule: {inscription[0].matricule}</p>

          <section className={styles.inscription_annee_etude}>
            {inscription.map((inscr, index) => (
              <InscriptionPageCoursList key={`inscription_${index}`} inscription={inscr} />
            ))}
          </section>
        </section>
      </main>
    )
  }

  return (
    <main className={styles.main}></main>
  );
}

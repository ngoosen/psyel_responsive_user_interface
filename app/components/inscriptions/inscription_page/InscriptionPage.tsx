/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import styles from "../../../style/components/inscriptions/inscription_page/InscriptionPage.module.scss";

import useCours from "@/app/hooks/useCours";
import useInscriptions from "@/app/hooks/useInscriptions";
import InscriptionPageCoursList from "./InscriptionPageCoursList";

export default function InscriptionPage() {
  const params = useParams<{ matricule: string }>();
  const [inscription,, getInscription] = useInscriptions();
  const [cours, getCours] = useCours();

  useEffect(() => {
    getInscription(params.matricule);
  }, [params.matricule]);

  useEffect(() => {
    getCours();
  }, [inscription]);

  if (inscription.length > 0) {
    return (
      <main className={styles.main}>
        <section className={styles.inscription_data}>
          <h2>{inscription[0].nom} {inscription[0].prenom}</h2>
          <p>Matricule: {inscription[0].matricule}</p>

          <section className={styles.inscription_annee_etude}>
            {inscription.map((inscr, index) => (
              <InscriptionPageCoursList key={`inscription_${index}`} inscription={inscr} cours={cours} />
            ))}
          </section>
        </section>
      </main>
    )
  }

  return (
    <>
    </>
  );
}

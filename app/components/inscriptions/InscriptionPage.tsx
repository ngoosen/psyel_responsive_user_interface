"use client";

import useInscriptions from "@/app/hooks/useInscriptions";
import { useParams } from "next/navigation";
import { useEffect } from "react";

import styles from "../../style/components/inscriptions/InscriptionPage.module.scss";

export default function InscriptionPage() {
  const params = useParams<{ matricule: string }>();
  const [inscription,, getInscription] = useInscriptions();

  useEffect(() => {
    getInscription(params.matricule);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.matricule]);


  if (inscription.length > 0) {
    return (
      <main className={styles.main}>
        <section>
          <h2>{inscription[0].prenom} {inscription[0].nom}</h2>
        </section>
      </main>
    )
  }

  return (
    <>
    </>
  );
}

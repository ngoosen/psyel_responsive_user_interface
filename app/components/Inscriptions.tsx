"use client";

import { useEffect } from "react";

import useInscriptions from "../hooks/useInscriptions";

export default function Inscriptions() {
  const [inscriptions, getInscriptions] = useInscriptions();

  useEffect(() => {
    getInscriptions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {inscriptions.map((inscription, index) => <p key={index}>{inscription.matricule}</p>)}
    </>
  );
}

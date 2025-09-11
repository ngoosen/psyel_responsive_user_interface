"use client";

import { useEffect } from "react";

import useCours from "../hooks/useCours";

export default function Cours() {
  const [cours, getCours] = useCours();

  useEffect(() => {
    getCours();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {cours.map((cour, index) => <p key={index}>{cour.intitule}</p>)}
    </>
  );
}

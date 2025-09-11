import { useState } from "react";

export interface COURS {
  mnemonique: string;
  intitule: string;
  credit: number;
  titulaire: string;
}

export default function useCours(): [
  COURS[],
  CallableFunction,
  CallableFunction,
] {
  const [cours, setCours] = useState<COURS[]>([]);

  async function getCours() {
    try {
      const res = await fetch("api/cours");
      const data = await res.json();

      setCours(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCoursByMnemonique(mnemonique: string) {
    try {
      const res = await fetch(`api/cours/${mnemonique}`);
      const data = await res.json();

      setCours(data);
    } catch (error) {
      console.log(error);
    }
  }

  return [
    cours,
    getCours,
    getCoursByMnemonique,
  ];
}
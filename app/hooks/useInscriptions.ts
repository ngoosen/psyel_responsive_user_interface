import { useState } from "react";

export interface INSCRIPTION {
  matricule: string;
  nom: string;
  prenom: string;
  annee_etude: number;
  cours_json: string;
}

export default function useInscriptions(): [
  INSCRIPTION[],
  CallableFunction,
] {
  const [inscriptions, setInscriptions] = useState<INSCRIPTION[]>([]);

  async function getInscriptions() {
    try {
      const res = await fetch("/api/inscriptions");
      const data = await res.json();

      setInscriptions(data);
    } catch (e) {
      console.log(e);
    }
  }

  return [
    inscriptions,
    getInscriptions,
  ];
}
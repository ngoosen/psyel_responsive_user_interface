import { useState } from "react";

export interface INSCRIPTION {
  matricule: string;
  nom: string;
  prenom: string;
  annee_etude: number;
  cours_json: string[];
}

export default function useInscriptions(): [
  INSCRIPTION[],
  CallableFunction,
  CallableFunction,
] {
  const [inscriptions, setInscriptions] = useState<INSCRIPTION[]>([]);

  async function getInscriptions() {
    try {
      const res = await fetch("/api/inscriptions");
      const data = await res.json();

      setInscriptions(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getInscription(matricule: string) {
    try {
      const res = await fetch("/api/inscriptions/" + matricule);
      const data = await res.json();

      setInscriptions(() => {
        const destructuredCours = data.map((d: {
          matricule: string;
          nom: string;
          prenom: string;
          annee_etude: number;
          cours_json: string;
        }) => {
          return {
            ...d,
            cours_json: JSON.parse(d.cours_json),
          }
        });

        return destructuredCours;
      });
    } catch (error) {
      console.log(error);
    }
  }

  return [
    inscriptions,
    getInscriptions,
    getInscription,
  ];
}
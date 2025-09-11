import { useState } from "react";

export interface NOTE {
  id: number;
  matricule: string;
  mnemonique: string;
  note: number;
}

export default function useNotes(): [
  NOTE[],
  CallableFunction,
  CallableFunction,
  CallableFunction,
  CallableFunction,
] {
  const [notes, setNotes] = useState<NOTE[]>([]);

  async function getNotes() {
    try {
      const res = await fetch("api/notes");
      const data = await res.json();

      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getNotesByMatricule(matricule: string) {
    try {
      const res = await fetch("api/notes?matricule=" + matricule);
      const data = await res.json();

      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getNotesByMnemonique(mnemonique: string) {
    try {
      const res = await fetch("api/notes?mnemonique=" + mnemonique);
      const data = await res.json();

      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getNotesByMatriculeAndMnemonique(matricule: string, mnemonique: string) {
    try {
      const res = await fetch(`api/notes?matricule=${matricule}&mnemonique=${mnemonique}`);
      const data = await res.json();

      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  return [
    notes,
    getNotes,
    getNotesByMatricule,
    getNotesByMnemonique,
    getNotesByMatriculeAndMnemonique,
  ]
}
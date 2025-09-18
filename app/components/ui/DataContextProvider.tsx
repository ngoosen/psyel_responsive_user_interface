/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ReactNode, useEffect, useState } from "react";

import { DataContext } from "@/app/hooks/contexts/useData";
import useCours, { COURS } from "@/app/hooks/useCours";
import useInscriptions, { INSCRIPTION } from "@/app/hooks/useInscriptions";
import useNotes, { NOTE } from "@/app/hooks/useNotes";

interface DATA_CONTEXT_PROVIDER_PROPS {
  children: ReactNode | ReactNode[];
}

export default function DataContextProvider(props: DATA_CONTEXT_PROVIDER_PROPS) {
  const { children, } = props;

  const [cours, setCours] = useState<COURS[]>([]);
  const [inscriptions, setInscriptions] = useState<INSCRIPTION[]>([]);
  const [notes, setNotes] = useState<NOTE[]>([]);

  const [fetchedCours, getCours] = useCours();
  const [fetchedInscriptions, getInscriptions] = useInscriptions();
  const [fetchedNotes, getNotes] = useNotes();

  useEffect(() => {
    getCours();
    getInscriptions();
    getNotes();
  }, []);

  useEffect(() => {
    setCours(fetchedCours);
  }, [fetchedCours]);

  useEffect(() => {
    setInscriptions(fetchedInscriptions);
  }, [fetchedInscriptions]);

  useEffect(() => {
    setNotes(fetchedNotes);
  }, [fetchedNotes]);

  return (
    <DataContext.Provider value={{ cours, inscriptions, notes, }}>
      {children}
    </DataContext.Provider>
  );
}

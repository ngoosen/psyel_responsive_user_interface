import { createContext } from "react";
import { COURS } from "../useCours";
import { INSCRIPTION } from "../useInscriptions";
import { NOTE } from "../useNotes";

interface DATA_CONTEXT {
  cours: COURS[];
  inscriptions: INSCRIPTION[];
  notes: NOTE[];
}

const initialDataContext: DATA_CONTEXT = {
  cours: [],
  inscriptions: [],
  notes: [],
};

export const DataContext = createContext<DATA_CONTEXT>(initialDataContext);

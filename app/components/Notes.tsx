"use client";

import { useEffect } from "react";

import useNotes from "../hooks/useNotes";

export default function Notes() {
  const [notes, getNotes] = useNotes();

  useEffect(() => {
    getNotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {notes.map((note, index) => <p key={index}>{note.note}</p>)}
    </>
  );
}

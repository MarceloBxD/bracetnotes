import React, { useState, createContext, useContext } from "react";

import { notes } from "@/data/notes";
import { NoteProps } from "@/types/notes";

type NotesContextProps = {
  allNotes: NoteProps[];
  setAllNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
};

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [allNotes, setAllNotes] = useState(notes);

  const value = { allNotes, setAllNotes };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

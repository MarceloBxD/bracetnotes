import React, { useState, createContext, useContext, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

type NotesContextProps = {
  allNotes: any[];
  setAllNotes: React.Dispatch<React.SetStateAction<any[]>>;
};

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [allNotes, setAllNotes] = useState([] as any[]);

  useEffect(() => {
    const allNotesFromStorage = async () => {
      try {
        const notes = await AsyncStorage.getItem("notes");
        if (notes !== null) {
          setAllNotes(JSON.parse(notes));
        }
      } catch (e) {
        console.log(e);
      }
    };
    allNotesFromStorage();
  }, []);

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

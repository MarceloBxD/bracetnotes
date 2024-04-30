import React, { useState } from "react";
import Update from "@/components/Update/Update.component";
import Write from "@/components/Write/Write.component";
import { NotesProvider } from "@/contexts/NotesContext";
import Read from "@/components/Read/Read.component";

export default function App() {
  const [mainState, setMainState] = useState<"read" | "write" | "update">(
    "read"
  );
  const [editNoteId, setEditNoteId] = useState<number | undefined>(undefined);

  {
    return (
      <NotesProvider>
        {mainState === "read" ? (
          <Read setEditNoteId={setEditNoteId} setMainState={setMainState} />
        ) : mainState === "write" ? (
          <Write setMainState={setMainState} />
        ) : (
          <Update setMainState={setMainState} editNoteId={editNoteId} />
        )}
      </NotesProvider>
    );
  }
}

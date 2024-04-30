import { SafeAreaView, TouchableOpacity, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useState } from "react";
import { useNotes } from "@/contexts/NotesContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UpdateProps = {
  setMainState: React.Dispatch<
    React.SetStateAction<"read" | "write" | "update">
  >;
  editNoteId: number | undefined;
};

const Update: React.FC<UpdateProps> = ({ setMainState, editNoteId }) => {
  const { allNotes, setAllNotes } = useNotes();
  const [content, setContent] = useState<string>(
    editNoteId !== undefined ? allNotes[editNoteId].content : ""
  );

  const deleteNote = async () => {
    const newNotes = allNotes.filter((_, idx) => idx !== editNoteId);

    setAllNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const updateNote = async () => {
    const newNotes = allNotes.map((note, idx) =>
      idx === editNoteId ? { ...note, content: content } : note
    );

    setAllNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <SafeAreaView className="flex-1 py-20 px-5">
      <Text>Atualizar Tarefa</Text>
      <TouchableOpacity
        onPress={() => setMainState("read")}
        className="w-12 h-12 bg-[#0694a2] absolute flex justify-center items-center top-8 right-5 text-white rounded-full"
      >
        <Text className="text-white text-lg">X</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Texto da Nota"
        autoFocus
        value={content}
        onChangeText={(t) => setContent(t)}
        className="border border-gray-400 p-2 mt-5"
      />

      <TouchableOpacity
        onPress={() => {
          setMainState("read");
          updateNote();
        }}
        className="bg-[#0694a2] p-2 mt-5 rounded-md"
      >
        <Text className="text-white text-center">Atualizar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setMainState("read");
          deleteNote();
        }}
        className="bg-[#0694a2] p-2 mt-5 rounded-md"
      >
        <Text className="text-white text-center">Deletar Nota</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Update;

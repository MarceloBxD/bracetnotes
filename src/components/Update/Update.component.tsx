import { SafeAreaView, TouchableOpacity, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

import { notes } from "@/data/notes";
import { useState } from "react";

type UpdateProps = {
  setMainState: React.Dispatch<
    React.SetStateAction<"read" | "write" | "update">
  >;
  editNoteId: number | undefined;
};

const Update: React.FC<UpdateProps> = ({ setMainState, editNoteId }) => {
  const [content, setContent] = useState<string>(
    editNoteId !== undefined ? notes[editNoteId].content : ""
  );

  const updateNote = () => {
    notes[editNoteId as number].content = content;
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
        placeholder="Title"
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
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Update;

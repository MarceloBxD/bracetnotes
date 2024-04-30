import { SafeAreaView, TouchableOpacity, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

import { notes } from "@/data/notes";

type UpdateProps = {
  setMainState: React.Dispatch<
    React.SetStateAction<"read" | "write" | "update">
  >;
  editNoteId: number | undefined;
};

const Update: React.FC<UpdateProps> = ({ setMainState, editNoteId }) => {
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
        value={editNoteId !== undefined ? notes[editNoteId].title : ""}
        className="border border-gray-400 p-2 mt-5"
      />
      <TextInput
        placeholder="Description"
        value={editNoteId !== undefined ? notes[editNoteId].description : ""}
        className="border border-gray-400 p-2 mt-5"
      />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Update;

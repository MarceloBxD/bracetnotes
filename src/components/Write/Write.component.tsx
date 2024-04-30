import { useNotes } from "@/contexts/NotesContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

type WriteProps = {
  setMainState: React.Dispatch<
    React.SetStateAction<"read" | "write" | "update">
  >;
};

const Write: React.FC<WriteProps> = ({ setMainState }) => {
  const [content, setContent] = useState<string>("");
  const { allNotes } = useNotes();

  const handleCreateTask = () => {
    try {
      const newNote = {
        id: allNotes.length + 1,
        content: content,
      };
      console.log(newNote);
      AsyncStorage.setItem("notes", JSON.stringify([...allNotes, newNote]));
      allNotes.push(newNote);
      setMainState("read");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView className="flex-1 py-10 px-5">
      <TouchableOpacity
        onPress={() => setMainState("read")}
        className="w-12 h-12 bg-[#0694a2] absolute flex justify-center items-center top-8 right-5 text-white rounded-full"
      >
        <Text className="text-white text-lg">X</Text>
      </TouchableOpacity>
      <View className="p-2 mt-5">
        <View className="mt-5">
          <Text className="text-lg">Conteúdo</Text>
          <TextInput
            multiline={true}
            value={content}
            onChangeText={(text) => setContent(text)}
            className="border border-gray-400 p-2 mt-2"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            handleCreateTask();
          }}
          className="bg-[#0694a2] p-2 mt-5 rounded-md"
        >
          <Text className="text-white text-center">Criar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Write;

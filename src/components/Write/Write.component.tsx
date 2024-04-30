import { WRITE_DATA } from "@/data/write-data";
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
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleCreateTask = () => {
    const newTask = {
      title,
      description,
      content,
      footer: "Criado em: " + new Date().toLocaleString(),
    };

    setMainState("read");
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
        {WRITE_DATA.map((item, idx) => (
          <View key={idx} className="mt-5">
            <Text className="text-lg">{item.title}</Text>
            <TextInput
              value={
                item.title === "Título"
                  ? title
                  : item.title === "Descrição"
                  ? description
                  : content
              }
              onChangeText={(text) =>
                item.title === "Título"
                  ? setTitle(text)
                  : item.title === "Descrição"
                  ? setDescription(text)
                  : setContent(text)
              }
              placeholder={item.placeholder}
              className="border border-gray-400 p-2 mt-2"
            />
          </View>
        ))}

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

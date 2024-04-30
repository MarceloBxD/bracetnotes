import React from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";

import { StatusBar } from "expo-status-bar";
import { useNotes } from "@/contexts/NotesContext";
import { PROJECT_DESCRIPTION, PROJECT_OWNER } from "@/data/constants";

type ReadProps = {
  setEditNoteId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMainState: React.Dispatch<
    React.SetStateAction<"read" | "write" | "update">
  >;
};

const Read = ({ setEditNoteId, setMainState }: ReadProps) => {
  const { allNotes } = useNotes();

  return allNotes.length >= 1 ? (
    <SafeAreaView className="flex-1 pt-5 ">
      <ScrollView>
        {allNotes.map((item, idx) => (
          <TouchableOpacity
            className=" mt-5 "
            key={idx}
            onPress={() => {
              setEditNoteId(idx);
              setMainState("update");
            }}
          >
            <Card className="px-2 ring-0 outline-0 border-0">
              <Text className="text-base border-b border-b-slate-400 pb-4 text-primary">
                {item.content}
              </Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Button
        className="w-16 h-16 rounded-full right-5 bg-[#0694a2] absolute bottom-5"
        onPress={() => setMainState("write")}
        label="+"
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  ) : (
    <SafeAreaView className="flex-1 pt-5">
      <View className="border-b border-b-black pb-3">
        <Text className="text-center mt-5 text-xl text-gray-600">
          {PROJECT_OWNER}{" "}
        </Text>
        <Text className="text-center text-gray-500">{PROJECT_DESCRIPTION}</Text>
      </View>
      <Text className="text-center mt-5 text-xl text-gray-600">
        Não há notas para exibir :(
      </Text>
      <Button
        className="w-16 h-16 rounded-full right-5 bg-[#0694a2] absolute bottom-5"
        onPress={() => setMainState("write")}
        label="+"
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Read;

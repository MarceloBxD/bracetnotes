import React from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import { Button } from "../../../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/Card";

import { StatusBar } from "expo-status-bar";
import { notes } from "@/data/notes";
import { useNotes } from "@/contexts/NotesContext";

type ReadProps = {
  setEditNoteId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMainState: React.Dispatch<
    React.SetStateAction<"read" | "write" | "update">
  >;
};

const Read = ({ setEditNoteId, setMainState }: ReadProps) => {
  const { allNotes } = useNotes();

  return (
    <SafeAreaView className="flex-1 pt-5 ">
      <ScrollView>
        {allNotes.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              setEditNoteId(idx);
              setMainState("update");
            }}
          >
            <Card className="w-full mt-5">
              <CardContent>
                <Text className="text-base text-primary">{item.content}</Text>
              </CardContent>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Button
        className="w-full bg-[#0694a2] fixed bottom-0 text-white rounded-none"
        onPress={() => setMainState("write")}
        label="Add Item"
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Read;

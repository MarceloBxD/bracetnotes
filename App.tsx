import React, { useState } from "react";
import { Button } from "./components/Button";
import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/Card";

import Update from "@/components/Update/Update.component";
import Write from "@/components/Write/Write.component";
import { notes } from "@/data/notes";

export default function App() {
  const [mainState, setMainState] = useState<"read" | "write" | "update">(
    "read"
  );
  const [editNoteId, setEditNoteId] = useState<number | undefined>(undefined);

  {
    return (
      <>
        {mainState === "read" ? (
          <SafeAreaView className="flex-1 pt-5 ">
            <ScrollView className="flex-1 ml-10">
              {notes.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => {
                    setEditNoteId(idx);
                    setMainState("update");
                  }}
                >
                  <Card className="w-[90%] mt-4">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Text className="text-base text-primary">
                        {item.content}
                      </Text>
                    </CardContent>
                    <CardFooter>
                      <Text className="text-sm text-muted-foreground">
                        {item.footer}
                      </Text>
                    </CardFooter>
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
        ) : mainState === "write" ? (
          <Write setMainState={setMainState} />
        ) : (
          <Update setMainState={setMainState} editNoteId={editNoteId} />
        )}
      </>
    );
  }
}

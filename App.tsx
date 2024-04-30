import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/Card";
import { Button } from "./components/Button";

export default function App() {
  const [mainState, setMainState] = useState<"read" | "write" | "update">(
    "read"
  );
  const [editNoteId, setEditNoteId] = useState<number | undefined>(undefined);

  const cards = [
    {
      title: "Design System",
      description: "Create a design system for your app",
      content: "Sleek, easy to use components to build your next app faster.",
      footer: "Inspired by shadcn/ui",
    },
    {
      title: "Design UX/UI",
      description: "Create a design for the app",
      content: "Sleek, easy to use components to build your next app faster.",
      footer: "Inspired by shadcn/ui",
    },
    {
      title: "Accelerate UI",
      description: "Enter a new development experience",
      content: "Sleek, easy to use components to build your next app faster.",
      footer: "Inspired by shadcn/ui",
    },
    {
      title: "Accelerate UI",
      description: "Enter a new development experience",
      content: "Sleek, easy to use components to build your next app faster.",
      footer: "Inspired by shadcn/ui",
    },
    {
      title: "Accelerate UI",
      description: "Enter a new development experience",
      content: "Sleek, easy to use components to build your next app faster.",
      footer: "Inspired by shadcn/ui",
    },
  ];

  {
    return mainState === "read" ? (
      <SafeAreaView className="flex-1 pt-5 ">
        <ScrollView className="flex-1 ml-10">
          {cards.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => {
                setEditNoteId(idx);
                setMainState("update");
                console.log(idx);
              }}
            >
              <Card className="w-[90%] mt-4">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text className="text-base text-primary">{item.content}</Text>
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
      <SafeAreaView className="flex-1 py-10 px-5">
        <Text>Write Note</Text>
        <TouchableOpacity
          onPress={() => setMainState("read")}
          className="w-12 h-12 bg-[#0694a2] absolute flex justify-center items-center top-8 right-5 text-white rounded-full"
        >
          <Text className="text-white text-lg">X</Text>
        </TouchableOpacity>
        <StatusBar style="dark" />
      </SafeAreaView>
    ) : (
      <SafeAreaView className="flex-1 py-10 px-5">
        <Text>Update Note</Text>
        <TouchableOpacity
          onPress={() => setMainState("read")}
          className="w-12 h-12 bg-[#0694a2] absolute flex justify-center items-center top-8 right-5 text-white rounded-full"
        >
          <Text className="text-white text-lg">X</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Title"
          value={editNoteId !== undefined ? cards[editNoteId].title : ""}
          className="border border-gray-400 p-2 mt-5"
        />
        <TextInput
          placeholder="Description"
          value={editNoteId !== undefined ? cards[editNoteId].description : ""}
          className="border border-gray-400 p-2 mt-5"
        />

        <StatusBar style="dark" />
      </SafeAreaView>
    );
  }
}

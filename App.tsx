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
import { Dialog, DialogContent, DialogTrigger } from "./components/Dialog";

export default function App() {
  const [mainState, setMainState] = useState<"read" | "write">("read");
  const [editNoteId, setEditNoteId] = useState<number | undefined>(undefined);

  const cards = [
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
          <Dialog>
            {cards.map((item, idx) => (
              <DialogTrigger
                onPress={() => {
                  setEditNoteId(idx);
                  alert("cliquei");
                }}
                key={idx}
              >
                <TouchableOpacity>
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
              </DialogTrigger>
            ))}
            <DialogContent className="">
              <View className="flex relative gap-4 bg-[#0694a2] p-12">
                <TextInput
                  value={
                    editNoteId !== undefined ? cards[editNoteId].title : "oláaa"
                  }
                  className="w-full h-12 bg-white rounded-lg p-2"
                />

                <Text className="text-primary text-white">
                  Tap outside the dialog to close it.
                </Text>
              </View>
            </DialogContent>
          </Dialog>
        </ScrollView>

        <Button
          className="w-full bg-[#0694a2] fixed bottom-0 text-white rounded-none"
          onPress={() => setMainState("write")}
          label="Add Item"
        />
        <StatusBar style="dark" />
      </SafeAreaView>
    ) : (
      <View>
        <Text>Write Note</Text>
        <TouchableOpacity
          onPress={() => setMainState("read")}
          className="w-16 h-16 bg-[#0694a2] fixed top-5 right-5 text-white rounded-full"
        >
          <Text>Close</Text>
        </TouchableOpacity>
        <StatusBar style="dark" />
      </View>
    );
  }
}

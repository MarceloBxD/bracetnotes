import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./components/Button";

export default function App() {
  const [mainState, setMainState] = useState<"read" | "write">("read");

  {
    return mainState === "read" ? (
      <View className="" style={styles.container}>
        <Text>Bracet Notes</Text>
        <Button onPress={() => setMainState("write")} label="Add Item" />
        <StatusBar style="dark" />
      </View>
    ) : (
      <View style={styles.container}>
        <Text>Write Note</Text>
        <StatusBar style="dark" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

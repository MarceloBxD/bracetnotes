import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [mainState, setMainState] = useState<"read" | "write">("read");

  {
    return mainState === "read" ? (
      <View style={styles.container}>
        <Text>Bracet Notes</Text>
        <StatusBar style="dark" />
      </View>
    ) : (
      <View style={styles.container}>
        <Text>Write Note</Text>
        <StatusBar style="auto" />
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

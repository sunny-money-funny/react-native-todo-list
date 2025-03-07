// App.js
import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./src/components/HomeScreen";
import * as Font from "expo-font";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  );
}

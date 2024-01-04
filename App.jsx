import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "react-native-vector-icons";

import AppNavigation from "./navigations";

export default function App() {
  return <AppNavigation />;
}

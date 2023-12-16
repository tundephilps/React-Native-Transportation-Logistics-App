import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Intro from "./screens/Intro";
import GetStarted from "./screens/GetStarted";
import SwiperComponent from "./components/Swiper";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <GetStarted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});

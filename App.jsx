import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Intro from "./screens/Intro";
import GetStarted from "./screens/GetStarted";
import SwiperComponent from "./components/Swiper";
import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import OTPScreen from "./screens/OTPScreen";
import Homepage from "./screens/Homepage";
import Discover from "./screens/Discover";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Discover />
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

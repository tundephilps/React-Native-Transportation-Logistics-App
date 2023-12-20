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
import Location from "./screens/Location";
import Vehicle from "./screens/Vehicle";
import VehicleDetails from "./screens/VehicleDetails";
import Checkout from "./screens/Checkout";
import Charter from "./screens/Charter";
import CharterPreview from "./screens/CharterPreview";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <View>
      <GestureHandlerRootView>
        <StatusBar style="auto" />
        <CharterPreview />
      </GestureHandlerRootView>
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

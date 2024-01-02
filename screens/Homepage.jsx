import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Homepage = () => {
  const imageUrl = "https://via.placeholder.com/600";
  return (
    <View style={{ height: "100%" }}>
      <View style={{ position: "relative" }}>
        <ImageBackground
          source={require("../assets/buses.jpg")}
          style={styles.image}
        >
          <View style={styles.overlay} />
          <View
            style={{
              paddingHorizontal: 16,
              zIndex: 40,
              position: "absolute",
              width: "100%",
              paddingVertical: 42,
              gap: 26,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "200", fontSize: 22, color: "white" }}>
                Welcome back
              </Text>
              <MaterialIcons name="headset-mic" size={28} color="white" />
            </View>
            <Text style={{ color: "white" }}>
              Sign in to your account to continue
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                backgroundColor: "white",
                paddingVertical: 12,
                borderRadius: 8,
                paddingHorizontal: 16,
                gap: 12,
              }}
            >
              <Feather name="search" size={24} color="#20e481" />
              <TextInput placeholder="Where would you like to go" />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ padding: 16 }}>
        {/* Grid */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.bus}>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../assets/bigbus.jpg")}
              resizeMode="cover"
            />
            <Text style={{ fontWeight: "600" }}>Book</Text>
          </View>
          <View style={styles.bus}>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../assets/minibus.jpg")}
              resizeMode="cover"
            />
            <Text style={{ fontWeight: "600" }}>Rent</Text>
          </View>

          <View style={styles.bus}>
            <Image
              style={{ height: 40, width: 40, borderRadius: 12 }}
              source={require("../assets/G.png")}
              resizeMode="cover"
            />
            <Text style={{ fontWeight: "600" }}>EventGo</Text>
          </View>
          <View style={styles.bus}>
            <Image
              style={{ height: 40, width: 40, borderRadius: 12 }}
              source={require("../assets/dice.png")}
              resizeMode="cover"
            />
            <Text style={{ fontWeight: "600" }}>Games</Text>
          </View>
        </View>

        {/* Blackboard */}
        <View style={{ padding: 16 }} />
        <TouchableOpacity
          style={{
            padding: 12,
            backgroundColor: "black",
            borderRadius: 8,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", width: "60%", fontWeight: "400" }}>
            Discover more routes in your area you can book from.
          </Text>
          <View style={{ padding: 20 }} />
          <Text style={{ color: "#20e481" }}>
            View all routes{" "}
            <AntDesign name="arrowright" size={16} color="#20e481" />
          </Text>
          <Image
            style={{
              height: 110,
              width: 120,
              position: "absolute",
              right: 0,
              borderRadius: 8,
            }}
            source={require("../assets/half.jpg")}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Entypo
          name="dot-single"
          size={35}
          color="#20e481"
          style={{
            alignSelf: "center",
          }}
        />
        <Image
          style={{ height: 120, width: "70%", alignSelf: "center" }}
          source={require("../assets/card.jpg")}
          resizeMode="contain"
        />
        <Text
          style={{ alignSelf: "center", fontWeight: "200", paddingTop: 12 }}
        >
          Your frequent routes will appear here
        </Text>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  image: {
    height: 220,
    resizeMode: "cover",
  },
  overlay: {
    height: 220,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust the last value (0.5) for desired opacity level
  },
  bus: {
    backgroundColor: "#f8f8f8",
    height: 74,
    width: 74,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import SwiperComponent from "../components/Swiper";
import { Entypo } from "@expo/vector-icons";

const GetStarted = () => {
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "10%",
          }}
        >
          <Image
            style={{
              height: 18,
              width: "50%",
            }}
            source={require("../assets/shuttlers.png")}
            resizeMode="contain"
          />
        </View>
        {/* Swiper */}

        <SwiperComponent />
        {/* Buttons */}
        <TouchableOpacity
          onPress={() => {
            /* handle onPress */
          }}
        >
          <View
            style={{
              backgroundColor: "#00FF80",

              marginTop: 6, // Margin top
              paddingVertical: 14,
              paddingHorizontal: 18,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16, // Font size
                fontWeight: "normal", // Font weight
                color: "black", // Text color
              }}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 50, paddingVertical: 16 }}>
          <View style={styles.formSpacer}>
            <Text style={styles.formSpacerText}>OR </Text>

            <View style={styles.formSpacerDivider} />
          </View>
        </View>
        {/* Google Button */}

        <TouchableOpacity
          onPress={() => {
            /* handle onPress */
          }}
        >
          <View
            style={{
              marginTop: 6, // Margin top
              paddingVertical: 14,
              paddingHorizontal: 18,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "lightgray",
              borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Image
              style={{ height: 18, width: 18 }}
              source={require("../assets/google.png")}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 16, // Font size
                fontWeight: "bold", // Font weight
                color: "black", // Text color
              }}
            >
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "15%",
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "200" }}>
            Already have an account?{" "}
            <Text style={{ color: "#20e481" }}>Log In</Text>
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            height: 60,
            width: 60,
            borderRadius: 50,
            backgroundColor: "#00FF80",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 0,
            right: 10,
          }}
        >
          <Entypo name="chat" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  formSpacer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  formSpacerText: {
    fontSize: 15,
    fontWeight: "500",
    color: "gray",
    lineHeight: 20,
    paddingHorizontal: 27,
    backgroundColor: "#fff",
    zIndex: 9,
  },
  formSpacerDivider: {
    borderBottomWidth: 2,
    borderColor: "#eff1f5",
    position: "absolute",
    top: 9,
    left: 0,
    right: 0,
  },
});

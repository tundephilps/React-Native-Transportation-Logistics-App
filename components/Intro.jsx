import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Intro = () => {
  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            height: 30,
            width: "80%",
            marginBottom: "10%",
          }}
          source={require("../assets/shuttlers.png")}
          resizeMode="contain"
        />
        <Image
          style={{
            height: 180,
            width: "100%",
            position: "absolute",
            bottom: "0%",
          }}
          source={require("../assets/buildings.jpg")}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({});

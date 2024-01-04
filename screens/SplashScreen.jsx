import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("GetStarted"); // Replace 'MainScreen' with your actual screen name
    }, 3000); // 5000 milliseconds (5 seconds)

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts before 5 seconds
  }, [navigation]);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
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

export default SplashScreen;

const styles = StyleSheet.create({});

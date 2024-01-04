import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import TabSwitcher from "../components/Tabs";

import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation(); // Get the navigation object
  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "white" }}>
        {/* Header */}
        <View
          style={{
            padding: 16,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 35,
              width: 35,
              backgroundColor: "#f8f8f8",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="arrow-back-outline" size={18} color="black" />
          </TouchableOpacity>

          <Image
            style={{
              height: 18,
              width: "50%",
            }}
            source={require("../assets/shuttlers.png")}
            resizeMode="contain"
          />

          <View
            style={{
              height: 35,
              width: 35,
              backgroundColor: "lightgray",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
            }}
          >
            <Ionicons name="arrow-back-outline" size={18} color="black" />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Welcome back</Text>
          <Text style={{ color: "gray" }}>Log into your Shuttlers account</Text>
        </View>

        <View style={{ padding: 16 }}>
          {/* Tabs */}
          <TabSwitcher />
          <View style={{ padding: 16 }} />
          <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
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
                  fontWeight: "bold", // Font weight
                  color: "black", // Text color
                }}
              >
                Proceed
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
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccount")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "15%",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "200" }}>
              Dont have an account?{" "}
              <Text style={{ color: "#20e481" }}>Create One</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              height: 60,
              width: 60,
              borderRadius: 50,
              backgroundColor: "#00FF80",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: -50,
              right: 10,
            }}
          >
            <Entypo name="chat" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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

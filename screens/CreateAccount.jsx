import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import PhoneInput from "react-native-phone-number-input";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const CreateAccount = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={{ height: "100%" }}>
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
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>
            Lets get started
          </Text>
          <Text style={{ color: "gray" }}>
            Enter your mobile number and email address, and we'll send a 4 digit
            code to confirm it. SMS rates may apply.
          </Text>
          <View style={{ padding: 16 }} />
          <View style={{ paddingTop: 16, gap: 8 }}>
            {/* Your Email Component Content */}
            <Text>Phone number</Text>
            <PhoneInput
              defaultValue={phoneNumber}
              defaultCode="NG"
              layout="first"
              //  withShadow
              //  autoFocus
              // placeholder="Enter Phone Number"
              // keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              containerStyle={styles.PhoneInput}
              textContainerStyle={{ backgroundColor: "white" }}
            />
          </View>
          <View style={{ paddingTop: 16, gap: 8 }}>
            {/* Your Email Component Content */}
            <Text>Email address</Text>
            <TextInput
              placeholder="Enter email address"
              style={{
                height: 52,
                borderColor: "lightgray",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 12,
              }}
            />
          </View>
          <View style={{ padding: "35%" }} />
          <TouchableOpacity onPress={() => navigation.navigate("OTPScreen")}>
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
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
          bottom: 120,
          right: 10,
        }}
      >
        <Entypo name="chat" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  PhoneInput: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 52,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "white",
  },
});

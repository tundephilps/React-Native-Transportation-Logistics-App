// OTPScreen.jsx

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import TimerComponent from "../components/Timer";

const OTPScreen = ({ navigation, timerActive, resetTimer }) => {
  const [otp, setOtp] = useState("");

  const handleOTPVerification = () => {
    // Perform OTP verification logic here
    if (otp === "1234") {
      // Simulating a successful verification, replace with your logic
      Alert.alert("Success", "OTP Verified Successfully");
      resetOTP(); // Reset OTP when verification is successful
    } else {
      Alert.alert("Error", "Invalid OTP. Please try again.");

      resetOTP(); // Reset OTP when verification is successful
    }
  };

  const resetOTP = () => {
    setOtp("");
  };

  return (
    <SafeAreaView style={styles.container}>
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
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Confirm your number
        </Text>
        <Text>
          Enter the 4-digit code sent to{" "}
          <Text style={{ fontWeight: "700", fontSize: 15 }}>
            {" "}
            +234 8034574174
          </Text>
        </Text>
        <OTPInputView
          style={styles.otpInput}
          pinCount={4}
          code={otp}
          onCodeChanged={(code) => setOtp(code)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.codeInputField}
          codeInputHighlightStyle={styles.codeInputHighlight}
        />

        <View style={{ padding: 16 }} />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 150,
          }}
        >
          <Text style={{ fontWeight: "200" }}>Didnt receive code?</Text>
          <Text
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TimerComponent />
          </Text>
        </View>
        {/* Button */}
        <View style={{ padding: "28%", position: "relative" }} />

        <Text
          style={{
            textAlign: "center",
            color: "green",
            textDecorationLine: "underline",
          }}
        >
          Recieve OTP with email instead
        </Text>
        <TouchableOpacity onPress={handleOTPVerification}>
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
              Verify OTP
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  otpInput: {
    height: 80,
  },
  codeInputField: {
    borderWidth: 2,
    borderRadius: 8,
    color: "black",
    width: 70,
    height: 60,
  },
  codeInputHighlight: {
    borderColor: "#00FF80",
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: "#00FF80",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  verifyButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default OTPScreen;

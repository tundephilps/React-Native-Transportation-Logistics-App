import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Stops = () => {
  const [numberOfStops, setNumberOfStops] = useState("");
  const [stopValues, setStopValues] = useState(Array(numberOfStops).fill(""));

  const handleNumberOfStopsChange = (text) => {
    const value = parseInt(text, 10) || 0;
    setNumberOfStops(value);
    setStopValues(Array(value).fill(""));
  };

  const handleStopValueChange = (index, value) => {
    const newStopValues = [...stopValues];
    newStopValues[index] = value;
    setStopValues(newStopValues);
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      {/* Header */}
      <View
        style={{
          padding: 16,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomColor: "lightgray",
          borderBottomWidth: 1,
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
        <Text style={{ fontWeight: "800", fontSize: 18 }}>Stops Location</Text>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: "#f8f8f8",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
          }}
        >
          <Ionicons name="arrow-back-outline" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ padding: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Foundation name="info" size={24} color="gray" />
          <Text style={{ color: "gray", fontWeight: "200" }}>
            Kindly enter the right bus stop locations
          </Text>
        </View>
        <View style={{ padding: 12 }} />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ color: "green", fontWeight: "700" }}>
            BUS STOP LOCATIONS
          </Text>
          <View style={{ width: 180, height: 0.9, backgroundColor: "green" }} />
        </View>

        <View style={{ padding: 8 }} />

        <View>
          <Text style={{ paddingBottom: 6 }}>Number of stops</Text>
          <TextInput
            style={{
              height: 52,
              borderColor: "lightgray",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 12,
            }}
            placeholder="Enter Value"
            keyboardType="numeric"
            onChangeText={handleNumberOfStopsChange}
            value={numberOfStops.toString()}
          />
        </View>

        {Array.from({ length: numberOfStops }).map((_, index) => (
          <View key={index} style={{ marginTop: 12 }}>
            <Text style={{ paddingBottom: 6 }}>Stop {index + 1}</Text>
            <TextInput
              style={{
                height: 52,
                borderColor: "lightgray",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 12,
              }}
              placeholder={`Bus Stop #${index + 1} Location`}
              value={stopValues[index]}
              onChangeText={(value) => handleStopValueChange(index, value)}
            />
          </View>
        ))}
        <View style={{ padding: 24 }} />
      </ScrollView>

      <View
        style={{
          borderTopColor: "lightgray",
          borderTopWidth: 1,
          padding: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            /* handle onPress */
          }}
        >
          <View
            style={{
              backgroundColor: "#00FF80", // Background color
              marginTop: 0, // Margin top
              paddingVertical: 18,
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
                fontWeight: "700",
              }}
            >
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Stops;

const styles = StyleSheet.create({});

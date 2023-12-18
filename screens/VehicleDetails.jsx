import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
const VehicleDetails = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
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
        <Text style={{ fontWeight: "800", fontSize: 18 }}>Vehicle details</Text>
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
      <View style={{ padding: 16 }}></View>
    </SafeAreaView>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({});

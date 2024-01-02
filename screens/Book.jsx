import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import SearchLocation from "../components/SearchLocation";
import Oneway2 from "../components/Oneway2";
import Return2 from "../components/Return2";

const Book = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [activeIcon, setActiveIcon] = useState("");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const isIconActive = (iconName) => {
    return iconName === activeIcon ? "#F9FAFF" : "#eeeeee";
  };

  const options = [
    { id: 1, label: "One-way" },
    { id: 2, label: "Return Trip" },
  ];
  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };
  const renderOptions = () => {
    if (selectedOption === 1) {
      return (
        <View style={{ width: "100%" }}>
          <Oneway2 />
        </View>
      );
    } else if (selectedOption === 2) {
      return <Return2 />;
    }
    return null;
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
        <Text style={{ fontWeight: "800", fontSize: 18 }}>
          Where would you like to go?
        </Text>
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
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <SearchLocation />

        <View style={{ padding: 8 }} />
        <View
          style={{
            backgroundColor: "#e8e8e8",
            paddingHorizontal: 26,
            paddingVertical: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 5,
          }}
        >
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionSelect(option.id)}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={[
                  {
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  {
                    borderColor:
                      selectedOption === option.id ? "black" : "gray",
                  },
                ]}
              >
                {selectedOption === option.id && (
                  <View
                    style={[
                      { width: 12, height: 12, borderRadius: 6 },
                      { backgroundColor: "black" },
                    ]}
                  />
                )}
              </View>
              <Text
                style={[
                  { marginLeft: 8, fontWeight: "200" },
                  {
                    color: selectedOption === option.id ? "black" : "gray",
                  },
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>{renderOptions()}</View>
      </ScrollView>
      <View style={{ height: 90, paddingHorizontal: 16 }}>
        <TouchableOpacity
          onPress={() => {
            /* handle onPress */
          }}
        >
          <View
            style={{
              backgroundColor: "gray", // Background color
              marginTop: 6, // Margin top
              paddingVertical: 20,
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
                color: "#fff", // Text color
              }}
            >
              Create shuttle subscription
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Book;

const styles = StyleSheet.create({
  dash: {
    width: 1.5,
    height: 3,
    backgroundColor: "gray",
  },
});
{
  /* <View
style={{
  backgroundColor: "#e8e8e8",
  paddingVertical: 12,
  borderColor: "lightgray",
  borderWidth: 1,
  borderRadius: 5,
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
  padding: 12,
  display: "flex",
}}
>
<View style={{ flexDirection: "column", alignItems: "center" }}>
  <Octicons name="dot" size={28} color="#20e481" />
  <View style={{ display: "flex", gap: 8 }}>
    <View style={styles.dash} />
    <View style={styles.dash} />
    <View style={styles.dash} />
  </View>

  <Entypo name="location-pin" size={24} color="blue" />
</View>
<View style={{ width: "100%" }}>
  <TextInput placeholder="  Pick up location" />
  <View
    style={{
      backgroundColor: "lightgray",
      height: 1,
      width: "90%",
      margin: 4,
    }}
  />

  <TextInput placeholder="  Search destination" />
</View>
</View> */
}

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
import { Ionicons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Oneway from "../components/Oneway";
import Return from "../components/Return";
import { useNavigation } from "@react-navigation/native";

const Charter = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [activeIcon, setActiveIcon] = useState("");

  const navigation = useNavigation();

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
          <Oneway />
        </View>
      );
    } else if (selectedOption === 2) {
      return <Return />;
    }
    return null;
  };

  return (
    <SafeAreaView>
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
          <Text style={{ fontWeight: "800", fontSize: 18 }}>
            Vehicle Charter
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
          {/* Banner */}
          <View
            style={{
              backgroundColor: "#e8e8e8",
              padding: 8,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ height: 60, width: 100 }}
                source={require("../assets/van2.png")}
                resizeMode="contain"
              />
              <View>
                <Text style={{ fontWeight: "700" }}>Coaster Bus</Text>
                <Text style={{ fontWeight: "200" }}>No of vehicles: 1</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: "200", fontSize: 10, color: "gray" }}>
                Starting from
              </Text>
              <Text
                style={{ fontWeight: "700", color: "#20e481", fontSize: 15 }}
              >
                N70,000
              </Text>
            </View>
          </View>
          <View style={{ padding: 8 }} />
          {/* Location */}
          <View
            style={{
              backgroundColor: "#e8e8e8",
              paddingVertical: 12,
              borderColor: "lightgray",
              borderWidth: 1,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              paddingLeft: 12,
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
                  borderTopColor: "lightgray",
                  borderTopWidth: 2,
                  padding: 4,
                  margin: 4,
                }}
              />

              <TextInput placeholder="  Search destination" />
            </View>
          </View>

          <View style={{ padding: 8 }} />
          <View
            style={{
              backgroundColor: "#e8e8e8",
              padding: 12,
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
                        selectedOption === option.id ? "#20e481" : "gray",
                    },
                  ]}
                >
                  {selectedOption === option.id && (
                    <View
                      style={[
                        { width: 12, height: 12, borderRadius: 6 },
                        { backgroundColor: "#20e481" },
                      ]}
                    />
                  )}
                </View>
                <Text style={{ marginLeft: 8, fontWeight: "200" }}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text>{renderOptions()}</Text>
        </ScrollView>
        <View
          style={{
            borderTopColor: "lightgray",
            borderTopWidth: 1,
            padding: 12,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Stops")}>
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
      </View>
    </SafeAreaView>
  );
};

export default Charter;

const styles = StyleSheet.create({
  dash: {
    width: 1.5,
    height: 3,
    backgroundColor: "gray",
  },
});

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    name: "Shuttler Black",

    Image: require("../assets/van.png"),
    description:
      "Experience travel like never before with the Jet Moove Equipped with WFI connection",
    price: "N100,000",
    seats: "14",
  },
  {
    name: "Coaster Bus",

    Image: require("../assets/van2.png"),
    description:
      "The roomy and comfortable busses can fit 27 passengers provinding you",
    price: "N70,000",
    seats: "27",
  },
  {
    name: "Mini Bus",

    Image: require("../assets/van3.png"),
    description:
      "Experience travel like never before with the Jet Moove Equipped with WFI connection",
    price: "N100,000",
    seats: "14",
  },
  {
    name: "Mini Van",

    Image: require("../assets/van6.png"),
    description:
      "Experience travel like never before with the Jet Moove Equipped with WFI connection",
    price: "N35,000",
    seats: "6",
  },
  {
    name: "Sedan",

    Image: require("../assets/van4.png"),
    description:
      "Experience travel like never before with the Jet Moove Equipped with WFI connection",
    price: "N25,000",
    seats: "4",
  },
  {
    name: "Padro SUV",

    Image: require("../assets/van5.png"),
    description:
      "Experience travel like never before with the Jet Moove Equipped with WFI connection",
    price: "N80,000",
    seats: "4",
  },

  // ... add more data objects
];

const Vehicle = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
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
        <Text style={{ fontWeight: "800", fontSize: 18 }}>Hire a vehicle</Text>
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
      <View style={{ padding: 16 }}>
        <Text style={{ color: "gray", fontSize: 12, paddingBottom: 12 }}>
          Explore our diverse selection of vehicle categories
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <TouchableOpacity
              style={styles.card}
              key={index}
              onPress={() => navigation.navigate("VehicleDetails")}
            >
              <View
                style={{
                  padding: 12,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 24,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#e8e8e8",
                      height: 130,
                      width: 170,
                      borderRadius: 8,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{
                        height: 80,
                        width: 120,
                        zIndex: 90,
                      }}
                      source={item.Image}
                      alt=""
                      resizeMode="contain"
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: "700" }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontSize: 10, color: "gray", width: "30%" }}>
                      {item.description}
                    </Text>
                    <View style={{ padding: 16 }} />
                    <Text style={{ color: "gray", fontSize: 12 }}>
                      Starting from
                    </Text>
                    <Text style={{ fontWeight: "700", color: "#20e481" }}>
                      {item.price}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: "lightgray",
                  paddingTop: 8,
                }}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 12,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <View style={styles.luxury}>
                    <FontAwesome name="snowflake-o" size={14} color="black" />
                    <Text style={{ fontWeight: "200" }}>A/C</Text>
                  </View>
                  <View style={styles.luxury}>
                    <MaterialCommunityIcons
                      name="seat-recline-extra"
                      size={14}
                      color="black"
                    />
                    <Text style={{ fontWeight: "200" }}>
                      {item.seats} Seats
                    </Text>
                  </View>
                </View>
                <View style={styles.star}>
                  <FontAwesome name="star" size={18} color="gold" />
                  <Text style={{ fontWeight: "200" }}>5.0</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View style={{ padding: 59 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Vehicle;

const styles = StyleSheet.create({
  card: {
    borderBottomLeftRadius: 12,

    borderBottomRightRadius: 12,

    borderTopRightRadius: 5,

    borderTopLeftRadius: 5,
    backgroundColor: "white",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 12,
    paddingTop: 12,
  },
  luxury: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#e8e8e8",
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  star: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    padding: 4,
    paddingHorizontal: 8,
  },
});

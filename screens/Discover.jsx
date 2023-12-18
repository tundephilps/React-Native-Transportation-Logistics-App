import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import StatePicker from "../components/StatePicker";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const data = [
  {
    start: "Shoprite Sangotedo, Sangotedo, Nigeria",
    end: "OANDO Gas and petrol Station, Alakoro Marina...",
    stops: 30,
    code: "SGT4",
  },
  {
    start: "ABC Shopping Mall, Nigeria",
    end: "DEF Park, Nigeria",
    stops: 20,
    code: "DBJ0",
  },
  {
    start: "Sand fill Bus Stop, Ozumba Mbadiwe Ave ...",
    end: "Ojota Bus Stop, Ikorodu Road, Lagos, Nigeria",
    stops: 20,
    code: "IKR96",
  },
  {
    start: "Lekii Phase 1 Busstop, Lagos, Nigeria",
    end: "Alakija Bus Stop, Lagos, Nigeria",
    stops: 20,
    code: "AKJ93",
  },
  // ... add more data objects
];

const Discover = () => {
  return (
    <SafeAreaView style={{ height: "100%", zIndex: 1 }}>
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
          Avaliable routes
        </Text>
        <StatePicker />
      </View>
      {/* Search */}
      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
            paddingVertical: 12,
            borderRadius: 8,
            paddingHorizontal: 16,
            gap: 12,
            backgroundColor: "#e8e8e8",
          }}
        >
          <Feather name="search" size={15} color="gray" />
          <TextInput placeholder="Search for route" />
        </View>
      </View>

      <View style={{ padding: 16 }} />

      {/* Card */}
      <ScrollView style={{ paddingHorizontal: 16 }}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Octicons name="dot" size={28} color="green" />
                <View style={{ display: "flex", gap: 3 }}>
                  <View style={styles.dash} />
                  <View style={styles.dash} />
                  <View style={styles.dash} />
                </View>

                <Entypo name="location-pin" size={24} color="blue" />
              </View>

              <View>
                <View>
                  <Text
                    style={{ display: "flex", gap: 4, alignItems: "center" }}
                  >
                    <FontAwesome5 name="bus" size={12} color="lightgray" />
                    <Text style={{ color: "gray" }}>{""} Vehicle Takeoff</Text>
                  </Text>
                  <Text style={{ fontWeight: "600" }}>{item.start}</Text>
                </View>
                <View style={{ padding: 8 }} />
                <View>
                  <Text
                    style={{ display: "flex", gap: 4, alignItems: "center" }}
                  >
                    <FontAwesome5 name="bus" size={12} color="lightgray" />
                    <Text style={{ color: "gray" }}>{""} Destination</Text>
                  </Text>
                  <Text style={{ fontWeight: "600" }}>{item.end}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderTopColor: "lightgray",
                borderTopWidth: 2,
                padding: 4,
                margin: 4,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  padding: 6,
                  backgroundColor: "#e8e8e8",
                  borderRadius: 12,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "gray" }}>
                  {item.stops} Stops along this route
                </Text>
              </View>
              <Text style={{ fontWeight: "700", color: "green" }}>
                {item.code}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;

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
    padding: 12,
  },
  dash: {
    width: 1.5,
    height: 8,
    backgroundColor: "gray",
  },
});

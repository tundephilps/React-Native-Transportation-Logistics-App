import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const VehicleDetails = () => {
  const [expanded, setExpanded] = useState(false);
  const [counter, setCounter] = useState(1);

  const navigation = useNavigation();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handlePress = () => {
    setExpanded(!expanded);
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
          <Ionicons name="arrow-back-outline" size={18} color="gray" />
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
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <View
          style={{ backgroundColor: "#e8e8e8", borderRadius: 8, padding: 4 }}
        >
          <Image
            style={{ height: 120, width: 200, alignSelf: "center" }}
            source={require("../assets/van.png")}
            resizeMode="contain"
          />
        </View>
        <View style={{ padding: 12 }} />
        <View
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <MaterialIcons name="info" size={16} color="gray" />

          <Text style={{ color: "gray", fontWeight: "200" }}>
            {" "}
            Vehicles would differ from what is displayed
          </Text>
        </View>

        <View style={{ padding: 12 }} />
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "700" }}>
            Shuttlers Black
          </Text>
          <Text style={{ fontSize: 10, fontWeight: "200", color: "gray" }}>
            Starting from
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "200",
              color: "gray",
              alignItems: "center",
              display: "flex",
              gap: 6,
            }}
          >
            <FontAwesome name="star" size={20} color="gold" />
            {"   "}
            5.0 Ratings
          </Text>
          <Text style={{ fontSize: 19, fontWeight: "700", color: "#20e481" }}>
            N100,000
          </Text>
        </View>

        {/* Description */}

        <View style={{ padding: 12 }} />
        <Text
          style={{
            fontSize: 12,
            fontWeight: "200",
            color: "gray",
            lineHeight: 20,
          }}
        >
          Experience travel like never before with the Jet Moover Equipped with
          WiFi connectivity, an array of games and a captivating screen, it
          transforms every ride into an adventure. Stay connected, entertained
          and make the most of your journey with the ultimate luxury vehice
          designed for the mordern traveller.
        </Text>

        <View style={{ padding: 12 }} />

        {/* Amenities */}
        <Text style={{ fontWeight: "600", paddingBottom: 8 }}>Amenities</Text>
        <View style={{ flexDirection: "row", gap: 18 }}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                padding: 14,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
              }}
            >
              <FontAwesome name="snowflake-o" size={24} color="gray" />
            </View>
            <Text style={{ fontWeight: "200", color: "gray" }}>A/C</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                padding: 14,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "lightgray",
              }}
            >
              <MaterialCommunityIcons
                name="seat-recline-extra"
                size={24}
                color="gray"
              />
            </View>
            <Text style={{ fontWeight: "200", color: "gray" }}>14 Seats</Text>
          </View>
        </View>

        <View style={{ padding: 12 }} />
        {/* Accordion */}
        <View>
          <TouchableOpacity onPress={handlePress}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 15, color: "gray" }}>
                Things to know
              </Text>
              <Text>
                <MaterialIcons
                  name={expanded ? "keyboard-arrow-down" : "keyboard-arrow-up"}
                  size={24}
                  color="gray"
                />
              </Text>
            </View>
          </TouchableOpacity>
          {expanded && (
            <View style={{ paddingVertical: 18, gap: 16 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 26,
                }}
              >
                <View>
                  <MaterialIcons name="pets" size={24} color="gray" />
                </View>
                <Text style={{ fontWeight: "700" }}>
                  Pets are not allowed inside vehicle
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 26,
                }}
              >
                <View>
                  <MaterialIcons name="smoking-rooms" size={24} color="gray" />
                </View>
                <Text style={{ fontWeight: "700" }}>No smoking</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 26,
                }}
              >
                <View>
                  <Ionicons name="bus-outline" size={24} color="gray" />
                </View>
                <Text style={{ fontWeight: "700" }}>
                  Check into vehicle 30mins before time.
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* Steps */}
        <View
          style={{
            backgroundColor: "#e8e8e8",
            padding: 12,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            gap: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FontAwesome name="circle-o" size={24} color="#20e481" />
            <View style={styles.line} />
            <View style={styles.line} />
            <FontAwesome name="circle-o" size={24} color="#20e481" />
            <View style={styles.line} />
            <View style={styles.line} />
            <FontAwesome name="circle-o" size={24} color="#20e481" />
            <View style={styles.line} />
            <View style={styles.line} />
            <FontAwesome name="circle-o" size={24} color="#20e481" />
            <View style={styles.line} />
            <View style={styles.line} />
            <FontAwesome name="circle-o" size={24} color="#20e481" />
            <View style={styles.line} />
            <View style={styles.line} />
            <FontAwesome name="circle-o" size={24} color="#20e481" />
          </View>
          <View
            style={{
              display: "flex",
              gap: 33,
              flexDirection: "column",
              marginTop: 6,
            }}
          >
            <Text style={{ fontSize: 12 }}>Send Charter Request</Text>

            <Text style={{ fontSize: 12 }}>Shuttlers accepts your request</Text>
            <Text style={{ fontSize: 12 }}>Make Payment</Text>
            <Text style={{ fontSize: 12 }}>Meet driver at pickup location</Text>
            <Text style={{ fontSize: 12 }}>Driver starts trip</Text>
            <Text style={{ fontSize: 12 }}>Driver ends trip</Text>
          </View>
        </View>

        <View style={{ padding: 12 }} />
      </ScrollView>
      <View
        style={{
          //  backgroundColor: "#20e481",
          height: 80,
          borderTopColor: "lightgray",
          borderTopWidth: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "lightgray",
            gap: 28,
            height: 52,
            width: 140,
            padding: 8,

            borderRadius: 5,
          }}
        >
          <TouchableOpacity onPress={handleDecrement} disabled={counter === 1}>
            <MaterialCommunityIcons
              name="minus-circle"
              size={24}
              color={counter === 1 ? "lightgray" : "black"}
            />
          </TouchableOpacity>
          <Text>{counter}</Text>
          <TouchableOpacity onPress={handleIncrement}>
            <MaterialCommunityIcons
              name="plus-circle"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Checkout")}
          style={{
            backgroundColor: "#20e481",
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ fontWeight: "600", alignSelf: "center", display: "flex" }}
          >
            Add to Charter
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({
  line: {
    height: 12,
    borderLeftColor: "#20e481",
    borderLeftWidth: 3,
  },
});

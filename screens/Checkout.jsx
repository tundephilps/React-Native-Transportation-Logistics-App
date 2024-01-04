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
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Checkout = () => {
  const [isChecked, setChecked] = useState(false);

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
            Charter Checkout
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
          <View style={styles.card}>
            <View
              style={{
                padding: 12,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#20e481" : undefined}
              />
              <View
                style={{
                  backgroundColor: "#e8e8e8",
                  padding: 6,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 50, width: 80, alignSelf: "center" }}
                  source={require("../assets/van2.png")}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "700" }}>Costal Bus</Text>
                <Text style={{ fontWeight: "200" }}>No of vehicles: 1</Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "200", color: "gray", fontSize: 10 }}
                >
                  Starting from
                </Text>
                <Text style={{ color: "#20e481", fontWeight: "600" }}>
                  N70,000
                </Text>
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
                paddingHorizontal: 12,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "200" }}>Vehicle Quality</Text>
              <View style={styles.counter}>
                <TouchableOpacity
                  onPress={handleDecrement}
                  disabled={counter === 1}
                >
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
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={{
                padding: 12,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#20e481" : undefined}
              />
              <View
                style={{
                  backgroundColor: "#e8e8e8",
                  padding: 6,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 50, width: 80, alignSelf: "center" }}
                  source={require("../assets/van4.png")}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "700" }}>Sedan</Text>
                <Text style={{ fontWeight: "200" }}>No of vehicles: 1</Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "200", color: "gray", fontSize: 10 }}
                >
                  Starting from
                </Text>
                <Text style={{ color: "#20e481", fontWeight: "600" }}>
                  N25,000
                </Text>
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
                paddingHorizontal: 12,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "200" }}>Vehicle Quality</Text>
              <View style={styles.counter}>
                <TouchableOpacity
                  onPress={handleDecrement}
                  disabled={counter === 1}
                >
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
            </View>
          </View>
          <View style={styles.card}>
            <View
              style={{
                padding: 12,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#20e481" : undefined}
              />
              <View
                style={{
                  backgroundColor: "#e8e8e8",
                  padding: 6,
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{ height: 50, width: 80, alignSelf: "center" }}
                  source={require("../assets/van6.png")}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "700" }}>Mini Van</Text>
                <Text style={{ fontWeight: "200" }}>No of vehicles: 1</Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "200", color: "gray", fontSize: 10 }}
                >
                  Starting from
                </Text>
                <Text style={{ color: "#20e481", fontWeight: "600" }}>
                  N35,000
                </Text>
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
                paddingHorizontal: 12,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "200" }}>Vehicle Quality</Text>
              <View style={styles.counter}>
                <TouchableOpacity
                  onPress={handleDecrement}
                  disabled={counter === 1}
                >
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
            </View>
          </View>
          <View style={{ padding: 12 }} />
        </ScrollView>

        <View
          style={{
            borderTopColor: "lightgray",
            borderTopWidth: 1,
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "row", gap: 8 }}>
            <MaterialIcons name="info-outline" size={24} color="#20e481" />
            <Text style={{ fontSize: 12, color: "gray" }}>
              Kindly note that the total amount to be paid for this Charter
              request is sbuject to a further review by our team.
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Charter")}>
            <View
              style={{
                backgroundColor: "#00FF80", // Background color
                marginTop: 12, // Margin top
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
                Proceed
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

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
  checkbox: {
    margin: 0,
  },
  counter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    width: 80,
    padding: 8,
  },
});

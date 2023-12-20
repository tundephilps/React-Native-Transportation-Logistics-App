import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PanResponder,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import RBSheet from "react-native-raw-bottom-sheet";
//import BottomSheet from "react-native-bottom-sheet";

import MapView, { Marker } from "react-native-maps";
import BottomSheet from "../components/BottomSheet";
import Checkbox from "expo-checkbox";

const CharterPreview = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState({
    latitude: 37.78825, // Add your destination latitude here
    longitude: -122.4324, // Add your destination longitude here
  });

  const [isChecked, setIsChecked] = useState(false);

  const buttonBackgroundColor = isChecked ? "#00FF80" : "lightgray";
  const buttonTextColor = isChecked ? "black" : "white";

  useEffect(() => {
    // Fetch or use any method to get the user's current location
    // For simplicity, I'm just setting an example location here
    setUserLocation({
      latitude: 37.7749, // Example user's latitude
      longitude: -122.4194, // Example user's longitude
    });
  }, []);

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
            Charter preview
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

        <View style={styles.container}>
          {userLocation && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              {/* User's Marker */}
              <Marker
                coordinate={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                }}
                title="You are here"
                description="Your current location"
              >
                <View style={styles.markerContainer}>
                  <Text style={styles.markerText}>👤</Text>
                </View>
              </Marker>

              {/* Destination Marker */}
              <Marker
                coordinate={destinationLocation}
                title="Destination"
                description="Final destination"
              >
                <View style={styles.markerContainer}>
                  <Text style={styles.markerText}>🚌</Text>
                </View>
              </Marker>
            </MapView>
          )}

          {/* Bottom Sheet */}
          <BottomSheet />
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderTopColor: "lightgray",
            borderTopWidth: 1,
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Checkbox
              value={isChecked}
              onValueChange={() => setIsChecked(!isChecked)}
              color={isChecked ? "#00FF80" : undefined}
            />
            <Text style={{ fontSize: 12, color: "gray" }}>
              I agree that the total amount to be paid for this Charter request
              is subject to a further review by our team. Click to view our
              Terms of Service
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              /* handle onPress */
            }}
          >
            <View
              style={{
                backgroundColor: buttonBackgroundColor,
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

                  color: buttonTextColor,
                  fontWeight: "700",
                }}
              >
                Send Charter Request
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CharterPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  markerText: {
    fontSize: 20,
  },
  bottomSheet: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  bottomSheetContent: {
    alignItems: "center",
  },
});

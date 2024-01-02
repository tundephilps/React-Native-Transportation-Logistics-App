import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  PanResponder,
  Animated,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const BottomSheet = () => {
  const [offset, setOffset] = useState(0);
  const [height, setHeight] = useState(1200); // min height for top pane header
  const [bottomHeight, setBottomHeight] = useState(300); // min height for bottom pane header
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get("screen").height
  );
  const [isDividerClicked, setIsDividerClicked] = useState(false);
  const pan = new Animated.ValueXY();

  useEffect(() => {
    const updateDeviceHeight = () => {
      setDeviceHeight(Dimensions.get("screen").height);
    };

    Dimensions.addEventListener("change", updateDeviceHeight);

    return () => {};
  }, []);

  const _panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    onPanResponderGrant: (e, gestureState) => {
      setOffset(e.nativeEvent.pageY);
      setIsDividerClicked(true);
    },

    onPanResponderMove: (e, gestureState) => {
      setBottomHeight(
        gestureState.moveY > deviceHeight - 40
          ? 40
          : deviceHeight - gestureState.moveY
      );
      setOffset(e.nativeEvent.pageY);
    },

    onPanResponderRelease: (e, gestureState) => {
      setOffset(e.nativeEvent.pageY);
      setIsDividerClicked(false);
    },
  });

  return (
    <View>
      {/* Top View */}
      <Animated.View
        style={[
          {
            flex: 1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          { height },
        ]}
      ></Animated.View>

      {/* Bottom View */}
      <Animated.ScrollView
        style={[
          {
            backgroundColor: "white",
            height: 400,
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
            paddingVertical: 36,
            paddingHorizontal: 16,
          },
          { height: bottomHeight },
        ]}
        {..._panResponder.panHandlers}
      >
        <View style={{ flexDirection: "row", gap: 12 }}>
          {/* LineMAp */}
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Octicons name="dot" size={28} color="#20e481" />
            <View style={{ display: "flex", gap: 3 }}>
              <View style={styles.dash} />
              <View style={styles.dash} />
              <View style={styles.dash} />

              <View style={styles.dash} />
              <View style={styles.dash} />
              <View style={styles.dash} />
            </View>

            <Entypo name="location-pin" size={24} color="blue" />
          </View>

          {/* Destination */}
          <View>
            <View>
              <Text style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <FontAwesome5 name="bus" size={12} color="lightgray" />
                <Text style={{ color: "gray" }}>{""} Vehicle Takeoff</Text>
              </Text>
              <Text style={{ fontWeight: "600" }}>Ojodu Berger, Nigeria</Text>
            </View>
            <View style={{ padding: 8 }} />
            <View
              style={{
                flexDirection: "row",
                width: "76%",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "gray", fontWeight: "200" }}>
                1 stop before dropoff
              </Text>
              <Text>
                <Entypo name="chevron-small-down" size={24} color="gray" />
              </Text>
            </View>
            <View style={{ padding: 8 }} />
            <View>
              <Text style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <FontAwesome5 name="bus" size={12} color="lightgray" />
                <Text style={{ color: "gray" }}>{""} Destination</Text>
              </Text>
              <Text style={{ fontWeight: "600" }}>
                H-MEDEX pharmacy and Supermarket
              </Text>
            </View>
          </View>
        </View>
        <View style={{ padding: 12 }} />
        {/* Summary */}

        <Text style={{ fontWeight: "700", fontSize: 16, paddingBottom: 12 }}>
          Charter summary
        </Text>
        <View style={{ display: "flex", gap: 8 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray", fontWeight: "200" }}>
              Ticket type
            </Text>
            <Text style={{ fontWeight: "700" }}>Return</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray", fontWeight: "200" }}>
              Departure Date
            </Text>
            <Text style={{ fontWeight: "700" }}>Fri, Dec 22 2023</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray", fontWeight: "200" }}>
              Departure Time
            </Text>
            <Text style={{ fontWeight: "700" }}>4.31PM</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray", fontWeight: "200" }}>
              Return Date
            </Text>
            <Text style={{ fontWeight: "700" }}>Fri, Dec 22 2023</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray", fontWeight: "200" }}>
              Return Time
            </Text>
            <Text style={{ fontWeight: "700" }}>4.31PM</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "gray", fontWeight: "200" }}>
              Number of passengers
            </Text>
            <Text style={{ fontWeight: "700" }}>3</Text>
          </View>
        </View>

        <View style={{ padding: 12 }} />
        {/* Vehicle Category */}

        <Text style={{ fontWeight: "700", fontSize: 16, paddingBottom: 12 }}>
          Vehicle Category
        </Text>
        {/* Banner */}
        <View
          style={{
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#e8e8e8",
                padding: 6,
                marginRight: 6,
                borderRadius: 5,
              }}
            >
              <Image
                style={{ height: 50, width: 90 }}
                source={require("../assets/van2.png")}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={{ fontWeight: "700" }}>Coaster Bus</Text>
              <Text style={{ fontWeight: "200" }}>No of vehicles: 1</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontWeight: "200", fontSize: 10, color: "gray" }}>
              Starting from
            </Text>
            <Text style={{ fontWeight: "700", color: "#20e481", fontSize: 15 }}>
              N70,000
            </Text>
          </View>
        </View>

        <View style={{ padding: 12 }} />
        <View
          style={{
            backgroundColor: "#e8e8e8",
            padding: 6,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>Total estimated starting price</Text>
          <Text style={{ color: "#20e481", fontWeight: "700" }}>N100,000</Text>
        </View>
        <View style={{ padding: 32 }} />
      </Animated.ScrollView>
    </View>
  );
};

export default BottomSheet;
const styles = StyleSheet.create({
  dash: {
    width: 1.5,
    height: 8,
    backgroundColor: "gray",
  },
});

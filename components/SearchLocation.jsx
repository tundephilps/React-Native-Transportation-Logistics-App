import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons"; // Assuming you are using Expo icons

const SearchLocation = () => {
  const [isSwitched, setIsSwitched] = useState(false);

  const switchInputs = () => {
    setIsSwitched((prevIsSwitched) => !prevIsSwitched);
  };

  return (
    <View
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
        {isSwitched ? (
          <>
            <TextInput placeholder="  Search destination" />
            <View
              style={{
                backgroundColor: "lightgray",
                height: 1,
                width: "90%",
                margin: 14,
              }}
            />
            <TextInput placeholder="  Pick up location" />
          </>
        ) : (
          <>
            <TextInput placeholder="  Pick up location" />
            <View
              style={{
                backgroundColor: "lightgray",
                height: 1,
                width: "90%",
                margin: 14,
              }}
            />
            <TextInput placeholder="  Search destination" />
          </>
        )}
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: "5%",
          backgroundColor: "black",
          borderRadius: 50,
          padding: 10,
        }}
        onPress={switchInputs}
      >
        <Image
          style={{ height: 20, width: 20, borderRadius: 50 }}
          source={require("../assets/switch2.png")}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchLocation;

const styles = {
  dash: {
    backgroundColor: "black",
    height: 6,
    width: 1,
  },
};

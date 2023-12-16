import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import PhoneInput from "react-native-phone-number-input";

const TabSwitcher = () => {
  const [selectedTab, setSelectedTab] = useState("email");

  const [phoneNumber, setPhoneNumber] = useState("");
  const renderContent = () => {
    if (selectedTab === "email") {
      return <EmailComponent />;
    } else if (selectedTab === "phone") {
      return <PhoneNumberComponent />;
    }
    // Add more conditions for additional tabs
  };

  const EmailComponent = () => (
    <View style={{ paddingTop: 16, gap: 8 }}>
      {/* Your Email Component Content */}
      <Text>Email address</Text>
      <TextInput
        placeholder="Enter email address"
        style={{
          height: 52,
          borderColor: "lightgray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 12,
        }}
      />
    </View>
  );

  const PhoneNumberComponent = () => (
    <View style={{ paddingTop: 16, gap: 8 }}>
      {/* Your Email Component Content */}
      <Text>Phone number</Text>
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode="NG"
        layout="first"
        //  withShadow
        //  autoFocus
        // placeholder="Enter Phone Number"
        // keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        containerStyle={styles.PhoneInput}
        textContainerStyle={{ backgroundColor: "white" }}
      />
    </View>
  );

  return (
    <View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setSelectedTab("email")}
          style={[
            styles.tab,
            {
              backgroundColor: selectedTab === "email" ? "lightgreen" : "white",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: selectedTab === "email" ? "darkgreen" : "gray",
            }}
          >
            Email address
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab("phone")}
          style={[
            styles.tab,
            {
              backgroundColor: selectedTab === "phone" ? "lightgreen" : "white",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: selectedTab === "phone" ? "darkgreen" : "gray",
            }}
          >
            Phone number
          </Text>
        </TouchableOpacity>
      </View>

      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tab: {
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  PhoneInput: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 52,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "white",
  },
});

export default TabSwitcher;

// <View
// style={{
//   display: "flex",
//   alignItems: "center",
//   flexDirection: "row",
//   gap: 6,
// }}
// >
// <TouchableOpacity
//   onPress={() => {
//     /* handle onPress */
//   }}
//   style={{ display: "flex", alignItems: "flex-start" }}
// >
//   <View
//     style={{
//       backgroundColor: "lightgreen", // Background color
//       marginTop: 6, // Margin top
//       paddingVertical: 6,
//       paddingHorizontal: 18,
//       borderRadius: 8,
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
//     <Text
//       style={{
//         fontSize: 13, // Font size
//         fontWeight: "bold", // Font weight
//         color: "darkgreen", // Text color
//       }}
//     >
//       Email address
//     </Text>
//   </View>
// </TouchableOpacity>

// <TouchableOpacity
//   onPress={() => {
//     /* handle onPress */
//   }}
//   style={{ display: "flex", alignItems: "flex-start" }}
// >
//   <View
//     style={{
//       backgroundColor: "white", // Background color
//       marginTop: 6, // Margin top
//       paddingVertical: 6,
//       paddingHorizontal: 18,
//       borderRadius: 8,
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
//     <Text
//       style={{
//         fontSize: 13, // Font size
//         fontWeight: "bold", // Font weight
//         color: "gray", // Text color
//       }}
//     >
//       Phone number
//     </Text>
//   </View>
// </TouchableOpacity>
// </View>

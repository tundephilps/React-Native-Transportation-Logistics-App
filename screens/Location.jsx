import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import Homepage from "./Homepage";

const BottomSheet = ({ isVisible, onClose, onContinue, onSkip }) => (
  <Modal
    transparent
    animationType="slide"
    visible={isVisible}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.bottomSheet}>
        <Image
          style={{ height: 120, width: 180, alignSelf: "center" }}
          source={require("../assets/map.jpg")}
          resizeMode="cover"
        />
        <View style={{ padding: 16 }} />
        <Text style={{ fontSize: 22, fontWeight: "800", alignSelf: "center" }}>
          Enable Location
        </Text>
        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontSize: 12,
            color: "gray",
          }}
        >
          This application uses your location to help accurately suggest
          shuttles closest to you.
        </Text>
        <TouchableOpacity onPress={onContinue} style={styles.button}>
          <Text style={{ fontWeight: "600" }}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSkip} style={styles.buttonskip}>
          <Text style={{ fontWeight: "600" }}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const Location = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  useEffect(() => {
    // Show the bottom sheet after 5 seconds
    const timeout = setTimeout(() => {
      setBottomSheetVisible(true);
    }, 5000);

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, []);

  const handleCloseBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const handleContinue = () => {
    // Handle "Continue" button press
    handleCloseBottomSheet();
    // Add any additional logic for "Continue"
  };

  const handleSkip = () => {
    // Handle "Skip" button press
    handleCloseBottomSheet();
    // Add any additional logic for "Skip"
  };

  return (
    <View>
      {/* Your homepage content */}
      <Homepage />
      {/* Bottom Sheet */}
      <BottomSheet
        isVisible={bottomSheetVisible}
        onClose={handleCloseBottomSheet}
        onContinue={handleContinue}
        onSkip={handleSkip}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    backgroundColor: "white",
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 22,
    paddingVertical: 16,
    backgroundColor: "#00FF80",
    borderRadius: 8,
    alignItems: "center",
    width: "83%",
    alignSelf: "center",
  },
  buttonskip: {
    marginTop: 22,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "#e8e8e8",
    borderWidth: 1,

    width: "83%",
    alignSelf: "center",
  },
});

export default Location;

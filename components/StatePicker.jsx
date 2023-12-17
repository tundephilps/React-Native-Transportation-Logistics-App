import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const StatePicker = () => {
  const [selectedState, setSelectedState] = useState("Lagos");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("keyboard-arrow-up");

  const states = [
    "Lagos",
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setArrowDirection(
      dropdownOpen ? "keyboard-arrow-down" : "keyboard-arrow-up"
    );
  };

  const selectState = (state) => {
    setSelectedState(state);
    setDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <Text style={styles.buttonText}>{selectedState}</Text>
        <MaterialIcons name={arrowDirection} size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.dropdown}>
        {dropdownOpen && (
          <ScrollView>
            {states.map((state) => (
              <TouchableOpacity
                key={state}
                style={styles.dropdownItem}
                onPress={() => selectState(state)}
              >
                <Text style={styles.dropdownItemText}>{state}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontWeight: "300",
  },
  dropdown: {
    zIndex: 99,
    backgroundColor: "white",
    width: 340,
    borderRadius: 25,
    position: "absolute",
    top: "100%",
    //left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
  },
  dropdownItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownItemText: {
    color: "black",
    fontWeight: "300",
  },
});

export default StatePicker;

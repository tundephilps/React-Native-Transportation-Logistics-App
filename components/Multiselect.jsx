import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
const MultiSelectInput = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleConfirm = () => {
    setModalVisible(false);
    // Do something with selectedDays, e.g., update the state or perform an action
  };

  const getShortenedDays = () => {
    return selectedDays.map((day) => day.substring(0, 3)).join(", ");
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          alignItems: "center",
          borderWidth: 1,
          borderColor: "lightgray",
          height: 46,
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 12,
        }}
      >
        <TextInput
          placeholder="Select Days"
          value={getShortenedDays()}
          editable={false}
          style={styles.input}
        />
        <EvilIcons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Header */}
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 22 }}
            >
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{ padding: 6 }}
              >
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>
                Choose Trip Days
              </Text>
            </View>

            <Text
              style={{
                alignSelf: "center",
                paddingTop: 8,
                color: "#b8c2bc",
                fontWeight: "700",
              }}
            >
              On what days of the week do you want your trips
            </Text>
            <View style={{ alignSelf: "center", paddingTop: 22 }}>
              {daysOfWeek.map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayButton,
                    {
                      backgroundColor: selectedDays.includes(day)
                        ? "#20e481"
                        : "#ccdfd3",
                    },
                  ]}
                  onPress={() => toggleDay(day)}
                >
                  <Text
                    style={[
                      styles.buttontext,
                      {
                        color: selectedDays.includes(day) ? "white" : "#20e481",
                      },
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ height: "8%" }} />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={{ color: "black", fontWeight: "700" }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: "100%",
    width: "100%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  dayButton: {
    marginVertical: 6,
    height: 50,
    width: 180,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButton: {
    backgroundColor: "#20e481",
    width: "100%",
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    fontWeight: "700",
  },
  input: {
    // backgroundColor: "blue", // Initial background color for selected days in the input
    color: "black",

    borderRadius: 5,

    fontSize: 13,
    gap: 8,
    display: "flex",
    alignSelf: "center",
  },
});

export default MultiSelectInput;

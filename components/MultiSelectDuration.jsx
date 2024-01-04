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
import TextSlider from "./TextSlider";
const MultiSelectDuration = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

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
          placeholder="Select Duration"
          value={getShortenedDays()}
          editable={false}
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
              <Text style={{ fontWeight: "700", fontSize: 18 }}>Duration</Text>
            </View>
            <View style={{ padding: "20%" }} />
            <View style={{ alignSelf: "center", alignItems: "center" }}>
              <Text style={{ fontWeight: "800", fontSize: 33 }}>1 week</Text>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Expires: January 19, 2024
              </Text>
            </View>

            <View style={{ padding: "20%" }} />

            <TextSlider />
            <View
              style={{
                height: 80,
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  /* handle onPress */
                }}
              >
                <View
                  style={{
                    backgroundColor: "#20e481", // Background color
                    height: 50,
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
                      color: "#070707", // Text color
                    }}
                  >
                    Confirm
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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
});

export default MultiSelectDuration;

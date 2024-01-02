import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import DateTimePicker from "@react-native-community/datetimepicker";
import MultiSelectInput from "./Multiselect";
import VerticalTextSlider from "./TextSlider";
import AnimatedScrollWheelSample from "./TextSlider";
import TextSlider from "./TextSlider";
import MultiSelectDuration from "./MultiSelectDuration";

const Oneway2 = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);

  const [textInputValue, setTextInputValue] = useState("");

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (event, date) => {
    hideDatePicker();
    if (date) {
      setSelectedDate(date);

      // Format the date to "Sat, Dec 23 2023"
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      };
      const formatted = date.toLocaleDateString("en-US", options);

      setFormattedDate(formatted);
    }
  };

  return (
    <>
      <View style={{ padding: 8 }} />
      <View>
        <Text style={{ color: "gray" }}>Departure</Text>
        <View style={{ padding: 4 }} />
        <Pressable
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
          onPress={showDatePicker}
        >
          <View>
            <TextInput
              style={{ fontWeight: "200", color: "black", width: 280 }}
              placeholder="Select departure date"
              value={formattedDate}
              editable={false}
            />
          </View>
          <View>
            <Image
              style={{ height: 18, width: 18 }}
              source={require("../assets/calendar.png")}
              resizeMode="cover"
            />
          </View>
        </Pressable>
      </View>
      {isDatePickerVisible && (
        <View>
          {Platform.OS === "ios" ? (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleConfirm}
            />
          ) : (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleConfirm}
            />
          )}
        </View>
      )}

      <View style={{ padding: 12 }} />

      <View style={{ alignItems: "center", flexDirection: "row", gap: 12 }}>
        <Switch
          trackColor={{ false: "#e8e8e8", true: "gray" }}
          thumbColor={isEnabled ? "black" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <Text style={{ fontWeight: "600" }}>Subscribe to route</Text>
        <Text style={{ fontWeight: "600", color: "#20e481" }}>
          What is this?
        </Text>
      </View>
      <View>
        {isEnabled && (
          <View style={{ display: "flex", gap: 12 }}>
            <View>
              <Text style={{ color: "gray", paddingBottom: 8 }}>Trip Days</Text>
              <MultiSelectInput />
            </View>
            <View>
              <Text style={{ color: "gray", paddingBottom: 8 }}>
                Trip Duration (in weeks)
              </Text>
              <MultiSelectDuration />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Oneway2;

const styles = StyleSheet.create({});

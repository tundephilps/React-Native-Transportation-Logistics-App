import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import DateTimePicker from "@react-native-community/datetimepicker";

const Oneway = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState("");

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
      // Format the date to your desired format
      const formatted = date.toLocaleDateString(); // Modify this line to format the date as needed
      setFormattedDate(formatted);
    }
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (event, time) => {
    hideTimePicker();
    if (time) {
      setSelectedTime(time);
      // Format the time to your desired format
      const formatted = time.toLocaleTimeString(); // Modify this line to format the time as needed
      setFormattedTime(formatted);
    }
  };

  return (
    <View style={{ width: "100%" }}>
      <View style={{ padding: 8 }} />

      {/* Date */}
      <View>
        <Text style={{ color: "gray" }}>PickUp date</Text>
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
              placeholder="Prefered Date"
              value={formattedDate}
              editable={false}
            />
          </View>
          <View>
            <Ionicons name="calendar" size={16} color="black" />
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

      <View style={{ padding: 8 }} />
      {/* Time */}
      <View>
        <Text style={{ color: "gray" }}>PickUp time</Text>
        <View style={{ padding: 4 }} />
        <Pressable onPress={showTimePicker}>
          <View
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
              style={{ fontWeight: "200", color: "black" }}
              placeholder="Preferred Time"
              value={formattedTime}
              editable={false}
            />
            <Ionicons name="ios-time" size={16} color="black" />
          </View>
        </Pressable>
        {isTimePickerVisible && (
          <View>
            {Platform.OS === "ios" ? (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                display="spinner"
                onChange={handleTimeConfirm}
              />
            ) : (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                display="clock"
                onChange={handleTimeConfirm}
              />
            )}
          </View>
        )}
      </View>

      <View style={{ padding: 8 }} />
      {/* Passangers */}
      <View>
        <Text style={{ color: "gray" }}>Number of passengers</Text>
        <View style={{ padding: 4 }} />
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            borderColor: "lightgray",
            height: 46,
            borderRadius: 8,
            flexDirection: "row",
            paddingHorizontal: 12,
          }}
        >
          <TextInput
            style={{ width: "100%" }}
            placeholder="Enter value"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

export default Oneway;

const styles = StyleSheet.create({});

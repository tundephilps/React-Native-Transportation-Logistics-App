import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TimerComponent = () => {
  const initialMinutes = 0;
  const initialSeconds = 20;

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timerActive, setTimerActive] = useState(true);

  const startTimer = () => {
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
    setTimerActive(true);
  };

  const resetTimer = () => {
    setTimerActive(false);
    startTimer();
  };

  useEffect(() => {
    let timer;

    if (timerActive) {
      timer = setTimeout(() => {
        if (minutes === 0 && seconds === 0) {
          setTimerActive(false);
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [timerActive, minutes, seconds]);

  return (
    <View>
      <Text style={styles.timerText}>
        Resend code in {"  "}
        <Text style={{ color: "#20e481" }}>
          {""}
          {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
        </Text>
      </Text>

      {!timerActive && (
        <TouchableOpacity style={styles.resendButton} onPress={resetTimer}>
          <Text style={styles.resendButtonText}>Resend Code</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  timerText: {
    fontWeight: "#20e481",
    fontWeight: "200",
  },
  resendButton: {
    marginTop: 20,
    backgroundColor: "#00FF80",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 8,
    position: "relative",
  },
  resendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TimerComponent;

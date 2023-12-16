import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const images = [
  require("../assets/Bus3.jpg"),
  require("../assets/Bus2.jpg"),
  require("../assets/Bus1.jpg"),
  // Add more image objects as needed
];

const textData = [
  "Experience a free world of shared mobility with us",
  "Escape the usual struggle of public buses.",
  "Hassle free shuttle to work: Book trips and ride comfortably",
  // Add more text values as needed
];

const SwiperComponent = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        showsButtons={false}
        loop={true}
        onIndexChanged={(index) => setSwiperIndex(index)}
        activeDotColor="#00FF80"
        activeDotStyle={{ width: 15, height: 8 }}
        dotStyle={{ width: 8, height: 8 }}
        autoplay={true}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={image}
              style={{ width: "100%", height: 200 }}
              resizeMode="contain"
            />
            <Text style={styles.text}>{textData[index]}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300, // Adjust the height based on your design
  },
  swiper: {
    height: 300,
  },
  slide: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    zIndex: 99,
    textAlign: "center",
    width: "80%",
  },
});

export default SwiperComponent;

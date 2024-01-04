import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

const TextSlider = () => {
  const [selectedItem, setSelectedItem] = useState("Choose One");

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  return (
    <View style={{ gap: 8 }}>
      <ScrollView
        vertical
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {["Choose One", "1 week", "2 weeks", "3 weeks", "4 weeks"].map(
          (item, index) => (
            <Text
              key={index}
              style={{
                textAlign: "center",
                borderRadius: 6,
                paddingVertical: 6,
                width: 320,
                fontWeight: selectedItem === item ? "800" : "500",
                fontSize: 18,
                color: selectedItem === item ? "black" : "gray",
                backgroundColor: selectedItem === item ? "#e8e8e8" : "white",
                marginRight: 8,
              }}
              onPress={() => handleItemPress(item)}
            >
              {item}
            </Text>
          )
        )}
      </ScrollView>
    </View>
  );
};

export default TextSlider;

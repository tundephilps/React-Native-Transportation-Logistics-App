import { StyleSheet, Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import OTPScreen from "../screens/OTPScreen";
import Book from "../screens/Book";
import Vehicle from "../screens/Vehicle";
import VehicleDetails from "../screens/VehicleDetails";
import Checkout from "../screens/Checkout";
import Stops from "../screens/Stops";
import Charter from "../screens/Charter";
import CharterPreview from "../screens/CharterPreview";
import Homepage from "../screens/Homepage";

import { Ionicons, FontAwesome } from "react-native-vector-icons";
import Discover from "../screens/Discover";
import Booking from "../screens/Booking";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="GetStarted" component={GetStarted} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="CreateAccount" component={CreateAccount} />

        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="Homepage" component={Homepage} />

        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Book" component={Book} />

        <Stack.Screen name="Vehicle" component={Vehicle} />

        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />

        <Stack.Screen name="Checkout" component={Checkout} />

        <Stack.Screen name="Stops" component={Stops} />

        <Stack.Screen name="Charter" component={Charter} />
        <Stack.Screen name="CharterPreview" component={CharterPreview} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontWeight: "700", // Add this line to set fontWeight
            marginBottom: 6,
          },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconType;

            if (route.name === "Home") {
              iconName = focused ? "md-location-sharp" : "md-location-sharp";
              iconType = "ionicon";
            } else if (route.name === "Discover") {
              iconName = focused ? "compass" : "compass";
              iconType = "ionicon";
            } else if (route.name === "Booking") {
              iconName = focused ? "calendar" : "calendar-outline";
              iconType = "ionicon";
            } else if (route.name === "SignIn") {
              iconName = focused ? "user-circle" : "user-circle";
              iconType = "font-awesome"; // Set iconType for FontAwesome
            }

            return iconType === "ionicon" ? (
              <Ionicons name={iconName} size={16} color={color} />
            ) : (
              <FontAwesome name={iconName} size={16} color={color} /> // Use FontAwesome icon
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Booking" component={Booking} />
        <Tab.Screen name="SignIn" component={Login} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";
import { ApprenticeProvider } from "../context/ApprenticeContext";
import { GoldProvider } from "../context/GoldContext";

export default function RootLayout() {
  return (
    <GoldProvider>
      <ApprenticeProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: "#4d4d4dff",
            tabBarStyle: {
              backgroundColor: "rgba(30, 30, 30, 1)",
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              width: "90%",
              marginLeft: "5%",
              marginBottom: 10,
              position: "absolute",
              overflow: "hidden",
              borderTopWidth: 0,
            },
            tabBarItemStyle: { marginTop: 15 },
            tabBarButton: ({
              onPress,
              children,
              style,
              accessibilityState,
            }) => (
              <Pressable
                style={style}
                accessibilityState={accessibilityState}
                onPress={(e) => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  onPress?.(e);
                }}
              >
                {children}
              </Pressable>
            ),
          }}
        >
          <Tabs.Screen
            name="training"
            options={{
              title: "Training",
              tabBarIcon: ({ color }) => (
                <Foundation name="target" size={28} color={color} />
              ),
              tabBarActiveTintColor: "#5dbb6d",
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              title: "Forge",
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="local-fire-department"
                  size={size}
                  color={color}
                />
              ),
              tabBarActiveTintColor: "#e25822",
            }}
          />
          {/* <Tabs.Screen
            name="shop"
            options={{
              title: "Shop",
              tabBarIcon: ({ color }) => (
                <FontAwesome6 name="shop" size={20} color={color} />
              ),
              tabBarActiveTintColor: "#f2e7c5",
            }}
          /> */}
        </Tabs>
      </ApprenticeProvider>
    </GoldProvider>
  );
}

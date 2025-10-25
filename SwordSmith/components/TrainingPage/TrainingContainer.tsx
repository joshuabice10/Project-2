import React from "react";
import { StyleSheet, View, type ViewStyle } from "react-native";
import type { AnimatedStyle } from "react-native-reanimated";
import Animated from "react-native-reanimated";

type TrainingContainerProps = {
  children: React.ReactNode;
  animatedStyle?: AnimatedStyle<ViewStyle>;
};

export default function TrainingContainer({
  children,
  animatedStyle,
}: TrainingContainerProps) {
  return (
    <Animated.View style={[styles.upgradeContainer, animatedStyle]}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingVertical: 40,
          paddingHorizontal: 16,
        }}
      >
        {children}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  upgradeContainer: {
    backgroundColor: "rgba(30, 30, 30, 1)",
    borderRadius: 30,
  },
});

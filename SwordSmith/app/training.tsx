import TrainingUpgrade from "@/components/TrainingPage/TrainingUpgrade";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Dimensions } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import TrainingBG from "../components/TrainingPage/TrainingBg";
import TrainingContainer from "../components/TrainingPage/TrainingContainer";
import TrainingHeader from "../components/TrainingPage/TrainingHeader";
import TrainingTotalGold from "../components/TrainingPage/TrainingTotalGold";

const screenHeight = Dimensions.get("window").height;

export default function Training() {
  const height = useSharedValue(screenHeight * 0.4);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    width: "90%",
    overflow: "hidden",
  }));

  useFocusEffect(
    useCallback(() => {
      height.value = withSpring(screenHeight * 0.5, {
        damping: 25,
        stiffness: 300,
        mass: 1,
      });

      return () => {
        height.value = withSpring(screenHeight * 0.4, {
          damping: 14,
          stiffness: 120,
          mass: 1,
        });
      };
    }, [])
  );

  return (
    <TrainingBG>
      <TrainingContainer animatedStyle={animatedStyle}>
        <TrainingHeader />
        <TrainingUpgrade />
        <TrainingTotalGold />
      </TrainingContainer>
    </TrainingBG>
  );
}

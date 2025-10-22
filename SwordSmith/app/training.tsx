import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import CannotAffordBtn from "../components/CannotAffordBtn";
import GoldCost from "../components/GoldCost";
import GoldTotal from "../components/GoldTotal";
import MyBtn from "../components/MyBtn";
import { useApprentice } from "../context/ApprenticeContext";
import { useGold } from "../context/GoldContext";

const screenHeight = Dimensions.get("window").height;

export default function Training() {
  const height = useSharedValue(screenHeight * 0.4);
  const { gold, spendGold, increaseAutoGoldRate } = useGold();
  const { level, upgradeCost, autoGold, upgradeApprentice, increaseAutoGold } =
    useApprentice();

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    width: "90%",
    overflow: "hidden",
  }));

  const increaseAutoGoldRateHandler = () => {
    increaseAutoGoldRate(autoGold);
    spendGold(upgradeCost);
    upgradeApprentice();
    increaseAutoGold();
  };

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
    <ImageBackground
      source={require("../assets/images/Training-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <Animated.View style={[styles.upgradeContainer, animatedStyle]}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 40,
            paddingHorizontal: 16,
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Training
            </Text>
          </View>
          <View
            style={{
              borderTopColor: "white",
              borderTopWidth: 2,
              width: "80%",
              marginTop: 5,
              marginBottom: -40,
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                }}
              >
                Level:
              </Text>
              <Text style={{ fontSize: 25, color: "white" }}>{level}</Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Upgrade: +
              </Text>
              <GoldCost size={20}>{autoGold} Gold</GoldCost>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                per second
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Upgrade Cost:
              </Text>
              <GoldCost size={20}>{upgradeCost} Gold</GoldCost>
            </View>
            {gold >= upgradeCost ? (
              <MyBtn
                style={{ width: "60%" }}
                fontSize={20}
                onPress={() => increaseAutoGoldRateHandler()}
              >
                Buy Upgrade
              </MyBtn>
            ) : (
              <CannotAffordBtn style={{ width: "60%" }} fontSize={20} />
            )}
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 15,
              left: 15,
              width: "100%",
            }}
          >
            <GoldTotal />
          </View>
        </View>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upgradeContainer: {
    backgroundColor: "rgba(30, 30, 30, 1)",
    borderRadius: 30,
  },
});

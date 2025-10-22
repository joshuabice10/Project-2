import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import GoldTotal from "../components/GoldTotal";
import { useGold } from "../context/GoldContext";
import { useShake } from "../hooks/useShake";

export default function Forge() {
  const { addGold } = useGold();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleTap = () => {
    addGold(1);
  };

  useShake(() => {
    addGold(1);
  });

  return (
    <ImageBackground
      source={require("../assets/images/Forge-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.goldTotalContainer}>
        <GoldTotal />
      </View>
      <Pressable
        style={styles.katanaContainer}
        onPressIn={() => {
          scale.value = withTiming(0.9, { duration: 50 });
        }}
        onPressOut={() => {
          scale.value = withTiming(1, { duration: 25 });
        }}
        onPress={handleTap}
      >
        <Animated.View style={[styles.animatedContainer, animatedStyle]}>
          <Image
            source={require("../assets/images/Katana.png")}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </Animated.View>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "100%",
    width: "100%",
  },
  katanaContainer: {
    height: "40%",
    width: "70%",
    backgroundColor: "rgba(30, 30, 30, 0)",
    borderRadius: 30,
  },
  animatedContainer: {
    width: "100%",
    height: "100%",
  },
  goldTotalContainer: {
    position: "absolute",
    top: "10%",
    left: "5%",
    width: "100%",
    height: "100%",
  },
});

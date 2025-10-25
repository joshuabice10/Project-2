import { Image, Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useGold } from "../../context/GoldContext";

export default function ForgeKatana() {
  const scale = useSharedValue(1);
  const { addGold } = useGold();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleTap = () => {
    addGold(1);
  };

  return (
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
          source={require("../../assets/images/Katana.png")}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});

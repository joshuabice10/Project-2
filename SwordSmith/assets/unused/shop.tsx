import { ImageBackground, StyleSheet, View } from "react-native";

export default function shop() {
  return (
    <ImageBackground
      source={require("../assets/images/Shop-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.upgradeContainer}></View>
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
    height: "70%",
    width: "90%",
    backgroundColor: "rgba(30, 30, 30, 1)",
    borderRadius: 30,
  },
});

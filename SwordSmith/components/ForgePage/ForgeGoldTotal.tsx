import { StyleSheet, View } from "react-native";
import GoldTotal from "../GoldTotal";

export default function ForgeKatana() {
  return (
    <View style={styles.goldTotalContainer}>
      <GoldTotal />
    </View>
  );
}

const styles = StyleSheet.create({
  goldTotalContainer: {
    position: "absolute",
    top: "10%",
    left: "5%",
    width: "100%",
    height: "100%",
  },
});

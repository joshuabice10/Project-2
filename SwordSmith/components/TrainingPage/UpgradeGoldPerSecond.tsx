import { StyleSheet, Text, View } from "react-native";
import { useApprentice } from "../../context/ApprenticeContext";
import GoldCost from "../GoldCost";

export default function UpgradeGoldPerSecond() {
  const { autoGold } = useApprentice();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upgrade: +</Text>
      <GoldCost size={20}>{autoGold} Gold</GoldCost>
      <Text style={styles.text}>per second</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
});

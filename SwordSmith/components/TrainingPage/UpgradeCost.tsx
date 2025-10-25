import { StyleSheet, Text, View } from "react-native";
import { useApprentice } from "../../context/ApprenticeContext";
import GoldCost from "../GoldCost";

export default function UpgradeCost() {
  const { upgradeCost } = useApprentice();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upgrade Cost:</Text>
      <GoldCost size={20}>{upgradeCost} Gold</GoldCost>
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

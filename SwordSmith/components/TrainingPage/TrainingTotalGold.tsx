import { StyleSheet, View } from "react-native";
import { useApprentice } from "../../context/ApprenticeContext";
import GoldTotal from "../GoldTotal";

export default function UpgradeCost() {
  const { level } = useApprentice();

  return (
    <View style={styles.container}>
      <GoldTotal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    left: 15,
    width: "100%",
  },
});

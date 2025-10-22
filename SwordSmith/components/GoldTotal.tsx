import { StyleSheet, View } from "react-native";
import { useGold } from "../context/GoldContext";
import GoldCost from "./GoldCost";

export default function GoldTotal() {
  const { gold } = useGold();

  return (
    <View style={styles.button}>
      <GoldCost size={20}>{gold}</GoldCost>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(40, 40, 40, 1)",
    borderRadius: 20,
    flexDirection: "row",
    gap: 5,
    borderWidth: 1,
    borderColor: "gold",
    alignSelf: "flex-start",
    minWidth: "20%",
    maxWidth: "50%",
    overflow: "hidden",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

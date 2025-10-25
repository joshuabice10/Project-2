import { StyleSheet, View } from "react-native";
import CannotAffordBtn from "../../components/CannotAffordBtn";
import { useApprentice } from "../../context/ApprenticeContext";
import { useGold } from "../../context/GoldContext";
import BuyUpgradeBtn from "./BuyUpgradeBtn";
import TrainingLevel from "./TrainingLevel";
import UpgradeCost from "./UpgradeCost";
import UpgradeGoldPerSecond from "./UpgradeGoldPerSecond";

type TrainingUpgradeProps = {};

export default function TrainingUpgrade() {
  const { gold } = useGold();
  const { upgradeCost } = useApprentice();
  return (
    <View style={styles.container}>
      <TrainingLevel />
      <UpgradeGoldPerSecond />
      <UpgradeCost />
      {gold >= upgradeCost ? (
        <BuyUpgradeBtn />
      ) : (
        <CannotAffordBtn style={{ width: "60%" }} fontSize={20} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
});

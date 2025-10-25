import { useApprentice } from "../../context/ApprenticeContext";
import { useGold } from "../../context/GoldContext";
import MyBtn from "../MyBtn";

export default function BuyUpgradeBtn() {
  const { spendGold, increaseAutoGoldRate } = useGold();
  const { autoGold, upgradeCost, upgradeApprentice, increaseAutoGold } =
    useApprentice();

  const increaseAutoGoldRateHandler = () => {
    increaseAutoGoldRate(autoGold);
    spendGold(upgradeCost);
    upgradeApprentice();
    increaseAutoGold();
  };

  return (
    <MyBtn
      style={{ width: "60%" }}
      fontSize={20}
      onPress={() => increaseAutoGoldRateHandler()}
    >
      Buy Upgrade
    </MyBtn>
  );
}

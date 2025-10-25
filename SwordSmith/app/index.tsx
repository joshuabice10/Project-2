import { StyleSheet } from "react-native";
import ForgeBG from "../components/ForgePage/ForgeBG";
import ForgeGoldTotal from "../components/ForgePage/ForgeGoldTotal";
import ForgeKatana from "../components/ForgePage/ForgeKatana";
import { useGold } from "../context/GoldContext";
import { useShake } from "../hooks/useShake";

export default function Forge() {
  const { addGold } = useGold();

  useShake(() => {
    addGold(1);
  });

  return (
    <ForgeBG>
      <ForgeGoldTotal />
      <ForgeKatana />
    </ForgeBG>
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
});

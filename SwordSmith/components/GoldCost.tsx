import { Image, ImageStyle, Text, TextStyle } from "react-native";

type GoldCostProps = {
  children: React.ReactNode;
  size: number;
  imageStyle?: ImageStyle | ImageStyle[];
  textStyle?: TextStyle | TextStyle[];
};

export default function GoldCost({
  children,
  size,
  imageStyle,
  textStyle,
}: GoldCostProps) {
  return (
    <>
      <Image
        source={require("../assets/images/Coin.png")}
        style={[{ width: size, height: size }, imageStyle]}
      />
      <Text style={[{ fontSize: size, color: "gold" }, textStyle]}>
        {children}
      </Text>
    </>
  );
}

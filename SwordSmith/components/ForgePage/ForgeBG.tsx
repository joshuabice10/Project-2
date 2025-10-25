import { ImageBackground, StyleSheet } from "react-native";

type ForgeBGProps = {
  children: React.ReactNode;
};

export default function ForgeBG({ children }: ForgeBGProps) {
  return (
    <ImageBackground
      source={require("../../assets/images/Forge-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
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

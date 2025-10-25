import { ImageBackground, StyleSheet } from "react-native";

type TrainingBGProps = {
  children: React.ReactNode;
};

export default function TrainingBG({ children }: TrainingBGProps) {
  return (
    <ImageBackground
      source={require("../../assets/images/Training-bg.jpg")}
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
  },
});

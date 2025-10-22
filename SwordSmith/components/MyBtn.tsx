import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

type MyBtnProps = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  fontSize?: number;
};

export default function MyBtn({
  children,
  onPress,
  style,
  fontSize,
}: MyBtnProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { fontSize: fontSize }]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ffd900ff",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  buttonPressed: {
    backgroundColor: "#caab00ff",
  },
});

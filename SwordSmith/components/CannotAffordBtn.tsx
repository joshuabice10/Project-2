import { StyleSheet, Text, View, ViewStyle } from "react-native";

type MyBtnProps = {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  fontSize?: number;
};

export default function CannotAffordBtn({ style, fontSize }: MyBtnProps) {
  return (
    <View style={[styles.button, style]}>
      <Text style={[styles.buttonText, { fontSize: fontSize }]}>
        Cannot Afford
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(60, 60, 60, 1)",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "rgba(100, 100, 100, 1)",
    fontWeight: "bold",
  },
});

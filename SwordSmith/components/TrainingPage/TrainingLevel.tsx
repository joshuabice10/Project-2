import { StyleSheet, Text, View } from "react-native";
import { useApprentice } from "../../context/ApprenticeContext";

export default function TrainingLevel() {
  const { level } = useApprentice();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Level:</Text>
      <Text style={styles.text}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 25,
  },
  container: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
});

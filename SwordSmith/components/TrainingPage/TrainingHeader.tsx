import { StyleSheet, Text, View } from "react-native";

export default function TrainingHeader() {
  return (
    <>
      <View>
        <Text style={styles.TrainingText}>Training</Text>
      </View>
      <View style={styles.TrainingTextUnderline} />
    </>
  );
}

const styles = StyleSheet.create({
  TrainingText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  TrainingTextUnderline: {
    borderTopColor: "white",
    borderTopWidth: 2,
    width: "80%",
    marginTop: 5,
    marginBottom: -40,
  },
});

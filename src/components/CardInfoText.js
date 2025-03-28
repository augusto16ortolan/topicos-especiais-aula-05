import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CardInfoText({ title, year }) {
  return (
    <View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardYear}>{year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    color: "#333",
    fontSize: 18,
    fontWeight: 700,
    flexWrap: "wrap",
  },
  cardYear: {
    fontSize: 14,
    fontWeight: 400,
    color: "#777",
  },
});

import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CardInfoText from "./CardInfoText";
import CardImage from "./CardImage";

export default function Card({ title, year, imageUri, handleClick }) {
  return (
    <TouchableOpacity
      style={styles.containerCard}
      onPress={() => handleClick()}
    >
      <CardImage imageUri={imageUri} />
      <CardInfoText title={title} year={year} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "black",
    width: "100%", // Ajuste para evitar ultrapassar os limites
    alignSelf: "center", // Centraliza dentro da tela
    gap: 15,
    borderRadius: 12,
    backgroundColor: "white",

    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Sombra para Android
    elevation: 5,
  },
});

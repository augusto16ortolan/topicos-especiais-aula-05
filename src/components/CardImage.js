import { StyleSheet, Image } from "react-native";
import React from "react";

export default function CardImage({ imageUri }) {
  return (
    <Image
      style={styles.cardImage}
      height={160}
      width={120}
      source={{
        uri: imageUri
          ? imageUri
          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zbMqz8QnwJTFa5wvbU7CM3iU_G7Pqy_zPA&s",
      }}
    />
  );
}

const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 10,
    resizeMode: "cover",
  },
});

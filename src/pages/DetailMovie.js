import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";

import CardImage from "../components/CardImage";

export default function DetailMovie({ navigation, route }) {
  const { filme } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: filme.title,
    });
  }, []);

  return (
    <View>
      <CardImage imageUri={filme.poster} />
      <Text>{filme.title}</Text>
      <Text>{filme.year}</Text>

      <View>
        <Text>Sinopse:</Text>
        <Text>{filme.description}</Text>
      </View>

      <Button
        title="Elenco"
        onPress={() => {
          navigation.navigate("DetailCast", { filme: filme });
        }}
      />
    </View>
  );
}

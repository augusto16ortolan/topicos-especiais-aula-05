import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";

export default function DetailCast({ navigation, route }) {
  const { filme } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: filme.title,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "orange",
      },
    });
  }, []);

  return (
    <View>
      {filme.cast.map((actor) => (
        <Text key={actor}>{actor}</Text>
      ))}
    </View>
  );
}

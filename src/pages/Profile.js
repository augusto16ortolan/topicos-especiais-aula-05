import { View, Text, Button } from "react-native";
import React from "react";

export default function Profile({ navigation }) {
  return (
    <View>
      <Text>Perfil</Text>
      <Button
        title="Navegar"
        onPress={() => navigation.navigate("DetailMovie")}
      />
    </View>
  );
}

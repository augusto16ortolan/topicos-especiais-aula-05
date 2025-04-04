import { Button, Text, TouchableOpacity } from "react-native";
import Home from "../pages/Home";
import DetailMovie from "../pages/DetailMovie";
import DetailCast from "../pages/DetailCast";
import Profile from "../pages/Profile";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const StackApp = createStackNavigator();
const BottomTapApp = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <StackApp.Navigator initialRouteName="Home">
      <StackApp.Screen
        name="DetailMovie"
        component={DetailMovie}
        options={{
          headerShown: true,
          headerTitle: "Detalhes do Filme",
          headerTitleAlign: "center",
        }}
      />
      <StackApp.Screen
        name="Home"
        options={{
          headerTitle: "Meus Filmes",
          // headerLeft: () => <Text>Voltar</Text>,
          // headerRight: () => <Text>Perfil</Text>,
          headerTitleAlign: "center",
        }}
        component={Home}
      />
      <StackApp.Screen name="DetailCast" component={DetailCast} />
    </StackApp.Navigator>
  );
};

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <BottomTapApp.Navigator>
        <BottomTapApp.Screen
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
          name="TabHome"
          component={HomeStack}
        />
        <BottomTapApp.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Perfil",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </BottomTapApp.Navigator>
    </NavigationContainer>
  );
}

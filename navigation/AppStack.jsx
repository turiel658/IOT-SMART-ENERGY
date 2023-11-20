import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../components/HomeScreen"
import ListPeople from '../components/ListPeople';
import ConsumePage from '../components/ConsumePage';
import Profile from '../components/Profile';
import React from "react"

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="People" component={ListPeople} />
      <Stack.Screen name="Consume" component={ConsumePage} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
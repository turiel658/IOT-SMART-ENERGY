import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from '../components/LoginForm';
import React, {useState} from "react"

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginForm} />
    </Stack.Navigator>
  );
}
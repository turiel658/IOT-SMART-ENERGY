import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen"
import ListPeople from './components/ListPeople';
import LoginForm from './components/LoginForm';
import ConsumePage from './components/ConsumePage';
import io from "socket.io-client"
import React, {useState} from "react"

const socket = io("http://localhost:3000")

const recibirData = () => {
  socket.on("dato", (dato) => {
    console.log(dato)
    if (listaParaActualizar.length === 5) {
      setData(listaParaActualizar)
      listaParaActualizar = []
    } else {
      listaParaActualizar.unshift(dato)
    }

  })
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="People" component={ListPeople} />
        <Stack.Screen name="Consume" component={ConsumePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
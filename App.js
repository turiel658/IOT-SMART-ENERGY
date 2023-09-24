import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import io from "socket.io-client"
import React, {useState} from "react"

const socket = io("http://localhost:3000")

export default function App() {
  const [data, setData] = useState([])
  let listaParaActualizar = []

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
  recibirData()

  return (
    <View style={styles.container}>
      <Text>Inicio de sesión</Text>
      <TextInput placeholder='Número de cliente' style={styles.inputText}/>
      <TextInput placeholder='Contraseña'/>
      <Button onPress={() => alert("presionado")} title="Presioname"/>
      <StatusBar style="auto" />
      <LineChart data={{
        labels: data,
        datasets: [
            {
              data: data
            }   
        ] 
      }}
      width={Dimensions.get("window").width - 20}
      height={200}
      chartConfig={{
        backgroundGradientFrom: "#0000FF",
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      }}
      style= {{
        borderRadius: 10,
        paddingTop: 10
      }}
      yAxisSuffix="W"
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    backgroundColor: "#666666"
  }
});

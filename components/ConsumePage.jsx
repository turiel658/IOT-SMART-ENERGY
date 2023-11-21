
import { View, Text, Dimensions, StyleSheet } from "react-native"
import { LineChart } from "react-native-chart-kit"
import io from "socket.io-client"
import { AuthContext } from "../context/AuthContext"
import { useContext, useState } from "react"

const socket = io("http://localhost:3000/")

export default function ConsumePage() {
  const {userToken} = useContext(AuthContext)
  const [watts, setWatts] = useState([])
  const [totalWatts, setTotalWatts] = useState(0)

  socket.emit("client:solicitarDatos", userToken)

  socket.on("server:enviarDatos", (datos) => {

    setWatts(datos.map(dato => dato.watts))
  })

  return (
    <View style={ { justifyContent: "center", alignItems: "center" } }>
      <Text style={{marginTop:10}}>
        Pagina de revisar consumo
      </Text>
      <LineChart data={{
        //labels: watts.map((dato, index) => ""),
        datasets: [
            {
              data: watts
            }   
        ] 
        }}
        width={Dimensions.get("window").width - 100}
        height={300}
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
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.payPrice}>${totalWatts*0.82}</Text>
          <Text style={styles.info}>Total a pagar</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.whatts}>{totalWatts/1000} KWh</Text>
          <Text style={styles.info}>Consumo en kWhatts</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.whatts}>5,000 Wh</Text>
          <Text style={styles.info}>Consumo max</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  payPrice: {
    color: "green",
    fontSize: 30,
  },
  whatts: {
    color: "red",
    fontSize: 30,
  },
  infoContainer: {
    flexDirection: "row",
  },
  infoCard: {
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:20,
    marginTop: 10,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  },
  info: {
    color: "white",
  }
})


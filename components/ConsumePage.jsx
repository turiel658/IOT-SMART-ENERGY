import { View, Text, Dimensions, StyleSheet } from "react-native"
import { LineChart } from "react-native-chart-kit"

export default function ConsumePage() {
  return (
    <View style={ { justifyContent: "center", alignItems: "center" } }>
      <Text style={{marginTop:10}}>
        Pagina de revisar consumo
      </Text>
      <LineChart data={{
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
              data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }   
        ] 
        }}
        width={Dimensions.get("window").width - 100}
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
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.payPrice}>$15,000</Text>
          <Text style={styles.info}>Total a pagar</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.whatts}>15000 Wh</Text>
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
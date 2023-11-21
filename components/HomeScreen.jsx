
import React, { useContext } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/red.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Smart Energy</Text>
      </View>

      <View style={styles.optionsContainer}>
        <OptionButton
          onPress={() => navigation.navigate('People')}
          label="Ver Personas"
          image={require('../assets/red.png')}
        />
        <OptionButton
          onPress={() => navigation.navigate('Consume')}
          label="Revisar Consumo"
          image={require('../assets/red.png')}
        />
        <OptionButton
          onPress={() => navigation.navigate('Profile')}
          label="Perfil"
          image={require('../assets/red.png')}
        />
        <OptionButton
          onPress={logout}
          label="Cerrar Sesión"
          image={require('../assets/red.png')}
        />
      </View>
    </View>
  );
}

const OptionButton = ({ onPress, label, image }) => (
  <Pressable style={styles.option} onPress={onPress}>
    <Image source={image} style={styles.icon} />
    <Text style={styles.optionText}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db', // Color azul claro
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  optionsContainer: {
    width: '80%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
    color: '#3498db', // Color azul
  },
});

/*

import { View, Text, Pressable } from 'react-native';
import { useContext } from "react"
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({navigation}) {
  const {logout} = useContext(AuthContext)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>Home Screen</Text>
        <Pressable onPress={()=> navigation.navigate("People")}>
          <Text>Presiona aqui</Text>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate("Consume")}>
          <Text>Revisar consumo</Text>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate("Profile")}>
          <Text>Perfil</Text>
        </Pressable>
        <Pressable onPress={()=> logout()}>
          <Text>logout</Text>
        </Pressable>
      </View>
    </View>
  );
}
*/
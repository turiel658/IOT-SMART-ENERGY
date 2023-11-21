
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginForm({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, userToken } = useContext(AuthContext);

  const handlePress = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/client-login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          nombreUsuario: username,
          contraseña: password,
        }),
      });
      const token = await res.json();
      console.log(token.token);
      setUsername('');
      setPassword('');
      login(token.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {}
        <Image source={require('../assets/red.png')} style={styles.logo} />
        <Text style={styles.logoText}>SMART ENERGY</Text>
      </View>
      <View>
        <View>
          <Text style={styles.formTitle}>Iniciar Sesión</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Nombre de Usuario"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Contraseña"
          secureTextEntry
        />
        <View>
          <Text style={styles.notRegistered}>¿Aún no estás registrado? Presiona aquí</Text>
          <Pressable onPress={handlePress} style={styles.formButton}>
            <Text style={styles.formButtonText}>Iniciar Sesión</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100, // Ajusta el ancho según tus necesidades
    height: 100, // Ajusta la altura según tus necesidades
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#808080',
    marginTop: 15,
    padding: 10,
    width: 300, // Ajusta el ancho según tus necesidades
  },
  formTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formButton: {
    marginTop: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    width: 200, // Ajusta el ancho según tus necesidades
  },
  formButtonText: {
    color: 'white',
    alignSelf: 'center',
  },
  notRegistered: {
    fontSize: 12,
    color: 'blue',
    marginTop: 6,
  },
});

/*

import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState, useContext } from "react"
import { AuthContext } from '../context/AuthContext';
import axios from "axios"

export default function LoginForm({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login, userToken} = useContext(AuthContext)

  const handlePress = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/client-login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                nombreUsuario: username,
                contraseña: password
            })
        });
      const token = await res.json()
      console.log(token.token)
      setUsername("");
      setPassword("");
      login(token.token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.formTitle}>Form</Text>        
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
        />
        <View>
          <Text style={styles.notRegistered}>¿Aún no estas registrado? presiona aquí</Text>
          <Pressable 
            onPress={handlePress}
            style={styles.formButton}
            title="Iniciar Sesión"
          >
            <Text style={styles.formButtonText}>Iniciar Sesión</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "#808080",
    marginTop: 15
  },
  formTitle: {
    fontSize: 25,
    },
  formButton: {    
    marginTop: 15,
    backgroundColor: "blue",
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 3,
  },
  formButtonText: {
    color: "white",
    alignSelf:"center"
  },
  notRegistered: {
    fontSize: 12,
    color: "blue",
    marginTop: 6
  }
});

*/





import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from "react"

export default function LoginForm({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
            onPress={() => {
              setUsername("");
              setPassword("");
            }}
            style={styles.formButton}
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
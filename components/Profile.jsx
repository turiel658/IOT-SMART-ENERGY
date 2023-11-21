import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { userToken, logout } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState({});
  const [editing, setEditing] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await fetch("http://192.168.18.7:3000/api/client-profile");
      const data = await res.json();
      setUserProfile(data);
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
    }
  };

  const handleUpdateUsername = async () => {
    // Lógica para actualizar el nombre de usuario en el backend
    // Puedes enviar una solicitud al servidor para actualizar el nombre de usuario

    // Después de actualizar, actualiza el estado y finaliza el modo de edición
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      username: updatedUsername,
    }));
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Perfil del Usuario</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre de Usuario:</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            placeholder="Nuevo nombre de usuario"
            value={updatedUsername}
            onChangeText={(text) => setUpdatedUsername(text)}
          />
        ) : (
          <Text style={styles.info}>{userProfile.username}</Text>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Correo Electrónico:</Text>
        <Text style={styles.info}>{userProfile.email}</Text>
      </View>

      {editing ? (
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateUsername}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db", // Color azul
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: "white",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "white",
    color: "white",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#2980b9", // Color azul más oscuro
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: "#2ecc71", // Color verde
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: "#e74c3c", // Color rojo
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Profile;



/*

import { useEffect, useState } from "react";
import { View, Text } from "react-native";


export default function Profile() {
  const [userProfile, setUserProfile] = useState({})
  const getUser = async () => {
    const res = await fetch("http://localhost:3000/api/client-profile")
    const data = await res.json()
    setUserProfile(data)
  }


  return (
    <View>
      <Text>{userProfile.username}</Text>
      <Text>{userProfile.email}</Text>
    </View>
  )
}
*/
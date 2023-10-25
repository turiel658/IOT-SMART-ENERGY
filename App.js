import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from "react"
import { AuthProvider } from './context/AuthContext';
import AppNav from './navigation/AppNav';


export default function App() {
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
}
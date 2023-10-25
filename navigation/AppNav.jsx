import { NavigationContainer } from '@react-navigation/native';
import React, {useContext} from "react"
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';


export default function AppNav() {
  const {userToken} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {
        userToken !== null
        ? (<AppStack/>)
        : (<AuthStack/>)
      }
    </NavigationContainer>
  );
}
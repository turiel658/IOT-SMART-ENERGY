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


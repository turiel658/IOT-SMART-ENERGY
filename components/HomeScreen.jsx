import { View, Text, Pressable } from 'react-native';

export default function HomeScreen({navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>Home Screen</Text>
        <Pressable onPress={()=> navigation.navigate("Login")}>
          <Text>Sign in</Text>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate("People")}>
          <Text>Presiona aqui</Text>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate("Consume")}>
          <Text>Revisar consumo</Text>
        </Pressable>
      </View>
    </View>
  );
}


import { useEffect, useState } from "react";
import { View, Text } from "react-native";


export default function Profile() {
  const [userProfile, setUserProfile] = useState({})
  const getUser = async () => {
    const res = await fetch("http://192.168.18.7:3000/api/client-profile")
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
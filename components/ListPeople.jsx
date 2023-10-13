import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';


export default function ListPeople() {
  const [people, setPeople] = useState([])

  function getPeople() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setPeople(data))
      .catch(error => console.log(error))
  }
  getPeople()
  return (
    <FlatList
      data={people}
      renderItem={({ item }) => (   
        <View style={styles.cardContainer} key={item.id}>
          <View><Text style={styles.name}>{item.name}</Text></View>
          <View><Text>{item.username}</Text></View>
          <View><Text style={styles.email}>{item.email}</Text></View>
        </View>
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    padding: 6,
    marginBottom: 3,
    borderColor: "#808080",
    borderRadius: 6,
    borderWidth: 1,
    alignSelf:"center",
    width: 200
  },
  name: {
    fontSize: 20,
  },
  email: {
    color: "#0000ff" 
  }
});
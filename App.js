import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import api from './src/services/api.js'



export default function App() {
  const [message, setMessage] = useState("response.data.message");

  const getData = async () => {

    try {
      const response = await api.get('/image/random');
      console.log(response.data.message);
      setMessage(response.data.message)
  
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Clica e receba um doguinho lindo</Text>
      <View>
        <Image  source={{uri:message}} style ={styles.img}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={getData}><Text style={styles.buttonText}>Clique aqui</Text></TouchableOpacity>

      <StatusBar style="auto" />
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
  button: {
    backgroundColor: '#9370DB',
    width: 250,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  img: {
    width: 200,
    height: 200,
  }
});

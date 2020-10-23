import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen({ navigation }) {
  const [stands, setStands] = useState([])

  useEffect(()=> {
    (async () =>  {
      const response = await fetch("https://prueba2020.monoku.com/api/stands/");
      const data = await response.json()
      setStands(data)
    })()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenidx</Text>
      <Text>Escanea el código QR</Text>

      {stands.map((stand)=> {
        return <Button
          key={stand.id}
          title={stand.nombre}
          onPress={() => navigation.navigate('Stand', { stand })}
        />
      })}

      <Text>
        Encuentra los códigos QR y
        llevate una de nuestras prendas
        originales.
      </Text>
    </View>
  );
}

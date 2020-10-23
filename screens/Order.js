import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function OrderScreen({ route, navigation }) {
  const { product } = route.params;
  const [options, setOptions] = useState([])

  useEffect(()=> {
    (async () =>  {
      const url = `https://prueba2020.monoku.com/api/opciones-producto/?${new URLSearchParams({producto: product.id})}`;
      const response = await fetch(url);
      const data = await response.json()
      setOptions(data)
    })()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{product.nombre}</Text>
      <Text>¡Escogiste algo increíble!</Text>
      <Text>Ahora, selecciona una talla.</Text>

      {options.map((option)=> {
        return <Button
            key={option.id}
            title={option.nombre}
        />
      })}

      <Button title="Siguiente" onPress={() => navigation.navigate('Home')} />
      <Button title="Atrás" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

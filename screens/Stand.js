import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function StandScreen({ route, navigation }) {
  const [products, setProducts] = useState([])
  const { stand } = route.params;

  useEffect(()=> {
    (async () =>  {
      const url = `https://prueba2020.monoku.com/api/productos/?${new URLSearchParams({stand: stand.id})}`;
      const response = await fetch(url);
      const data = await response.json()
      setProducts(data)
    })()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>¡Felicitaciones!</Text>
      <Text>Escoge una de nuestras prendas únicas</Text>

      {products.map((product)=> {
        return <Button
            key={product.id}
            title={product.nombre}
            onPress={() => navigation.navigate('Order', { product })} />
      })}

      <Button title="Atrás" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

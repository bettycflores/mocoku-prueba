import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Button, View, Text } from 'react-native';
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
    <View style={styles.container}>
      <Text>¡Felicitaciones!</Text>
      <Text>Escoge una de nuestras prendas únicas</Text>

      {products.map((product)=> {
        return <Image
            key={product.id}
            style={styles.product}
            source={{uri: product.image}}
            title={product.nombre}
            onPress={() => navigation.navigate('Order', { product })} />
      })}

      <Button title="Atrás" onPress={() => navigation.navigate('Home')} />
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
  product: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
},
});
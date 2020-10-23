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

      <View style={styles.productList}>
        {products.map((product)=> {
          return <Image
              key={product.id}
              style={styles.product}
              source={{uri: product.image}}
              title={product.nombre}
              onPress={() => navigation.navigate('Order', { product })} />
        })}
      </View>

      <Button title="Atrás" onPress={() => navigation.navigate('Home')}/>
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
  productList: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
  },
  product: {
    width: 80,
    height: 80,
    borderRadius: 200,
    margin: 10,
    overflow: "hidden",
},
});
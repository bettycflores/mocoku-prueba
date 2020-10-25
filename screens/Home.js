import React, { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/Colors";

export default function HomeScreen({ navigation }) {
  const [stands, setStands] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://prueba2020.monoku.com/api/stands/");
      const data = await response.json();
      setStands(data);
    })();
  }, []);

  return (
    <View
      style={{
        backgroundColor: Colors.Primary,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar style="light"></StatusBar>
      <View
        style={{
          alignItems: "center",
          marginTop: 40,
          paddingVertical: 40,
        }}
      >
        <Text style={{ fontSize: 40, color: "#fff" }}>Bienvenidx</Text>
        <Text style={{ color: "#fff" }}>Escanea el código QR</Text>
      </View>

      <View
        style={{
          backgroundColor: "orange",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {stands.map((stand) => {
          return (
            <Button
              key={stand.id}
              title={stand.nombre}
              onPress={() => navigation.navigate("Stand", { stand })}
            />
          );
        })}
      </View>
      <View style={{ padding: 40 }}>
        <Text style={{ color: "#fff",textAlign:"center" }}>
          Encuentra los códigos QR y llevate una de nuestras prendas originales.
        </Text>
      </View>
    </View>
  );
}

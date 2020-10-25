import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/Colors";
import Heading from "../components/Heading";
import Button from "../components/Button";

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
      <Heading
        styleName="light"
        title="Bienvenidx"
        subtitle="Escanea el código QR"
      />

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
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Encuentra los códigos QR y llevate una de nuestras prendas originales.
        </Text>
      </View>
    </View>
  );
}

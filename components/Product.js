import React from "react";
import { Text, View, Image } from "react-native";

export default function ({ product }) {
  return (
    <View style={{ margin: 40 }}>
      <Image
        source={{ uri: product.image }}
        style={{ height: 80, width: 80, borderRadius: 80 }}
      />
      <Text style={{ textAlign: "center" }}>{product.nombre}</Text>
    </View>
  );
}

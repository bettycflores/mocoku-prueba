import React from "react";
import {  View, Text } from "react-native";

export default function Heading({title, subtitle, color="#000"}) {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 40,
        paddingVertical: 40,
      }}
    >
      <Text style={{ fontSize: 40, color: color }}>{title}</Text>
      <Text style={{ color: color }}>{subtitle}</Text>
    </View>
  );
}

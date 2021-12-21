import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, {useState} from 'react';
import { RadioButton } from 'react-native-paper';


export default function Dash({route}) {
  
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao dash, {route.params.nome}</Text>
      <Text>Seu peso é {route.params.peso}</Text>
      <Text>E você é do sexo {route.params.sexo === "M" ? "Masculino" : "Feminino"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailButton: {
    backgroundColor: "steelblue",
    width: 200,
  },
  input: {
    width:200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  },
  rowdiv: {
    flexDirection: "row",
    alignItems: "center"
  }
});

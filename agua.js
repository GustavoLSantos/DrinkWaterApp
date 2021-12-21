import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Dimensions, TouchableHighlight, Image, ImageBackground,Button} from 'react-native';
import {View, StyleSheet, ProgressBarAndroid, Text, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';


export default function Agua({route}) {
  const [contador, setcontador] = useState(0)

  const quantidadedelitros = route.params.peso * 0.035;
  const coposdagua = parseInt(quantidadedelitros/0.200);

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titulo}>Bem vindo ao dash, {route.params.nome}</Text>
      <Text style={styles.textoComum}>Seu peso é {route.params.peso} kg</Text>
      <Text style={styles.textoComum}>E você é do sexo {route.params.sexo === "M" ? "Masculino" : "Feminino"}</Text>
      <Text style={styles.copos}>{coposdagua - contador}</Text>
      <ProgressBarAndroid styleAttr='Horizontal' indeterminate={false} progress={contador/coposdagua} width={200}/>
      <View style={styles.rowdiv}>
        <Pressable  style={styles.botaodesoma} title='+' onPress={() => setcontador(contador >= coposdagua ? contador : contador + 1)}><Text style={styles.textobotao}>+</Text></Pressable>
        <Pressable  style={styles.botaodesoma} title='-' onPress={() => setcontador(contador == 0 ? contador : contador - 1)}><Text style={styles.textobotao}>-</Text></Pressable>
      </View>
      
    </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  }, titulo:{
      fontSize: 20,
        marginTop: -250,
        marginBottom: 50,
  }, textoComum:{
      fontSize:15,
  }, copos:{
        fontSize:50,
        marginBottom: 50,
        marginTop: 50
  },rowdiv: {
    flexDirection: "row",
    alignItems: "center",
  }, botaodesoma: {
      width: 100,
      height: 40,
      backgroundColor: "lightblue",
      borderRadius:4,
      alignItems: "center",
      justifyContent: 'center',
      margin: 10
  }, textobotao:{
      fontSize:20,
      color: "white"
  }
  
})
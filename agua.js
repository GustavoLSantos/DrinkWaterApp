import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Dimensions, TouchableHighlight, Image, ImageBackground,Button} from 'react-native';
import {View, StyleSheet, ProgressBarAndroid, Text} from 'react-native';


export default function App() {
  const [contador, setcontador] = useState(0)

  const quantidadedelitros = 90 * 0.035;
  const coposdagua = parseInt(quantidadedelitros/0.200);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.quadrado}></View>
      <Text>{coposdagua - contador}</Text>
      <ProgressBarAndroid styleAttr='Horizontal' indeterminate={false} progress={contador/coposdagua} width={200}/>
      <Button title='clique aqui para somar' onPress={() => setcontador(contador >= coposdagua ? contador : contador + 1)}/>
      <Button title='clique aqui para subtrair' onPress={() => setcontador(contador == 0 ? contador : contador - 1)}/>
    </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})

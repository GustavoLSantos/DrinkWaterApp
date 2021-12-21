import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, {useState} from 'react';
import { RadioButton } from 'react-native-paper';
import Dash from './Dash';



export default function Home(props) {
    
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState(0);
  const [checked, setChecked] = useState('F');
  const navigation = props.navigation;
  const handlePress = () => {
    navigation.navigate('Dash', {nome: nome, sexo: checked, peso: peso});
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindo ao DrinkWater APP</Text>
      <Text>Para começar precisaremos de alguns dados seus.</Text>
      <Text>Primeiro, qual o seu nome?</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={text => setNome(text)}
      />
      <Text>Qual o seu sexo?</Text>
      
      <View style={styles.rowdiv}>
        <RadioButton
          value="M"
          status={ checked === 'M' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('M')}
          color='#46aaf1'
        /><Text>M</Text>
        <RadioButton
          value="F"
          status={ checked === 'F' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('F')}
          color='#46aaf1'
        /><Text>F</Text>
      </View>
     
      <Text>Qual o seu peso? (em KG)</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso em KG"
        onChangeText={text => setPeso(text)}
        keyboardType="numeric"
      />
      <Button style={styles.detailButton} title="Enviar" onPress={handlePress}/>
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

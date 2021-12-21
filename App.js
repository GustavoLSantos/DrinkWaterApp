import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React from 'react';
import Home from "./Home.js";
import Dash from './Dash.js';
import Agua from './agua.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dash" component={Dash} />
            <Stack.Screen name="Agua" component={Agua} />
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
import React from 'react';
import Api from './src/api/api';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetallePersonaje from './src/pages/detallePersonaje';
import { useFonts } from 'expo-font';
const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'RockSalt-Regular': require("./src/assets/fonts/RockSalt-Regular.ttf")
  })
  if (!fontsLoaded) {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Api}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Detalles del Personaje'
          component={DetallePersonaje}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



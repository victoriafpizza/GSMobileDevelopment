import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Panorama from './screens/PanoramaScreen';
import Localizacao from './screens/LocalizacaoScreen';
import Interrupcao from './screens/InterrupcaoScreen';
import Prejuizos from './screens/PrejuizosScreen';
import Recomendacoes from './screens/RecomendacoesScreen';
import TelaPanorama from './screens/TelaPanorama';
import TelaCadastro from './screens/TelaCadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  const [eventos, setEventos] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Panorama">
        <Stack.Screen name="Panorama">
          {props => <Panorama {...props} eventos={eventos} />}
        </Stack.Screen>

        <Stack.Screen name="Localizacao">
          {props => <Localizacao {...props} eventos={eventos} setEventos={setEventos} />}
        </Stack.Screen>

        <Stack.Screen name="Interrupcao">
          {props => <Interrupcao {...props} eventos={eventos} setEventos={setEventos} />}
        </Stack.Screen>

        <Stack.Screen name="Prejuizos">
          {props => <Prejuizos {...props} eventos={eventos} setEventos={setEventos} />}
        </Stack.Screen>

        <Stack.Screen name="Recomendacoes" component={Recomendacoes} />

        {/* 🆕 Adiciona suas telas novas aqui */}
        <Stack.Screen name="TelaPanorama">
          {props => <TelaPanorama {...props} eventos={eventos} />}
        </Stack.Screen>

        <Stack.Screen name="Cadastro">
          {props => <TelaCadastro {...props} eventos={eventos} setEventos={setEventos} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

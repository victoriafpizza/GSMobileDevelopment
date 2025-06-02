import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

export default function Recomendacoes({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Recomendações</Text>

      <Text style={{ marginBottom: 10 }}>
        ✔️ Tenha lanternas e pilhas sempre à mão.
      </Text>
      <Text style={{ marginBottom: 10 }}>
        ✔️ Desconecte aparelhos eletrônicos durante tempestades.
      </Text>
      <Text style={{ marginBottom: 10 }}>
        ✔️ Armazene água e alimentos não perecíveis.
      </Text>
      <Text style={{ marginBottom: 10 }}>
        ✔️ Mantenha contatos de emergência anotados.
      </Text>
      <Text style={{ marginBottom: 10 }}>
        ✔️ Evite áreas de risco de alagamento ou deslizamento.
      </Text>
      <Text style={{ marginBottom: 10 }}>
        ✔️ Siga as orientações da Defesa Civil e autoridades locais.
      </Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function Prejuizos({ eventos, setEventos, navigation }) {
  const [prejuizo, setPrejuizo] = useState('');
  const [localSelecionado, setLocalSelecionado] = useState('');

  const atualizarPrejuizo = () => {
    const atualizados = eventos.map(e =>
      e.local === localSelecionado ? { ...e, prejuizo } : e
    );
    setEventos(atualizados);
    setPrejuizo('');
    setLocalSelecionado('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Prejuízos Causados</Text>

      <TextInput
        placeholder="Local (bairro, cidade ou CEP)"
        value={localSelecionado}
        onChangeText={setLocalSelecionado}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 5 }}
      />
      <TextInput
        placeholder="Descreva o prejuízo"
        value={prejuizo}
        onChangeText={setPrejuizo}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 5 }}
      />
      <Button title="Atualizar" onPress={atualizarPrejuizo} />

      <FlatList
        data={eventos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 5 }}>
            {item.local} - {item.prejuizo || 'Sem informação'}
          </Text>
        )}
      />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

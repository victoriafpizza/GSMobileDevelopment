import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function Interrupcao({ eventos, setEventos, navigation }) {
  const [tempo, setTempo] = useState('');
  const [localSelecionado, setLocalSelecionado] = useState('');

  const atualizarInterrupcao = () => {
    const atualizados = eventos.map(e =>
      e.local === localSelecionado ? { ...e, interrupcao: tempo } : e
    );
    setEventos(atualizados);
    setTempo('');
    setLocalSelecionado('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Tempo de Interrupção</Text>

      <TextInput
        placeholder="Local (bairro, cidade ou CEP)"
        value={localSelecionado}
        onChangeText={setLocalSelecionado}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 5 }}
      />
      <TextInput
        placeholder="Tempo sem energia (ex: 3 horas)"
        value={tempo}
        onChangeText={setTempo}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 5 }}
      />
      <Button title="Atualizar" onPress={atualizarInterrupcao} />

      <FlatList
        data={eventos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 5 }}>
            {item.local} - {item.interrupcao || 'Sem informação'}
          </Text>
        )}
      />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

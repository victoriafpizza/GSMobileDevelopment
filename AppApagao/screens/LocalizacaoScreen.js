import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function Localizacao({ eventos, setEventos, navigation }) {
  const [local, setLocal] = useState('');

  const adicionarEvento = () => {
    const novoEvento = {
      id: Math.random().toString(),
      local,
      interrupcao: '',
      prejuizo: '',
      data: new Date().toLocaleDateString()
    };
    setEventos([...eventos, novoEvento]);
    setLocal('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Localização Atingida</Text>
      <TextInput
        placeholder="Bairro, cidade ou CEP"
        value={local}
        onChangeText={setLocal}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />
      <Button title="Adicionar" onPress={adicionarEvento} />
      <FlatList
        data={eventos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={{ marginTop: 5 }}>{item.local}</Text>}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

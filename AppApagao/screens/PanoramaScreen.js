import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function Panorama({ eventos, navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Panorama Geral</Text>
      {eventos.length === 0 ? (
        <Text>Nenhum evento cadastrado.</Text>
      ) : (
        <FlatList
          data={eventos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
              <Text>Local: {item.local}</Text>
              <Text>Tempo sem energia: {item.interrupcao}</Text>
              <Text>Prejuízo: {item.prejuizo}</Text>
              <Text>Data: {item.data}</Text>
            </View>
          )}
        />
      )}
      <Button title="Ir para Localização" onPress={() => navigation.navigate('Localizacao')} />
    </View>
  );
}

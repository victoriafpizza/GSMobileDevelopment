import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaPanorama({ route }) {
  const navigation = useNavigation();
  const { itens = [] } = route.params || {};

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.titulo}>Local: {item.local}</Text>
      <Text>Tempo sem energia: {item.tempoSemEnergia || 'Não informado'}</Text>
      <Text>Prejuízo: {item.prejuizo || 'Não informado'}</Text>
      <Text>Data: {item.data}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Panorama Geral</Text>

      {itens.length === 0 ? (
        <Text style={styles.vazio}>Nenhum dado cadastrado.</Text>
      ) : (
        <FlatList
          data={itens}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      )}

      <Button
        title="Ir para Cadastro"
        onPress={() =>
          navigation.navigate('Cadastro', {
            adicionarItem: route.params?.adicionarItem,
          })
        }
        color="#2196F3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vazio: {
    alignSelf: 'center',
    marginVertical: 20,
    color: '#888',
  },
});

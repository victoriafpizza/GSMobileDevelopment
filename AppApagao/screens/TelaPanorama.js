import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaCadastro({ route }) {
  const navigation = useNavigation();

  const [local, setLocal] = useState('');
  const [tempoSemEnergia, setTempoSemEnergia] = useState('');
  const [prejuizo, setPrejuizo] = useState('');
  const [data, setData] = useState('');

  const handleSalvar = () => {
    if (!local || !tempoSemEnergia || !prejuizo || !data) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoItem = {
      local,
      tempoSemEnergia,
      prejuizo,
      data,
    };

    route.params?.adicionarItem(novoItem);

    // Limpar os campos depois de salvar
    setLocal('');
    setTempoSemEnergia('');
    setPrejuizo('');
    setData('');

    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Interrupção</Text>

      <TextInput
        style={styles.input}
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
      />

      <TextInput
        style={styles.input}
        placeholder="Tempo sem energia (ex.: 2h30)"
        value={tempoSemEnergia}
        onChangeText={setTempoSemEnergia}
      />

      <TextInput
        style={styles.input}
        placeholder="Prejuízo (ex.: R$ 500,00)"
        value={prejuizo}
        onChangeText={setPrejuizo}
      />

      <TextInput
        style={styles.input}
        placeholder="Data (ex.: 6/2/2025)"
        value={data}
        onChangeText={setData}
      />

      <Button title="Salvar" onPress={handleSalvar} color="#2196F3" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

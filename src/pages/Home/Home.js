import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import Moviments from '../../components/Moviments/Moviments';
import Actions from '../../components/Actions/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '02/05/2023',
    type: 0 // gastos,
  },
  {
    id: 2,
    label: 'Pix Recebido de Matheus josé',
    value: '500,00',
    date: '29/04/2023',
    type: 1 // receita,
  },
  {
    id: 3,
    label: 'Pix Recebido de Vinicius da silva',
    value: '1.500,00',
    date: '28/04/2023',
    type: 1 // receita,
  },
  {
    id: 4,
    label: 'Conta de água',
    value: '100,00',
    date: '13/04/2023',
    type: 0 // receita,
  },

  
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Marcelo Henrique"/>

      <Balance saldo="9.250.90" gastos="390,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item)=> String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Moviments data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginHorizontal: 14
  }
});

import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import Moviments from '../../components/Moviments/Moviments';
import Actions from '../../components/Actions/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 // gastos,
  },
  {
    id: 2,
    label: 'Pix cliente x',
    value: '500,00',
    date: '12/04/2022',
    type: 1 // receita,
  },
  {
    id: 3,
    label: 'Pix cliente y',
    value: '1.500,00',
    date: '07/01/2022',
    type: 1 // receita,
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

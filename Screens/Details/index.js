import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import ROTINAS from '../../data/index';
import dataseleçoes from '../../dataselecoes/index';
import dataseleçoes2 from '../../dataselecoes2/index';
import {useRoute} from '@react-navigation/native';

export default function Details () {

  const route = useRoute();

  return (
    <View style={estilo.container}>
      <Text>{route.params.titulo}</Text>
      <Image style={estilo.imagemCard} source={{ uri: route.params.imagem }}/>
        <Text>{route.params.porcentagem}</Text>
        <Text>{route.params.tamanho}</Text>
        <Text>{route.params.qualidade}</Text>
      </View>     




  );
}
const estilo = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  },
  cardTarefa: {
    margin: 25,
    backgroundColor: 'rgba(63, 85, 117, 0.5)',
    width: '95%',
    height: 360,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 2 },
    alignItems: 'center',
    justifyContent: 'center', 
  },
  textoCard: {
    fontSize: 15,
    marginTop: 5,
    color: '#ffffff', 
  },
  imagemCard: {
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  
  textos: {
    alignItems: 'center',
    paddingBottom: 80,
    color: '#ffffff',
  },
  preço: {
    color: '#ffffff', 
  },
});
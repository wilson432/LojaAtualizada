import React from 'react';
import { Text, StyleSheet, View, FlatList, ImageBackground } from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import ROTINAS from '../../data/index'; 
import dataselecoes from '../../dataselecoes/index';
import dataselecoes2 from '../../dataselecoes2/index'

export default function Home() {
  return (
    
      <View style={estilo.container}>
   
        <Header />
       
       
        <View style={{ width: '100%'}}>
        <Text style={estilo.sectionTitle}>     camisa de alguns times</Text>
          <FlatList
            data={ROTINAS}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                titulo={item.titulo}
                descricao={item.Descricao}
                tamanho={item.tamanho}
                porcentagem={item.porcentagem}
                imagem={item.imagem}
                qualidade={item.qualidade}
              />
            )}
          />
          <Text style={estilo.sectionTitle}>     camisa de alguns paises</Text>
          <FlatList
            data={dataselecoes}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                titulo={item.titulo}
                descricao={item.Descricao}
                tamanho={item.tamanho}
                porcentagem={item.porcentagem}
                imagem={item.imagem}
                qualidade={item.qualidade}
              />
            )}
          />
          <Text style={estilo.sectionTitle}>     camisa de alguns paises</Text>
          <FlatList
            data={dataselecoes2}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                titulo={item.titulo}
                descricao={item.Descricao}
                tamanho={item.tamanho}
                porcentagem={item.porcentagem}
                imagem={item.imagem}
                qualidade={item.qualidade}
              />
            )}
          />
        </View>
  
        </View>
    
  );
}

const estilo = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000000',
  },
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#000',
  },

});

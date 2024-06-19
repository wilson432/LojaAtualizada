import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
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

export default estilo;

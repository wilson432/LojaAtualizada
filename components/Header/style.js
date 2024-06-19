import {StyleSheet}from 'react-native'

const estilo = StyleSheet.create({

    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        color:'white',
      },
      subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        color:'#ffff',
      },
      tituloCard: {
        color:'#ffff',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        justifyContent:"space-between",
        flexDirection: 'row', 
        width:'80%',
      },
})

export default estilo;
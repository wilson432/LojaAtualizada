import{Text,View,Image,TouchableOpacity } from 'react-native'
import estilo from './style'
import { useNavigation } from '@react-navigation/native'
export default function Card({porcentagem,titulo,imagem,descricao,qualidade,tamanho}){
    const Navigation = useNavigation();
    return(

        <TouchableOpacity style={estilo.cardTarefa} 
        onPress={() => Navigation.navigate('Details',{porcentagem:porcentagem,titulo:titulo,imagem:imagem,descricao:descricao,qualidade:qualidade,tamanho:tamanho})}>
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
            <View style={{  marginLeft: 10,width:180 }}>
                 <Text style={estilo.tituloCard}>{titulo}</Text>
                <Text style={estilo.textoCard}>{descricao}</Text>
            </View>
            <Text style={{ fontSize: 20,color:'#ffffff', }}>{porcentagem}</Text>
            <Text style={{ fontSize: 18,color:'#ffffff', }}>{tamanho}</Text>
            <Text style={{ fontSize: 20,color:'#fbff00', }}>{qualidade}</Text>
        </TouchableOpacity>
    )
}
import {View, Text} from 'react-native'
import estilo from './style'

export default function Header(){
    return(

        <>
            <Text style={estilo.titulo}>lulu vendas</Text>
            <Text style={estilo.subtitulo}>camisas</Text>
             <View style={{width:'90%', flexDirection: 'row', marginTop: 50, }}>
           
            </View>

        </>
    )
}
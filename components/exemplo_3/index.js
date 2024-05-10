import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

function Exemplo_3() {

   const [numero, setNumero] = useState(0);

    function incremento (){
        setNumero(numero +1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 3</Text>
            <Pressable
                onPress={() => alert('linda')}
                style={ ({ pressed} ) => pressed ?

                [styles.botao , styles.botaopress]
                :
                styles.botao}
            >
                <Text style={styles.txtbotao}> lara </Text>

            </Pressable>

            <Text style={styles.titulo}> Exemplo State </Text>

            <Text sytle={styles.txtNumero}>{numero}</Text>

            <Pressable
                onPress={() => incremento() }
                style={ ({ pressed} ) => pressed ?

                [styles.botao , styles.botaopress]
                :
                styles.botao}
            >
                <Text style={styles.txtbotao}> +1 </Text>
                
            </Pressable>
        </View>
        
    );
}

export default Exemplo_3;
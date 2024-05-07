import { View, Text, Pressable } from 'react-native';

import styles from './styles';

function Exemplo_3() {
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
        </View>
    );
}

export default Exemplo_3;
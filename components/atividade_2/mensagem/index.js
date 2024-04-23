import { View, Text } from 'react-native';

import styles from './styles';


export default function Mensagem({lista,doramas}) {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>{` ${lista}${doramas}`}</Text>
        </View>
    );
}
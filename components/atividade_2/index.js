import{ View,Text }from 'react-native'

import Mensagem from './mensagem'

import styles from './styles';


function Atividade_2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Doramas Populares </Text>

            <Mensagem lista= 'Netflix-'   doramas=' Sweet Home'/>
            <Mensagem lista= 'Netflix-'   doramas=' The Penthouse'/>
            <Mensagem lista= 'Netflix-'   doramas=' Its Okay To Not Be Okay'/>
            <Mensagem lista= 'PrimeVideo-'   doramas=' Deaths Game'/>
   
        </View> 
    );
};
export default Atividade_2;
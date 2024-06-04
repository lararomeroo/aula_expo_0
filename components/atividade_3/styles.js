import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D1C4E9',
        borderRadius:20,
        width:'100%',
        alignItems:'center',
    },
    
    container2:{
        display: 'flex',
        flexDirection: 'row',
        width: '15%',
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:20,
        color: '#310f4d',
       
    },

    botao:{
        borderWidth: 3,
        padding:10,
        width:'40%',
        borderRadius:20,
        alignItems:'center',
        borderColor: '#310f4d',
        margin: 10,
    },

    txtbotao:{
        fontSize: 25,
        color: '#733ba1',
        
    },

    botaopress:{
        backgroundColor: '#733ba1',
    },

    txtpress:{
        fontSize:25,
        color: '#733ba1'
    },

    txtNumero:{
        fontSize: 25,
        color: '#733ba1',
        marginVertical: 10,
    },
});

export default styles;
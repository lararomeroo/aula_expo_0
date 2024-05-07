import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D1C4E9',
        borderRadius:20,
        width:'100%',
        alignItems:'center',
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
        width:'80%',
        borderRadius:20,
        alignItems:'center',
        borderColor: '#310f4d',
    },

    txtbotao:{
        fontSize: 25,
        color: '#733ba1',
    },

    botaopress:{
        backgroundColor: '#733ba1'
    },

    txtpress:{
        fontSize:25,
        color: '#733ba1'
    },
});

export default styles;
import{ StyleSheet }from 'react-native';

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:'100%',
        width:'100%',
        borderRadius:20,
        alignItems:'center',
        padding: 8,
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:20,
    },
    mensagem:{
        fontSize:25,
        margin:10,
        color:'purple',
    },
    viewmensagem:{
        borderWidth:2,
        borderColor:'#733ba1',
        borderRadius:20,
        marginBottom:10,
        width:'90%',
        borderBottomWidth:2,
    },
});

export default styles;
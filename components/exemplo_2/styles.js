import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#a56bd1',
        flex: 1,
        height:'100%',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 8,
    },

  titulo: {
    fontSize: 30,
    fontWeight:'bold',
    marginVertical: 20,
    color: '#6f1a7a'
  },
  mensagem: {
    fontSize: 20,
    margin: 10,
    color:'#6f1a7a',
  },
  viewmensagem: {
     borderWidth: 2,
     borderColor: '#6f1a7a',
     borderRadius: 20,
  },
  
});

export default styles;
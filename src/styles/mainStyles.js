import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#200E3A', 
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    width_40: {
        width: '40%'
    },
    list: {
        flex: 0.8,
        width:'80%',
        margin:'10%',
        backgroundColor:'#38419D',
        
    },
    title:{
        fontSize:14.5,
        marginLeft:'2%',
        color:'#FFFFFF',
        fontFamily:'RockSalt-Regular'
    },
    names:{
        marginBottom:'1%',
        marginLeft:'1%',
        fontSize:12,
        color:'#b0adac',
        fontFamily:'RockSalt-Regular'
    },
    imageCharacter: {
        height:100,
        width:100,  
      },
    font:{
        fontFamily:'RockSalt-Regular'
    },
    listCharacter: {
        flex: 1,
        width:'80%',
        margin:'10%',
        backgroundColor:'#38419D',   
    },
    informationCharacter:{
        flexDirection:'column', 
    },
    headerCharacter:{
        flexDirection:'row',
        justifyContent:'space-between',   
    },
    descriptions:{
        color:'#FFFFFF',
        fontFamily:'RockSalt-Regular' ,
        marginLeft:'1%',
        fontSize:13,
        borderBottomWidth:1,
        borderBottomColor:'red',
        width:'95%'
    }
    
});


export default styles;
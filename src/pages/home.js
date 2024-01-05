import React from 'react';
import { FlatList, StyleSheet, Text, View ,Button} from 'react-native';
export default function Home(props) {
        if(props.loading){
            return (
                <View style={styles.container}>
                    <Text>Descargando listado de personajes de Rick & Morty...</Text>
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <Text>Listado de personajes de Rick & Morty</Text>
                <FlatList
                    data={props.personajes}
                    renderItem={
                        ({item}) =>
                        <Text>{item.name}</Text>
                    }
                />
                <Button
                    title='Anterior'
                    disabled={props.urlPrev}
                />
                <Button
                    title='Siguiente' 
                    disabled={props.urlNext} 
                /> 
                <Text>{props.url}</Text>
            </View>
        );
    
       
            
        
            
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },});
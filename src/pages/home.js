import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import styles from '../styles/mainStyles';

export default function Home(props) {
   
    const navigation = useNavigation()
    if (props.loading) {
        return (
            <View style={styles.container}>
                <Text>Descargando listado de personajes de Rick & Morty...</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>Listado de personajes de Rick & Morty</Text>
            <View style={[styles.list]}>
                <FlatList
                    data={props.personajes}
                    renderItem={
                        ({ item }) =>
                            <Text 
                            style={[styles.names]}
                            onPress={() =>
                                navigation.navigate('Detalles del Personaje', item)}>{item.name}</Text>
                    }
                />
            </View>


            <View style={styles.buttons}>
                <View style={[styles.width_40]}>
                    <Button
                        color={'#3887BE'}
                        onPress={props.setUrlPrev}
                        title='Anterior'
                        disabled={props.urlPrev}
                    />
                </View>
                <View style={[styles.width_40,styles.font]}>
                    <Button
                        color={'#3887BE'}
                        onPress={props.setUrlNext}
                        title='Siguiente'
                        disabled={props.urlNext}
                        titleStyle
                        
                    />
                </View>

            </View>
        </View>
    );






}


import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/mainStyles';
import { ScrollView } from 'react-native-gesture-handler';
export default function DetallePersonaje({ route }) {
    return (
        <View style={[styles.container]}>
            <ScrollView style={[styles.listCharacter]}>
                <View style={[styles.headerCharacter]}>
                    <View>
                        <Text style={[styles.descriptions]}>ID del personaje </Text>
                        <Text style={[styles.names,]}>{route.params.id? route.params.id : 'Sin id aparente'}</Text>
                        <Text style={[styles.descriptions]}>Nombre </Text>
                    </View>
                    <View>
                        <Image
                            style={styles.imageCharacter}
                            source={{
                                uri: route.params.image
                            }} />
                    </View>
                </View>
                <View>
                    <ScrollView style={[styles.informationCharacter]}>
                    <Text style={[styles.names]}>{route.params.name? route.params.name : 'Nombre desconocido'}</Text>
                        <Text style={[styles.descriptions]}>Género </Text>
                        <Text style={[styles.names]}>{route.params.gender? route.params.gender : 'Género desconocido'}</Text>
                        <Text style={[styles.descriptions]}>Tipo </Text>
                        <Text style={[styles.names]}>{route.params.type? route.params.type : 'Tipo sin verificar'}</Text>
                        <Text style={[styles.descriptions]}>Especie </Text>
                        <Text style={[styles.names]}>{route.params.species? route.params.species : 'Especie sin concluir'}</Text>
                        <Text style={[styles.descriptions]}>Estado </Text>
                        <Text style={[styles.names]}>{route.params.status ? route.params.status : 'Estado sin verificar'}</Text>
                        <Text style={[styles.descriptions]}>Lugar de origen</Text>
                        <Text style={[styles.names]}>{route.params.origin.name? route.params.origin.name : 'Origen sin comprobar'}</Text>
                        <Text style={[styles.descriptions]}>Url del lugar de origen</Text>
                        <Text style={[styles.names]}>{route.params.origin.url? route.params.origin.url : 'Url del origen sin hacer'}</Text>
                        <Text style={[styles.descriptions]}>Nombre de localización</Text>
                        <Text style={[styles.names]}>{route.params.location.name? route.params.location.name : 'Localización sin confirmar'}</Text>
                        <Text style={[styles.descriptions]}>Url de la locacización</Text>
                        <Text style={[styles.names]}>{route.params.location.url? route.params.status : 'Url de localización no generada'}</Text>
                        <Text style={[styles.descriptions]}>Primer episodio en aparecer</Text>
                        <Text style={[styles.names]}>{route.params.episode[0]? route.params.episode[0] : 'Sin episodio de comienzo'}</Text>
                        <Text style={[styles.descriptions]}>Url del personaje</Text>
                        <Text style={[styles.names]}>{route.params.url? route.params.url : 'Personaje sin url própia'}</Text>
                        <Text style={[styles.descriptions]}>Fecha de creación</Text>
                        <Text style={[styles.names]}>{route.params.created? route.params.created : 'Inexacta'}</Text>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>

    )

}

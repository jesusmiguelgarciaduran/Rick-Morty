import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Api extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loading:false,
            personajes:[],
            url:'https://rickandmortyapi.com/api/character'
        }
    }

    componentDidMount(){
        this.getPersonajes()
    }

    getPersonajes = () =>{
        this.setState({loading:true})

        fetch(this.state.url)
        .then(res => res.json())
    }
}
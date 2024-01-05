import React from 'react';
import Home from '../pages/home';

export default class Api extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loading:false,
            personajes:[],
            url:'https://rickandmortyapi.com/api/character',
            urlPrev:'',
            urlNext:''
        }
    }

    componentDidMount(){
        this.getPersonajes()
    }

    getPersonajes = () =>{
        this.setState({loading:true})

        fetch(this.state.url)
        .then(res => res.json())
        .then(res =>{
            this.setState({
                personajes: res.results,
                urlNext: res.info.next,
                urlPrev: res.info.prev,
                loading: false
            })
        })
    }

    setUrlNext = () =>{
        this.setState({url:this.state.urlNext})
    }
    setUrlPrev = () =>{
        this.setState({url:this.state.urlPrev})
    }

    render(){
        return(
            <Home 
            loading={this.state.loading} 
            personajes={this.state.personajes}
            url={this.state.url}
            urlPrev={this.state.urlPrev?false:true}
            urlNext={this.state.urlNext?false:true}
            />
        );
    };
}
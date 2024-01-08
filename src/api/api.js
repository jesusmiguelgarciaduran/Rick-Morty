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
        this.getPersonajes(this.state.url)
    }

     getPersonajes = (url) =>{
        this.setState({loading:true})

        fetch(url)
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
        this.getPersonajes(this.state.urlNext)
    }
    setUrlPrev = () =>{
        this.getPersonajes(this.state.urlPrev)
    }

    render(){
        return(
            <Home 
            loading={this.state.loading} 
            personajes={this.state.personajes}
            url={this.state.url}
            urlPrev={this.state.urlPrev?false:true}
            urlNext={this.state.urlNext?false:true}
            setUrlNext={this.setUrlNext}
            setUrlPrev={this.setUrlPrev}
            />
            
        );
    };
}
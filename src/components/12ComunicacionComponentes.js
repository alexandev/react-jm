import React, {Component} from "react";

export default class Padre extends Component{

    state = {
        contador:0,
    }

    //met
    incrementarContador = () =>{
        this.setState({
            contador: this.state.contador +1,
        })
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <h3> Contador <p>{this.state.contador}</p> </h3>
                <Hijo incrementarContador={this.incrementarContador} mensaje='Mensaje para hijo 1'/>
                <Hijo incrementarContador={this.incrementarContador} mensaje='Mensaje para hijo 2'/>
            </>
        );
    }
        
}

const Hijo = (props) =>{
    return(
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    ); 
}
import React from "react";

class Persona extends React.Component{

    constructor(props){
        super(props);
        this.state={
            edoCivil:""
        }
    }

    hizoClick=()=>{
        alert("hizo click en persona");
    }
    hizoClick2=(nombre)=>{
        alert("hizo click en"+nombre);
    }
    render(){
        const {nombre,apellido,lugar}= this.props;
        return(
            <div className="App">
                <h2>Elena</h2>
                <p>{nombre}, {apellido}, {lugar}</p>
                <button onClick={this.hizoClick}>
                    Boton persona;
                </button>
            </div>
        );
    }
}

export default Persona;
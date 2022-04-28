// import React from "react";
import React, { useState } from "react";


const PersonaFuncional = ({nombre, apellido, lugar}) => {
    
    // const [state, setState] = useState({
    //     edoCivil: "soltero",
    //     edad:30
    // })

    const [edoCivil, setEdoCivil] = useState("Soltero");

    const cambiarEdoCivil = () => {
        // if(state.edoCivil === "Soltero"){
        //     setState({edoCivil:"Casado"});
        // }else {
        //     setState({edoCivil:"Soltero"});
        // }

        if (edoCivil === "Soltero"){

            setEdoCivil("Casado")
        }else {
            setEdoCivil("Soltero")
        }
    }

    return(
        <div className="card">
            <h4>componente Funcional</h4>
            <p>Edo Civil: {edoCivil}</p>
            <button onClick={cambiarEdoCivil}></button>
        </div>
    )
}

export default PersonaFuncional;
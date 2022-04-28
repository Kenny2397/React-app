import React,{useState} from "react";

const Formulario = () =>{
    return(
        <form>
            <h2>
                Crear Usuario
            </h2>
            <div>
                <label>Nombre</label>
                <input className=""></input>
            </div>
            <div>
                <label>apellido</label>
                <input className=""></input>
            </div>
            <div>
                <label>E-mail</label>
                <input className=""></input>
            </div>

            <input type="submit">Crear</input>

        </form>
    )
}

export default Formulario;
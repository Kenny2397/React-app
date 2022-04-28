import React from "react";

class OtroComponente extends React.Component(){
    render(){
        return(
            <div>
                <h2>Este</h2>
                <div className="contenedor-hijos">
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default OtroComponente;

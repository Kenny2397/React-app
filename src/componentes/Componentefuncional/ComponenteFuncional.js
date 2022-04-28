import React, {useState} from 'react';

const ComponenteFuncional = ({num, aumento:aum}) => {

    

    const [numero, setNumero] = useState(num);
    const [aumento, setAumento] = useState(aum);

    const aumentaNumero = () => {
        setNumero( numero + aumento);
    }

    
    return (
        <div>
            <h1>{numero}</h1>
            
            <form>
                <p>Ingrese numero inicial:</p>
                <input type="text" onChange={(e)=>{setNumero(parseInt(e.target.value))}}></input>
                <p>Ingrese aumento</p>
                <input type="text" onChange={(e)=>{setAumento(parseInt(e.target.value))}}></input>
            </form>
            
            <button className='btn btn-primary' onClick={aumentaNumero}>
                Aumenta en {aumento}
            </button>
        </div>
    )
}

export default ComponenteFuncional;
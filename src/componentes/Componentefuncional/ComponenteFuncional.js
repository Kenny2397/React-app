import React, {useState} from 'react';

const ComponenteFuncional = ({num, aumento}) => {

    const [numero, setNumero] = useState(num);

    const aumentaNumero = () => {
        setNumero( numero + aumento);
    }

    return (
        <div>
            <h1>{numero}</h1>
            <button className='btn btn-primary' onClick={aumentaNumero}>
                Aumenta en 1
            </button>
        </div>
    )
}

export default ComponenteFuncional;
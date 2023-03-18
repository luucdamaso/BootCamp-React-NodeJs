import './Sorteio.css'
import { useState } from 'react';

export const Sorteio = () => {
    let [numero, setNumero] = useState([]);
    
    // console.log("Componente reconstruiu " + new Date().toTimeString());
    // console.log('Valor do estado ' + numero);

    return (
        <div className='sorteio'>
            <h1 className={numero % 2 === 0 ? 'number-par' : 'number-impar'}>{numero}</h1>
            <button onClick={() => setNumero (Math.floor(Math.random() * 100))}>
            Sorteio
            </button>
            
        </div>
    )
}
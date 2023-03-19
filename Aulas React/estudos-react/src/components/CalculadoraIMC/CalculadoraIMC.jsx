import './CalculadoraIMC.css';
import { useState } from 'react';

export const CalculadoraIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState('');

    const calculoIMC = () => {
        setIMC((peso / (altura * altura)).toFixed(2));
    }


    return (
        <div className='calc'>
            <input type="number" placeholder='Peso' onChange={(e) => {setPeso(e.target.value)}}/>
            <input type="number" placeholder='Altura' onChange={(e) => {setAltura(e.target.value)}}/>
            <button onClick={calculoIMC}>
                Resultado
            </button>
            <h3>{imc}</h3>
        </div>
    )
}
import './Carrossel.css';
import { useState } from 'react';
import { conteudo } from '../ConteudoCarrossel/ConteudoCarrolssel';


export const Carrossel = () => {
    let [contador, setContador] = useState(0);
    
    const next = () => {
        if (contador >= 4) {
            setContador(0);
        } else {
            setContador(contador + 1);
        }
    };
    
    const prev = () => {
        if (contador <= 0) {
            setContador(4);
        } else {
            setContador(contador - 1);
        }
    };

    return (
        <div className='carrossel-container'>
            <div className='corrossel-titulo'>
                <p>{conteudo[contador].titulo}</p>
            </div>
            <div className='carrossel-item'>
                <img src={conteudo[contador].imagem} alt="" />
            </div>
            <div className='carrossel-buttons'>
                <button onClick={() => contador > 4 ? setContador(0) : setContador(contador + 1)}>
                    {`<`}
                </button>
                <button onClick={next}>
                    {`>`}
                </button>
            </div>
        </div>
    )
};

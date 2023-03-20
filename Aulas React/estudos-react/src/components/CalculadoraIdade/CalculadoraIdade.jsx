import { useEffect, useState } from 'react'
import './CalculadoraIdade.css'

export const CalculadoraIdade = () => {
    const [anoNascimento, setAnoNascimento] = useState('');
    const [anoAtual, setAnoAtual] = useState('');
    const [idade, setIdade] = useState('');

    useEffect(() => {
        const resultado = anoAtual - anoNascimento
        setIdade(resultado)
    }, [idade])

    

    return (
        <div className='calculadora-idade'>
            <input type="number" 
            placeholder='Em qual ano você nasceu?'
            onChange={(e)=>{setAnoNascimento(e.target.value)}}
            value={anoNascimento}
            />
            <input type="number" 
            placeholder='Ano atual'
            onChange={(e)=> {setAnoAtual(e.target.value)}}
            value={anoAtual}
            />
            <hr />
            <h3>{idade}</h3>
        </div>
    )
    }
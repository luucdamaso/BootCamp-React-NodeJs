import { useState } from 'react';
import './Cadastro.css'

export function Cadastro() {
    
    const [form, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resumo, setResumo] = useState('');

    const obterNome = (event) => {setName(event.target.value);};

    const obterEmail = (event) => {setEmail(event.target.value);};

    const obterResumo = (event) => {setResumo(event.target.value);};

    return (
        <div>
            <strong>Formulário de cadastro</strong>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={obterNome}/>
            <br />
            <input type="email" placeholder="Digite seu e-mail" onChange={obterEmail}/>
            <br />
            <textarea name="resumo" id="" cols="30" rows="10" onChange={obterResumo}></textarea>
            <br />
            <strong>{form}</strong>
            <br />
            <strong>{email}</strong>
            <br />
            <strong>{resumo}</strong>
        </div>
    )
}
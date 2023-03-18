import './Abas.css'
import { useState } from 'react'; //useState é um hook

export const Abas = () => {
    let [aba, setAba] = useState('home')
    let conteudoAba; // conter o layout da aba selecionada

    if (aba === 'home') {
        conteudoAba = <div>HOME</div>
    } else if ( aba === 'perfil') {
        conteudoAba = <div>PERFIL</div>
    } else if (aba === 'ajuda') {
        conteudoAba = <div>AJUDA</div>
    }

    return (
        <div>
            <button onClick={() => setAba('home')}>Home</button>
            <button onClick={() => setAba('perfil')}>Perfil</button>
            <button onClick={() => setAba('ajuda')}>Ajuda</button>
            <hr />
            {conteudoAba}
        </div>
    );
}
    /*if(aba === 'home') {
    return (
        <div>
            <button>Home</button>
            <button>Perfil</button>
            <button>Ajuda</button>
            <hr />
            <div>HOME</div>
        </div>
    );
    } else if (aba === 'perfil') {
        return (
            <div>
                <button>Home</button>
                <button>Perfil</button>
                <button>Ajuda</button>
                <hr />
                <div>PERFIL</div>
            </div>
        )
    } else if (aba === 'ajuda') {
        return (
            <div>
                <button>Home</button>
                <button>Perfil</button>
                <button>Ajuda</button>
                <hr />
                <div>AJUDA</div>
            </div>
        )
    }*/
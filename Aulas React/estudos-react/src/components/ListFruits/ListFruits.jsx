import { useState } from "react";
import { frutas } from "../../data/frutas.js";
import './ListFruits.css';

export const ListFruits = () => {
    const [busca, setBusca] = useState('');
    const lowerBusca = busca.toLocaleLowerCase();
    const frutasFiltradas = frutas.filter((fruta) => fruta.nome.toLowerCase().includes(lowerBusca))
    return (
        <div className="frutas">
            <h1>Lista de frutas</h1>
            <input type="text" placeholder="Digite o nome de uma fruta" value={busca} onChange={(e) => setBusca(e.target.value)}/>
            {busca === '' ? (''): (<ul>
                {frutasFiltradas.map((fruta) => ( <li key={fruta.nome}><img src={fruta.imagem} alt="" /></li>))}
            </ul>)}
        </div>
    )
};
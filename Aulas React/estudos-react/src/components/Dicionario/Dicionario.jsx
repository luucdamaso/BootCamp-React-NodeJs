import { useEffect, useState } from 'react';
import './Dicionario.css';

const palavras = [
    {
      palavra: 'Alvíssaras',
      significado: 'Expressão de alegria por notícia recebida.',
    },
    {
      palavra: 'Balaústre',
      significado: 'Pequena coluna ornamentada utilizada em cercas.',
    },
    {
      palavra: 'Beneplácito',
      significado: 'Consentimento ou aprovação.',
    },
    {
      palavra: 'Cuntatório',
      significado: 'Em que há demora.',
    },
    {
      palavra: 'Deletério',
      significado: 'Degradante, insalubre, prejudicial.',
    },
    {
      palavra: 'Filantropo',
      significado: 'Presunçoso',
    },
    {
      palavra: 'Hebdomadário',
      significado: 'Semanal.',
    },
    {
      palavra: 'Inócuo',
      significado: 'Inofensivo.',
    },
    {
      palavra: 'Ósculo',
      significado: 'Beijo, com o sentido de cumprimento ou conciliação.',
    },
    {
      palavra: 'Quintessência',
      significado: 'Auge, máximo, primor.',
    },
    {
      palavra: 'Recôndito',
      significado: 'Oculto.',
    },
    {
      palavra: 'Taciturno',
      significado: 'Sombrio, obscuro.',
    },
    {
      palavra: 'Ufanismo',
      significado: 'Aquele que se orgulha de algo de forma exagerada.',
    },
    {
      palavra: 'Verossimilhança',
      significado: 'Discurso que parece ser verdadeiro, coerente, plausível.',
    },
    {
      palavra: 'Zeugma',
      significado:
        'Figura de linguagem que consiste na omissão de um termo dito anteriormente.',
    },
  ];

export const Dicionario = () => {
const [busca, setBusca] = useState('');
const [resultados,setResultados] = useState(palavras);

useEffect(() => {
    const buscaResultados = [];
    for(let e of palavras) {
        if (e.palavra.indexOf(busca) > -1) {
            buscaResultados.push(e);
        }
    }

    setResultados(buscaResultados)
}, [busca])

    return (
        <div>
            <input type="text" 
            placeholder='Pesquise uma palavra'
            onChange={(e)=> setBusca(e.target.value)}
            />
            <br />
            <small>Termo buscado: <b>{busca}</b></small>
            <hr />
            {resultados.map((e, index) => {
                return (
                    <div key={index}>
                        <h3>{e.palavra}</h3>
                        <blockquote>{e.significado}</blockquote>
                    </div>
                )
            })}
        </div>
    )
}
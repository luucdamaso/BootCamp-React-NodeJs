import { useState } from 'react';
import './CadastroEmpresa.css';

export const CadastroEmpresa = () => {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [profissao, setProfissao] = useState('');
    const [listaPessoas, setListaPessoas] = useState([]);

    const adicionarPessoa = () => {
        const novaPessoa = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            profissao: profissao,
        };

        const novoArray = [...listaPessoas, novaPessoa];
        setListaPessoas(novoArray)
    }

    const removerPessoa = (o) => {
        const novoArray = listaPessoas.filter((e) =>
        e !== o);
        setListaPessoas(novoArray);
    }

    return(
        <div>
            <input type="text"
            placeholder='Nome'
            onChange={(e)=> {setNome(e.target.value)}}
            value={nome}
            />
            <input type="text"
            placeholder='Sobrenome'
            onChange={(e)=> {setSobrenome(e.target.value)}}
            value={sobrenome}
            />
            <input type="email"
            placeholder='Email'
            onChange={(e)=> {setEmail(e.target.value)}}
            value={email}
            />
            <input type="text"
            placeholder='Profissão'
            onChange={(e)=> {setProfissao(e.target.value)}}
            value={profissao}
            />
            <button onClick={adicionarPessoa}>Adicionar</button>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>Profissao</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPessoas.map((e, indice) => {
                        return(
                        <tr key={indice}>
                            <td>{e.nome}</td>
                            <td>{e.sobrenome}</td>
                            <td>{e.email}</td>
                            <td>{e.profissao}</td>
                            <td>
                                <button onClick={()=> removerPessoa(e)}>
                                    Remover
                                </button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};
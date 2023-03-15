import './NavBar.css';

//props = propriedades de um componente
// Renderização condicional = mudar o visual e a estrutura do componente de acordo com algum valor

export function NavBar(props) {
    const logado = props.logado; // True ou false
    const nomeUsuario = props.nomeUsuario; // String

    let mensagem;

    if (logado === true) {
        mensagem = <p>Bem vindo(a), <b>{nomeUsuario}!</b></p>
    } else {
        mensagem = <p>Você estaá desconectado!</p>
    }
    // && = se o valor for verdadeiro incorpora o elemento
    return (
        <div>
            <hr />
            {logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png"/>}
            {mensagem}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Ajuda</a></li>
                {logado &&<li><a href="#">Perfil</a></li>}
                {!logado &&<li><a href="#">Cadastre-se</a></li>}
            </ul> 
            <hr />
        </div>
        );
}

/* METODO 1: if (logado === true) {
        return (
        <div>
            <hr />
            <p>Bem vindo(a), {nomeUsuario}!</p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Ajuda</a></li>
            </ul> 
            <hr />
        </div>
        );
    } else {
        return (
            <div>
                <hr />
                <p>Você esta desconectado</p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Ajuda</a></li>
                </ul> 
                <hr />
            </div>
            );
    }
}

*/ 
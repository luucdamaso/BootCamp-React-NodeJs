import { useParams } from "react-router-dom";
import { usuarios } from "../../data/usuarios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


export const Perfil = () => {

    let params = useParams();
    let id = params.id;

    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id);
    })

    return(
        <div>
            <h1>Bem vindo</h1>
            <h3>Nome: {usuario.nome}</h3>
            <span>Idade: {usuario.idade}</span>
            <br />
            <span>Email: {usuario.email}</span>
            <br />
            <Button variant='dark'><Link to={'/'}>Home</Link></Button>
            <Button variant='dark'><Link to={'/usuarios'}>Voltar</Link></Button>
        </div>

    )
}
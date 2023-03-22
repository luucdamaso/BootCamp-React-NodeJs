import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { Link, useParams, useNavigate } from "react-router-dom";

export const EditaUsuario = () => {

    //useParams é uma função que retorna um objeto. Este objeto contém os parametros passados pela rota
    let params = useParams();
    let id = params.id;
    console.log(id);

    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); //retorna o valor booleano
    })

    let navigate = useNavigate();

    function editar () {
      //Capturar as informações do formulario
      //Validar os dados de entrada
      //Modificar as informações no banco de dados
      navigate('/usuarios');
    }

    return (
    <div className="edita-usuario">
      <h2>{usuario.nome}</h2>
      <span>{usuario.email}</span>
      <br />
      <span>{usuario.idade}</span>
      <br />
      <Button variant="dark" onClick={editar}>Editar</Button>
      <Button variant="dark"><Link style={{}} to={`/usuarios`}>Voltar</Link></Button>
    </div>
  );
};

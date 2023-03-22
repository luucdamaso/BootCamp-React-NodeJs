import { usuarios } from "../../data/usuarios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Usuarios = () => {
  return (
    <div className="usuario">
      <h1>Usuario</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => {
            return (
                <tr>
            <td>{usuario.id}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.idade}</td>
            <td>{usuario.email}</td>
            <td>
                <Link to={`/usuario/edit/${usuario.id}`}>Editar</Link>
            </td>
            <td>
              <Link to={`/perfil/${usuario.id}`}>Perfil</Link>
            </td>
          </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

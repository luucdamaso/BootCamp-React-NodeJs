import { useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../Components/Loader";
import { getEmprestimos } from "../../firebase/emprestimos";

export function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState(null);

  useEffect(() => {
    getEmprestimos().then((busca) => {
      setEmprestimos(busca);
    });
  }, []);

  return (
    <div className="emprestimos">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Emprestimos</h1>
          <Button as={Link} to="/emprestimos/adicionar" variant="success">
            Adicionar empréstimo
          </Button>
        </div>
        <hr />
        {emprestimos === null ? (
          <Loader />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Leitor</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Titulo livro</th>
                <th>Status</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {emprestimos.map((e) => {
                const data = e.dataEmprestimo
                  .toDate()
                  .toLocaleDateString("pt-br");
                return (
                  <tr key={e.id}>
                    <td>{e.leitor}</td>
                    <td>{e.email}</td>
                    <td>{e.telefone}</td>
                    <td>{e.livro.titulo}</td>
                    <td>
                      <Badge
                        bg={e.status === "Pendente" ? "warning" : "success"}
                      >
                        {e.status}
                      </Badge>
                    </td>
                    <td>{data}</td>
                    <td>
                      <Button 
                        as={Link}
                        to={`/emprestimos/editar/${e.id}`}
                        variant="warning"
                        size="sm"
                        className="me-2">
                      <i className="bi bi-pencil-square"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}

// LEITOR
// EMAIL
// TELEFONE
// TITULO LIVRO
// STATUS
// DATA

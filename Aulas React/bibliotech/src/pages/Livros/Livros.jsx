import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Loader } from "../../Components/Loader";
import { deleteLivro, getLivros } from "../../firebase/livros";
import "./Livros.css";

export function Livros() {
  const [livros, setLivros] = useState(null);

  useEffect(() => {
    getLivros().then((busca) => {
      setLivros(busca);
    });
  }, []);

  function onDeleteLivro(id, titulo) {
    const deletar = window.confirm(
      `Tem certeza que deseja excluir o livro "${titulo}"?`
    );
    if (deletar) {
      deleteLivro(id).then(() => {
        toast.success(`${titulo} apagado com sucesso,`, {
          duration: 2000,
          position: "bottom-right",
        });
        getLivros().then((busca) => {
          setLivros(busca);
        });
      });
    }
  }

  return (
    <div className="livros">
      <Container>
        <div className="mt-2 d-flex justify-content-between aligns-items-center">
          <h1>Livros</h1>
          <Button as={Link} to="/livros/adicionar" variant="success">
            Adicionar Livros
          </Button>
        </div>
        <hr />
        {livros === null ? (
          <Loader />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>ISBN</th>
                <th>Imagem</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => {
                return (
                  <tr key={livro.id}>
                    <td>{livro.titulo}</td>
                    <td>{livro.autor}</td>
                    <td>{livro.categoria}</td>
                    <td>{livro.isbn}</td>
                    <td>
                      <img src={livro.urlCapa} alt={livro.titulo} />
                    </td>
                    <td>
                      <Button
                        as={Link}
                        to={`/livros/editar/${livro.id}`}
                        variant="warning"
                        size="sm"
                        className="me-2"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onDeleteLivro(livro.id, livro.titulo)}
                      >
                        <i className="bi bi-trash-fill"></i>
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

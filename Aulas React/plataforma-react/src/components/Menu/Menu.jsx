import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";

export function Menu() {
  return (
    <div className="menu">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="link">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="link">
              <Link to="/blog">Blog</Link>
            </Button>
            <Button variant="link">
              <Link to="/contato">Contato</Link>
            </Button>
            <Button variant="link">
              <Link to="/usuarios">Usuários</Link>
            </Button>
            <Button variant="link">
              <Link to="/login">Login</Link>
            </Button>
            <Form className="d-flex ms-5" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

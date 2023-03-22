import { Button } from 'react-bootstrap'
import { Container } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <Container>
            <Button variant="dark">
              <Link to="Section1">Section1</Link>
            </Button>
            <Button variant="dark">
              <Link to="Section2">Section2</Link>
            </Button>
            <Button variant="dark">
              <Link to="Section3">Section3</Link>
            </Button>
            </Container>
            <Outlet/>
        </div>
    )
}
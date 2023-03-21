import "./App.css";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { Blog } from "./pages/Blog/Blog"
import { Contato } from "./pages/Contato/Contato"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Container } from "react-bootstrap";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Menu />
          <Container>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Blog" element={<Blog/>} />
              <Route path="/Contato" element={<Contato/>} />
              <Route path="/Usuarios" element={<Usuarios/>} />
              <Route path="/Login" element={<Login/>}/>
            </Routes>
          </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;

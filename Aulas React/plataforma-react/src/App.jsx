import "./App.css";
import { Home } from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { Contato } from "./pages/Contato/Contato";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Container } from "react-bootstrap";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import * as React from "react-bootstrap";
import { Root } from "./pages/Root/Root";
import { Section1 } from "./components/Section1/Section1";
import { Section2 } from "./components/Section2/Section2";
import { Section3 } from "./components/Section3/Section3";
import { EditaUsuario } from "./pages/EditaUsuario/EditaUsuario";
import { Perfil } from "./pages/Perfil/Perfil";
import { Pokemon } from "./pages/Pokemon/Pokemon";
import { CadastroSuperHerois } from "./pages/CadastroSuperHerois/CadastroSuperHerois";
import { Equipamentos } from "./pages/Equipamentos/Equipamentos";
import { Cadastro } from "./pages/Cadastro/Cadastro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />}>
                <Route path="section1" element={<Section1 />} />
                <Route path="section2" element={<Section2 />} />
                <Route path="section3" element={<Section3 />} />
              </Route>
              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/usuario/edit/:id" element={<EditaUsuario />} />
              <Route path="/login" element={<Login />} />
              <Route path="/perfil/:id" element={<Perfil/>}/>
              <Route path="/pokemon" element={<Pokemon/>} />
              <Route path="/superherois" element={<CadastroSuperHerois/>} />
              <Route path="/equipamentos" element={<Equipamentos/>} />
              <Route path="/cadastro" element={<Cadastro/>}/>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

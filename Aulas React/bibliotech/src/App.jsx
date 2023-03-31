import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { auth } from "./firebase/config";
import { AdicionarEmprestimo } from "./pages/AdicionarEmprestimo/AdicionarEmprestimo";
import { AdicionarLivro } from "./pages/AdicionarLivro/AdicionarLivro";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { ChatRoom } from "./pages/Chat/Chat";
import { EditarEmprestimo } from "./pages/EditarEmprestimo/EditarEmprestimo";
import { EditarLivro } from "./pages/EditarLivro/EditarLivro";
import { Emprestimos } from "./pages/Emprestimos/Emprestimos";
import { Home } from "./pages/Home/Home";
import { Livros } from "./pages/Livros/Livros";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";

export function App() {
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    useEffect(() => {
      //Monitorar/detectar o usuário conectado
      onAuthStateChanged(auth, (user) => {
        //user nulo = deslogado
        //user com objeto = logado
        setUsuarioLogado(user)
      })
      //Esse efeito irá rodar apenas uma vez, quando o app for renderizado.
    }, []);

  return (
    <>
      <AuthContext.Provider value={usuarioLogado}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Livros/>}/>
            <Route path="/livros/adicionar" element={<AdicionarLivro/>}/>
            <Route path="/livros/editar/:id" element={<EditarLivro/>}/>
            <Route path="/emprestimos" element={<Emprestimos/>}/>
            <Route path="/emprestimos/adicionar" element={<AdicionarEmprestimo/>}/>
            <Route path="/emprestimos/editar/:id" element={<EditarEmprestimo/>}/>
            <Route path="/chat" element={<ChatRoom/>} />
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
      <Toaster/>
    </>
  );
}

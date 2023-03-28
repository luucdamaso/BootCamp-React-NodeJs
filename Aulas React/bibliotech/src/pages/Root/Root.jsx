import { Outlet, Navigate } from "react-router-dom"
import { Menu } from "../../Components/Menu/Menu"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


// Layout principal do App com Navbar fixa
// As páginas com Navbar fixa: home, livros, emprestimos e etc

export const Root = () => {
    const usuariologado = useContext(AuthContext)

    if (usuariologado === null) {
        return <Navigate to='/login'/>
    } else {
        
    }
    return (
        <>
        <header><Menu/></header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
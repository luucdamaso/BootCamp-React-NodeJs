import { Outlet } from "react-router-dom"
import { Menu } from "../../Components/Menu/Menu"

// Layout principal do App com Navbar fixa
// As páginas com Navbar fixa: home, livros, emprestimos e etc

export const Root = () => {
    return (
        <>
        <header><Menu/></header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
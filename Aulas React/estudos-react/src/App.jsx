import { ListaCompras } from "./components/ListaCompras/ListaCompras"

import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";

import { NavBar } from "./components/NavBar/NavBar";

import { SalaAula } from "./components/SalaAula/SalaAula";

import { ImparPar } from "./components/ImparPar/ImparPar";

import { ProductList } from "./components/ProductList/ProductList";

export function App() {
    return (
        <>
            {/* <ListaCompras/> */}
            {/* <ListaFuncionarios/> */}
            {/* <NavBar logado = {true} nomeUsuario='Jose'/> */}
            {/* <NavBar logado = {false} /> */}
            {/* <SalaAula/>
            <ImparPar numero={8}/> */}
            <ProductList/>
        </>
    );
}
import './ProductList.css'
import ImageList1 from "../../assets/imagesProductList/LEGO-Architecture-Londres.png";
import ImageList2 from "../../assets/imagesProductList/LEGO-Caixa-Grande.jpg";
import ImageList3 from "../../assets/imagesProductList/LEGO-City-Helicoptero.jpg";
import ImageList4 from "../../assets/imagesProductList/LEGO-Homem-Aranha.jpg";

const lista = [
    {imagem:ImageList1,nome:'Arquitetura de Londres', discrição:'Construa um modelo detalhado do horizonte de Londres', preço:269.99},
    {imagem:ImageList2, nome:'Caixa Grande', discrição:'Construa seus próprios edifícios incríveis e muito mais com esta coleção clássica de peças lego em 33 cores diferentes', preço:359.99},
    {imagem:ImageList3, nome:'City Helicoptero', discrição:'Conjunto de bombeiros para crianças 4+ – Dê a conhecer às crianças o mundo da brincadeira LEGO com este conjunto LEGO City Helicóptero dos Bombeiros (60318)', preço:78.99},
    {imagem:ImageList4, nome:'Homem Aranha', discrição:'Mantém as crianças entretidas com este divertido set de veículo EGO® Marvel Spider-Man. ', preço:75.99}
]

export function ProductList() {
    const listaProdutos = lista.map((produto, index)=>{
        let promocao = produto.preço <= 200 ? <h4>{<p>Oferta</p>}</h4> : '';
        return (
            <div className='card-product'key={index}>
                <img src={produto.imagem}></img>
                <h2>{produto.nome}</h2>
                {promocao}
                <p>{produto.discrição}</p>
                <p className='valor'>R$: {produto.preço}</p>
            </div>
        );
    });

    return (
        <div className='box'>
            {listaProdutos}
        </div>
    )
}
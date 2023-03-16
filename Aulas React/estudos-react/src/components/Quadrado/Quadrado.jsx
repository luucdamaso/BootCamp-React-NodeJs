import './Quadrado.css'

function quandoClicar(event) {
    const doisCliques = event.target;
    doisCliques.style.backgroundColor = 'orange';
}

// function quandoMouseEntrar(event) {
//     const quadrado = event.target;
//     quadrado.style.backgroundColor = 'red';
// }

function quandoMouseSair(event) {
    const quadrado = event.target;
    quadrado.style.backgroundColor = 'darkblue';
}

export function Quadrado() {
    return (
        <div className='quadrado' onDoubleClick={quandoClicar} onMouseLeave={quandoMouseSair}>

        </div>
    )
}
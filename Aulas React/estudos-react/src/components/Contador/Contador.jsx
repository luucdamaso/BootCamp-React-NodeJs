import './Contador.css'
import { useState } from "react";  //useState -> Uma função

export function Contador() {
     // useState é uma função que cria um estado.
    // Um estado é uma variavel especial que sincroniza as mudanças na página.
    // indice 0 -> estado
    // indice 1 -> função que muda o estado
    // Retorna um array (tem apenas duas posições)
    
    // const array =useState(0);
    // let numero = array[0];
    // let setNumero = array[1]

    let [numero, setNumero] = useState(0);
    
    function inc100() {
        setNumero(numero+100);
    }
    function mult3() {
        setNumero(numero*3);
     }
 
     function div2() {
         setNumero(numero/2);
     }
     function dec50() {
        setNumero(numero-50);
     }
 
     function dec5() {
         setNumero(numero-5);
     }

     function zerar() {
        setNumero(numero=0);
    }

    return (
        <div className="contador">
            <h1>{numero}</h1>
            <div>
            <button onClick={() => {setNumero(numero + 10);}}>
                +10
            </button>
            <button onClick={inc100}>
                +100
            </button>
            <button onClick={mult3}>
                *3
            </button>
            <button onClick={div2}>
                /2
            </button>
            <button onClick={dec50}>
                -50
            </button>
            <button onClick={dec5}>
                -5
            </button>
            <button onClick={zerar}>
                Reset
            </button>
            </div>
        </div>
    );
}
import { useEffect, useState } from "react"


export const ContadorHook = () => {
    const [counter, setCounter] = useState(0);

    // //componentDiUpdate - executa toda vez que o componente atualiza
    // useEffect(()=> {
    //     console.log('componentDiUpdate');
    // })

    // //componentDiMount - executa 1x
    // useEffect(()=> {
    //     console.log('componentDiMount');
    // }, [])

    //com depedência - executa toda vez que a depedência mudar
    useEffect(()=> {
        console.log('Contador mudou para', counter);
    }, [counter])

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={()=> setCounter(counter - 1)}>-</button>
        </div>
    )
}
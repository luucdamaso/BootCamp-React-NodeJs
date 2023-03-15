import './ImparPar.css'

export function ImparPar(props) {
    const number = props.numero % 2 === 0 ? `${props.numero} é par` : `${props.numero} é impar` ;
    return (
        <div className='numero'>
            {number}
        </div>
    )
}

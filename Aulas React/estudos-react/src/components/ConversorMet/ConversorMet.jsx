import { useEffect, useState } from 'react';
import './ConversorMet.css';

export const ConversorMet = () => {
    const [met, setMet] = useState(0);
    const [mm, setMm] = useState(0);
    const [cm, setCm] = useState(0);
    const [km, setKm] = useState(0);

    useEffect(()=> {
        setMm(Number(met) * 1000);
        setCm(Number(met) * 100)
        setKm(Number(met) / 1000)
    }, [met])

    return (
        <div className='conversor-metros'>
            <input
            type="number"
            placeholder='Digite uma distancia em metros'
            onChange={(e)=> setMet(e.target.value)}
            />
            <p>Distancia em milimetros: {mm}</p>
            <p>Distancia em centimetros: {cm}</p>
            <p>Distancia em KM: {km}</p>
        </div>
    )
}
import { useEffect, useState } from "react";
import "./ConversorTemp.css";

export const ConversorTemp = () => {
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);
  const [tempK, setTempK] = useState(0);

  // Exercício: Adicionar conversão para Kelvin no efeito
  // e mostrar no return. K = C - 273

  useEffect(() => {
    const resultadoConversao = tempC * 1.8 + 32;
    setTempF(resultadoConversao);
    const resultadoConversaoKelvin = Number(tempC) + 273.15;
    setTempK(resultadoConversaoKelvin);
  }, [tempC]);

//   useEffect(() => {
//     document.title = tempF;
//   }, [tempF]);

  return (
    <div>
      <input
        type="number"
        placeholder="Temperatura em C"
        onChange={(e) => setTempC(e.target.value)}
      />
      <p>Valor digitado: {tempC} °C</p>
      <p>Temperatura em Fahrenheit: {tempF} °F</p>
      <p>
        Temperatura em Kelvin: {tempK} <strong>K</strong>
      </p>
    </div>
  );
};

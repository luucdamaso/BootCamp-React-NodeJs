import "./QuestaoQuiz.css";
import { useState } from "react";

const pergunta = {
  enunciado: "Qual a comida preferido do Almir?",
  alternativas: ["Churrasco", "Batata", "Feijoada", "Pizza"],
  alternativaCorreta: "Batata",
};

export const QuestaoQuiz = () => {
  const [statusQuiz, setStatusQuiz] = useState("pendente");
  const [chances, setChances] = useState(2);
  //pendente  precisa marcar alternativa
  //acertou = marcou a alternativa correta
  //errou = marcou a alternativa errada

  const checarResposta = (altMarcada) => {
    if (altMarcada === pergunta.alternativaCorreta) {
      //A interface ira mostrar o feedback de que acertou
      setStatusQuiz("acertou");
      setChances(2)
    } else {
      if (chances > 1) {
        setChances(chances - 1);
        setStatusQuiz("errou");
      } else {
        setStatusQuiz("semTentativas");
      }
    }
  };

  if (statusQuiz === "pendente") {
    return (
      <div>
        <h3>{pergunta.enunciado}</h3>
        <small>Tentativas restantes: {chances}</small>
        <ol type="A">
          {pergunta.alternativas.map((alt) => (
            <li className="alternativa" onClick={() => checarResposta(alt)}>
              {alt}
            </li>
          ))}
        </ol>
      </div>
    );
  } else if (statusQuiz === "acertou") {
    return (
      <div>
        <h3>Parabéns, você acertou</h3>
        <p>Mostrou que você teve aula com o mago.</p>
        <button onClick={() => setStatusQuiz("pendente")}>Mais batata?</button>
      </div>
    );
  } else if (statusQuiz === "errou") {
    return (
      <div>
        <h3>Você errou mas pode tentar novamente</h3>
        <button onClick={() => setStatusQuiz("pendente")}>
          Tentar novamente
        </button>
      </div>
    );
  } else if (statusQuiz === "semTentativas") {
    return (
      <div>
        <h3>Você errou todas as tentativas!</h3>
      </div>
    );
  }
};

//Trazer de outro arquivo/biblioteca alguma função ou variável
import { createRoot } from "react-dom/client";
import { Mensagem } from "./components/Mensagem";
import { Titulo } from "./components/Titulo";
// Linka o arquivo css ao projeto do React
import './styles.css';

//Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement);

// Inserimos o conteúdo da página
root.render(
  <div>
    <Titulo></Titulo>
    <Mensagem></Mensagem>
  </div>
);

// let nome = 'Almir';

// root.render(
//     <section>
//       <h1>React é top</h1>
//       <img width='350px' src="https://picsum.photos/200" />
//       <p>
//         Olá, tudo bem? <br /> <b>{nome.toUpperCase()}</b>
//       </p>
//       <p>Soma: {1 + 1}</p>
//     </section>
//   );

// JSX = JavaScript Extesion
// No fim o HTML é convertido para JavaScript (por baixo dos panos)
// JSX = Açúcar Sintático

// Dentro das chaves podemos escrever expressões JS!

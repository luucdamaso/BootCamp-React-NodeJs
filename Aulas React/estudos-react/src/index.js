//Trazer de outro arquivo/biblioteca alguma função ou variável
import { App } from "./App";
import { createRoot } from "react-dom/client";
// Linka o arquivo css ao projeto do React
import './styles.css';

//Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement);

// Inserimos o conteúdo da página
root.render(
    <App/>
)
// root.render(
//     <div>
//       {/* <Titulo></Titulo>
//       <Mensagem></Mensagem>
//       <Postagem></Postagem>
//       <Blog></Blog>
//       <Footer></Footer> */}
//       <Titulo borderLeftColor="#FF0000" backgroundColor="#FF000022" color="black">
//         Musicas
//       </Titulo>
//       <ListMusics></ListMusics>
//       <Titulo borderLeftColor="#00FF00" backgroundColor="#00FF0022" color="black">
//         Tarefas
//       </Titulo>
//       <Task title="Beber Água" status="Feito" deadline="14/03/2023"></Task>
//       <Task title="Marcar reunião" status="Atrasado" deadline="14/03/2023"></Task>
//       <Task title="Jantar comemorativo" status="Pendente" deadline="14/03/2023"></Task>
//       <Titulo color="black">
//         React é uma biblioteca para a criação de interfaces visuais web.
//       </Titulo>
//     </div>
//   );



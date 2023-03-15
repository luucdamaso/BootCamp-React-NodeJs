import "./Titulo.css";

export function Titulo({borderLeftColor, backgroundColor, color, children}) {
    const textoTitulo = children;
    return <h1 className="titulo" style={{borderLeftColor, backgroundColor, color}}>{textoTitulo}</h1>;
  }
  // export function Titulo(props) {
    //const textoTitulo = props.children;
  // let objectStyle = {
    //   backgroundColor: props.backgroundColor, //background-color
    //   borderLeftColor: props.borderLeftColor// border-left-color
    // }
    // A parte "visual" do componente
    // return <h1 className="titulo" style={objectStyle}>{textoTitulo}</h1>;
    //}
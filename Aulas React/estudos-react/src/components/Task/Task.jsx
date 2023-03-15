import "./Task.css"
// props -> propriedades
export function Task({ title, status, deadline }) {
    // let { title, status, deadline } = props; 
    // desestruturação
    let color = "blue";
    if(status === "Feito") {
        color = "green";
    }
    else if(status === "Atrasado") {
        color = "red";
    }
    else {
        color = "blue";
    }
    const objectStyle = { color };
    return (
        <div className="task">
            <strong>{title}</strong>
            <div className="details">
                <span className="status" style={objectStyle}>{status}</span>
                <span className="deadline">{deadline}</span>
            </div>
        </div>
    );
}
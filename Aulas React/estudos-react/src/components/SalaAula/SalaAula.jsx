import './SalaAula.css'

const alunos = [
{chamada: 1, nome: 'Alex', media: 8},
{chamada: 2, nome: 'Aline', media: 8.5},
{chamada: 3, nome: 'Bruna', media: 7},
{chamada: 4, nome: 'Carlos', media: 6},
];

export function SalaAula() {
const media = alunos.map((aluno) => {
    let classCard = aluno.media >= 7 ? 'aluno-card' : 'aluno-card-red';
        
    return(
    <div key={aluno.chamada} className={classCard}>
    <h2>Aluno: {aluno.nome}</h2>
    <p>Número na chamada: {aluno.chamada}</p>
    {aluno.media >= 7 ? aluno.media : <p> Continue se esforçando!</p>}
    </div>
    );
        
        
});   
    return (
        <>
        <div className='box'>
            {media}
        </div>
        </>
    );
}
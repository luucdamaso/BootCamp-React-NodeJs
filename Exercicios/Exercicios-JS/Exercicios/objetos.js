//1. Crie um objeto que representa uma pessoa. Propriedades: nome, idade, peso, altura. Métodos: calcular o IMC com base no peso e altura.
const pessoa = {
        nome: 'Lucas',
        idade: 25,
        peso: 80,
        altura: 1.83,
     imc(){
        console.log((this.peso/(this.altura*this.altura)).toFixed(2));
    },
}
console.log(pessoa); 

//2. Crie um objeto que representa uma partida de futebol. Propriedades: mandante e visitante (representa o time com seu nome, cidade, estado e uma lista com os nomes dos 11 titulares), placar (por exemplo "5x1").

const partidaDeFutebol = 
{ mandante:
   {
    time: 'a',
    cidade: 'c',
    estador: 'b',
    jogadores: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
   },
   visitante:
   {
    time: 'a',
    cidade: 'c',
    estador: 'b',
    jogadores: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
   },
   placar: '5x1'
}
console.log(partidaDeFutebol); 

//3. Crie um array de objetos pet com as propriedades: nome, idade, peso. Crie um objeto que representa uma pessoa com as propriedades: nome, cpf, pets (um array de pets). Em seguida, defina um método em pessoa que cuida de todos os pets no array.

const pets = [
        {
            nome: 'atila', idade: 2, peso: 5,
        },
        {
            nome: 'neguinha', idade: 2, peso: 5,
        },
        {
            nome: 'sorriso', idade: 2, peso: 5,
        },
    ]
const person = {
    nome: 'fulano',
    cpf: '123.456.789-85',
    pets: pets,
    cuidarDosPets(){
        this.pets.forEach((pet) => console.log(`cuidando do pet ${pet.nome}`));
    }
}

person.cuidarDosPets();
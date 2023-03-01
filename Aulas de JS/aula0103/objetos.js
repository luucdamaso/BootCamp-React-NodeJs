// Aula 01.03
// Tópicos: Objetos

// Objetos = servem para estruturar dados
// - propriedades (características)
// - métodos (ações)

const pet = {
    nome: "Fred", // propriedade-valor
    idade: 2, // propriedade-valor
    peso: 3.5,
    especie: "gato",
  }; // {} indica que estou declarando um objeto
  
  let pet2 = {
    nome: "Dorothy",
    idade: 5,
    peso: 4.5,
    especie: "gato",
  };
  
let meuPet = {
    nome: "Atila",
    idade: 11,
    peso: 6,
    especie: "cachorro",
    comidaFavorita: "petisco Sache"
}; // {} Indica que estou declarando um objeto

meuPet.apelido = "Bagaba";
console.log(meuPet);

  // Tip: crie um objeto "pet3" com seu pet e coloque uma
  // nova propriedade: comida favorita
  
  let pet3 = {
    nome: "Max",
    idade: 3,
    peso: 5.5,
    especie: "gato",
    comidaFavorita: "peixe",
  };
  
  // Acesso de propriedades
//   console.log(pet.nome);
//   console.log(pet.idade);
//   console.log(pet.peso);
//   console.log(pet.especie);
//   console.log(pet.fullstack); // essa propriedade não existe
//   console.log(pet["nome"]); // equivale a pet.nome
  
  // Alterar valores das propriedades
  pet.nome = "Neo"; // alteração do nome do pet
  // pet.idade = 6;
  // pet.peso = 100;
  pet.idade++;
  pet.peso += 3;
  //console.log(pet);
  // pet = {}; // com const podemos alterar as propriedades
  pet["nome"] = "Batata"; // peso.nome = "Batata"
  //console.log(pet);


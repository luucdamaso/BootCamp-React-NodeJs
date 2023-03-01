// Métodos = ação de um objeto

let pet = {
    // Atributos
    nome: "Fred",
    idade: 5,
    peso: 3.5,
    // Métodos = funções
    dormir() {
      console.log("Estou dormindo. zzzzzzzzzzzzzZZZ");
    },
    comer(comida) {
      console.log(`Estou comendo ${comida}`);
    },
  };
  
  // . lista as propriedades e métodos de um objeto
//   pet.dormir(); // Invocação da função/método
//   pet.comer("Peixe");
//   pet.comer("Batata");
  
  // Tip: crie no objeto pet o método brincar e coloque uma mensagem
  // do console.log

let meuPet = {
    nome: "Atila",
    idade: 11,
    apelido: "Bagaba",
    brincar(){
        console.log(`${this.apelido} ama brincar com osso`)
    }
}
// meuPet.brincar();

let pessoa = {
    nome: "Lucas",
    idade: 25,
    nacionalidade: "Brasileiro",
    dizerOi(){
        console.log(`Olá, meu nome é ${this.nome}. tenho ${this.idade} anos e sou ${this.nacionalidade}`)
    },
    envelhecer() {
        this.idade++;
    },
    cuidarPet(pet){
        console.log(`Estou cuidando do ${pet.nome}`)
        pet.comer("batata")
        pet.peso += 0.1;
    },
}

// pessoa.dizerOi();
// pessoa.envelhecer();
// pessoa.envelhecer();
// pessoa.envelhecer();
// pessoa.envelhecer();
// pessoa.dizerOi();

pessoa.cuidarPet(pet);
console.log(pet.peso);
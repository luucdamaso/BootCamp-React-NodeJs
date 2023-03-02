// Aula 02.03
// Tópicos: objetos aninhados e arrays de objetos

// Objetos aninhados = objeto dentro de outro

let pessoa = {
    nome: "José Almir",
    cpf: "999.999.999-99",
    contato: {
      email: "jose.almir@soulcode.com",
      telefone: "(99) 9-9999-9999",
    },
    endereco: {
      // agrupar propriedades
      cidade: "Ubajara",
      estado: "CE",
      cep: "62350-000",
      rua: "Rua X",
      numero: 271,
    },
    objetivosProfissionais: ["Home Office", "CLT", "Desenvolvedor Senior"],
    formacao: [
      // array de objetos
      { nome: "Ensino Médio", periodo: "2006-2008" }, // 0
      { nome: "Técnico em Informática", periodo: "2008-2010" }, // 1
      { nome: "Bacharelado em Batata", periodo: "2010-2014" }, // 2
    ],
  };
  
  // console.log(pessoa.endereco.estado);
  // console.log(pessoa.endereco.numero);
  // console.log(pessoa.contato.telefone);
  // console.log(pessoa.objetivosProfissionais);
  // console.log(pessoa.objetivosProfissionais[0]);
  // console.log(pessoa.formacao[0].periodo);
  
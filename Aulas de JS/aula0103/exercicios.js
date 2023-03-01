// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo


let contaBancaria = {
    codigo: "000-1",
    saldo: 25,
    cpfTitular: "000.000.000-00",
    nomeTitular: "Lucas",
    saque(valor) {
        console.log(this.saldo -= valor);
    },
    deposito(valor) {
       console.log(this.saldo += valor);
    },
};

contaBancaria.saque(10);
contaBancaria.deposito(500);

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto1 = {
    nome: "Fone",
    descrição: "Gamer",
    quantidade: 10,
    preçoOriginal: 250,
    desconto: 25,
    calcularPreçoDesconto() {
        let preçoAtual = this.preçoOriginal - this.desconto;
        return preçoAtual
    },
    apresentação() {
        console.log(`${this.nome} ${this.descrição}, R$${this.preçoOriginal}`)
    },
    comprar(total) {
        let saldoEstoque = this.quantidade -= total;
        console.log(`A quantidade restante no estoque é de ${saldoEstoque} itens`)
    }
}

// console.log(produto1.calcularPreçoDesconto());
// produto1.apresentação();
// produto1.comprar(3);

// let produto = {
//     // Atributos/propriedades
//     nome: "Relojim",
//     descricao: "Indica a hora os minutos e os segundos",
//     quantidade: 100,
//     precoOriginal: 500,
//     desconto: 30,
//     // Métodos
//     calcularPrecoDesconto() {
//       let precoCompra = this.precoOriginal - this.desconto;
//       return precoCompra;
//     },
//     apresentacao() {
//       console.log(this);
//     },
//     comprar(total) {
//       this.quantidade -= total;
//     },
//   };
  
//   produto.apresentacao();
//   produto.comprar(20);
//   produto.comprar(20);
//   console.log(produto.quantidade);
//   console.log(produto.calcularPrecoDesconto());
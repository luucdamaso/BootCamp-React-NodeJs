let prod = "fone";
let val = 719;
let des = 0.1;
let desVal = true;

let precofinal;
if (desVal == true) {
  precofinal = val - (val * des);
} else {
  precofinal = val;
}

console.log(precofinal)

if (precofinal > 1000) {
  precofinal = precofinal - 50;
}
console.log(precofinal)
let demandas = [10, 2, 1, 30, 5];

let precosClientes = [];
for (let i = 0; i < demandas.length; i++) {
  let precoClientes = demandas[i] * precofinal;
  precosClientes.push(precoClientes);
  console.log(`O cliente ${i + 1} comprou ${demandas[i]} por isso deverá pagar: R$${precoClientes}`
  );
}

let lucroTotal = 0;
for (let i = 0; i < precosClientes.length; i++) {
lucroTotal += precosClientes[i]
}
console.log(`Nosso lucro total é de: R$${lucroTotal}`);
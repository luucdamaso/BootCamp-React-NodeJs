//1. Escreva uma função que receba uma string e retorne o número de ca-racteres contidos nela.

let anime = "One Piece";
console.log(anime.length-1);

//2. Escreva uma função que receba uma string e retorne a mesma string em letras maiúsculas.
console.log("\n")
console.log(anime.toUpperCase());

//3. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
console.log("\n");
console.log(anime.toLowerCase())

//4. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

let serie = "Peaky Blinders"

function iguais(s1, s2) {
    if (s1 === s2){
    return true
    } else {
        return false
    }
}
console.log(iguais("Peaky Blinders", "Peaky Blinders"));
console.log("\n");
//5. Escreva uma função que receba uma string e um número e retorne os últimos caracteres da string de acordo com o número informado.

function ultimoCaracter(palavra, numero) {
    return palavra.slice(-numero)
}
console.log(ultimoCaracter("programador", 5))
console.log("\n");
//6. Escreva uma função que recebe uma frase e uma palavra. Retorne a frase com as ocorrências da palavra censuradas/trocadas por ***. Exemplo: censura("Eu jogo lol e valorant, mas lol é melhor", "lol") -> "Eu jogo *** e valorant, mas *** é melhor". Dica: use a função replaceAll.

function censura (frase, palavra) {
    return frase.replaceAll(palavra, "***")
}

console.log(censura("Eu jogo lol e valorant, mas lol é melhor", "lol"));
console.log("\n");
//7. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function contarCaractere(string, caractere) {
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === caractere) {
        contador++;
      }
    }
    return contador;
  }

  console.log(contarCaractere("batata", "a"));
  console.log("\n");
//let exemplo = "batata";
//console.log(exemplo.split("").reverse().join(""))

  function invertida(palavra) {
    return palavra.split("").reverse().join("")
  }

  console.log(invertida("Programador"))
  console.log("\n");

function maiuscula(palavra) {
    return palavra.toUpperCase()
}

console.log(maiuscula("javascript"));
console.log("\n");

function minuscula(palavra) {
    return palavra.toLowerCase()
}

console.log(minuscula("JAVASCRIPT"));
console.log("\n")

// let exemplo = "Eu gosto de programar"
// console.log(exemplo.split(""))

function contadorFrase (frase) {
    fraseCortada = frase.split(" ");
    contador = 0;
    for(let i = 0; i < fraseCortada.length; i++) {
        if(fraseCortada[i] !== "")
        contador++;
    }
    return contador;
}

console.log(contadorFrase("Eu amo programar em Javascript"))

function fraseInvertida(frase) {
    return frase.split(" ").reverse().join(" ");
}

console.log(fraseInvertida("Eu amo programar em JavaScript"));
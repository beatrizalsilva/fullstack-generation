const input = require("readline-sync")

let soma = 0, quantidade = 0
let numero

do {
    numero = input.questionInt("Digite um numero: ")
    if(numero > 0 && numero % 3 == 0) {
        soma += numero
        quantidade ++
    }
} while (numero !== 0)

console.log(`Media dos numeros multiplos de 3: ${soma / quantidade.toFixed(2)}`)
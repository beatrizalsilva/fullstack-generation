const input = require("readline-sync")

let soma = 0
let numero

console.log(`Programa de soma dos positivo! Lembre-se: para sair digite 0!`)

do {
    numero = input.questionInt("Digite um numero: ")
    if(numero > 0) {
        soma += numero
    }
} while (numero !== 0)

console.log(`A soma dos positivos e: ${soma}`)
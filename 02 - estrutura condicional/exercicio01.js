const input = require("readline-sync")

let a = input.questionInt("Digite o primeiro valor: ")
let b = input.questionInt("Digite o segundo valor: ")
let c = input.questionInt("Digite o terceiro valor: ")
const resultado = a + b

if(resultado > c) {
    console.log("A soma de A + B é maior que C")
} else if (resultado < c) {
    console.log("A soma de A + B é menor que C.")
} else {
    console.log("A soma de A + B é igual a C.")
}
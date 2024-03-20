const input = require("readline-sync")

let n1 = input.questionFloat("Digite o 1º valor: ")
let n2 = input.questionFloat("Digite o 2º valor: ")
let n3 = input.questionFloat("Digite o 3º valor: ")
let n4 = input.questionFloat("Digite o 4º valor: ")

const diferenca = (n1 * n2) - (n3 * n4)
console.log("A diferença entre os valores é: " + diferenca)
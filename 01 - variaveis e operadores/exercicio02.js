const input = require("readline-sync")

let nota1 = input.questionFloat("Digite 1º nota: ") 
let nota2 = input.questionFloat("Digite 2º nota: ") 
let nota3 = input.questionFloat("Digite 3º nota: ") 
let nota4 = input.questionFloat("Digite 4º nota: ") 

const media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(media.toFixed(1))
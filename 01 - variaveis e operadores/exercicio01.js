const input = require("readline-sync")

let salario = input.questionFloat("Digite o salário: ") 
let abono = input.questionFloat("Digite o abono: ") 
let novoSalario = salario + abono

console.log("O novo salário é de R$ " + novoSalario.toFixed(2))
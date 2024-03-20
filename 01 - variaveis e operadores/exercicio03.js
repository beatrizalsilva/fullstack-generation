const input = require("readline-sync")

let salarioBruto = input.questionFloat("Digite o salário bruto: ") 
let adicionalNoturno = input.questionFloat("Digite o adicional noturno: ") 
let horasExtras = input.questionFloat("Digite as horas extras: ")
let desconto = input.questionFloat("Digite o desconto: ")

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto
console.log(salarioLiquido.toFixed(2))
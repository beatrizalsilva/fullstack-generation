import input = require("readline-sync")

let num1: number = input.questionInt("Digite o primeiro numero: ")
let num2: number = input.questionInt("Digite o segundo numero: ")

let somar = function(num1: number, num2: number): number {
    return num1 + num2
}

console.log(`O resultado sa soma é ${somar(num1, num2)}`)
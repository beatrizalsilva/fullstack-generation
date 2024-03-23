const input = require("readline-sync")

let num1 = input.questionInt("Digite o primeiro numero: ")
let num2 = input.questionInt("Digite o segundo numero: ")

if(num1 > num2) {
    console.log(`Intervalo inválido!`)
}

for(let multiplos = num1; multiplos <= num2; multiplos++) {
    if(multiplos % 3 == 0 && multiplos % 5 == 0) {
        console.log(`${multiplos} é multiplo de 3 e 5`)
    }
}
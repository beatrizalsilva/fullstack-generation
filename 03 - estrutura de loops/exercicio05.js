const input = require("readline-sync")

const listaNumerica = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let continuar = "S"

while(continuar === "S") {
    let numDigitado = input.questionInt("Digite um numero: ")
    let posicao = listaNumerica.indexOf(numDigitado)
    
    if(posicao !== -1) {
        console.log(`O numero ${numDigitado} esta localizado na posicao: ${posicao}`)
    } else {
        console.log(`Não foi encontrado!`)
    }
    continuar = input.keyIn(`\nDeseja continuar (S/N)?: `).toUpperCase()
}
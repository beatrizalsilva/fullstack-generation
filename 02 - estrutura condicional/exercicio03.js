const input = require("readline-sync")

console.log("Cardapio: \n1 -- Cachorro quente - RS10.00 \n2 -- X-Salada - RS15.00 \n3 -- X-Bacon - RS18.00 \n4 -- Bauru - RS12.00 \n5 -- Refrigerante - RS8.00 \n6 -- Suco de laranja - R13.00\n")

let codProduto = input.questionInt("Digite o codigo do produto desejado: ")
let quantidade = input.questionInt("Digite a quantidade que deseja comprar: ")

switch(codProduto) {
    case 1:
        console.log("Cachorro Quente")
        console.log(`Valor total da compra: ${(quantidade * 10.00).toFixed(2)}`)
        break
    case 2:
        console.log("X-Salada")
        console.log(`Valor total da compra: ${(quantidade * 15.00).toFixed(2)}`)
        break
    case 3:
        console.log("X-Bacon")
        console.log(`Valor total da compra: ${(quantidade * 18.00).toFixed(2)}`)
        break
    case 4:
        console.log("Bauru")
        console.log(`Valor total da compra: ${(quantidade * 12.00).toFixed(2)}`)
        break
    case 5:
        console.log("Refrigerante")
        console.log(`Valor total da compra: ${(quantidade * 8.00).toFixed(2)}`)
        break
    case 6:
        console.log("Suco de laranja")
        console.log(`Valor total da compra: ${(quantidade * 13.00).toFixed(2)}`)
        break
    default:
        console.log("Digite um codigo valido, porfavor!")
}
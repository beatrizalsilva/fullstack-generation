import { Stack } from "./Stack"
import input = require("readline-sync")

let opcao: number
let livro: string
const pilha = new Stack<string>()

do {
    console.log("\n*********************************")
    console.log("                                   ")
    console.log("   1 - Adicionar livro             ")
    console.log("   2 - Listar todos os livros      ")
    console.log("   3 - Remover livro da pilha      ")
    console.log("   0 - Sair                        ")
    console.log("                                   ")
    console.log("***********************************")

    console.log("\nEntre com a opção desejada: ")
    opcao = input.questionInt("")

    switch(opcao) {
        case 1:
            console.log("\nAdicionar livro")
            console.log("Digite o nome do livro: ")
            livro = input.question("")
            pilha.push(livro)
            console.log("\nLivro adicionado!")
            break
        case 2:
            console.log("\nLista de livros na pilha:")
            pilha.printStack()
            break
        case 3: 
            if(pilha.isEmpty()) {
                console.log("A pilha de livros está vazia.")
            } else {
                pilha.pop()
                pilha.printStack()
                console.log("\nUm livro retirado!")
            }
            break
        case 0:
            console.log("\nPrograma finalizado!")
            break
        default:
            console.log("\nOpção inválida, digite novamente.")
            break
    }
} while(opcao !== 0)
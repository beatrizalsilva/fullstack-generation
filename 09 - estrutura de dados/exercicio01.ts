import { Queue } from "./Queue"
import input = require("readline-sync")

let opcao: number
let nome: string
const fila = new Queue<string>()

do {
    console.log("\n*********************************")
    console.log("                                   ")
    console.log("   1 - Adicionar cliente           ")
    console.log("   2 - Listar todos os clientes    ")
    console.log("   3 - Chamar cliente              ")
    console.log("   0 - Sair                        ")
    console.log("                                   ")
    console.log("***********************************")

    console.log("\nEntre com a opção desejada: ")
    opcao = input.questionInt("")

    switch(opcao) {
        case 1:
            console.log("\nFila: ")
            console.log("Digite o nome do cliente: ")
            nome = input.question("")
            fila.enqueue(nome)
            console.log(`\nCliente ${nome} adicionado(a) com sucesso.`)
            break
        case 2:
            console.log("\nLista de clientes:")
            fila.printQueue()
            break
        case 3: 
            if(fila.isEmpty()) {
                console.log("A fila está vazia.")
            } else {
                fila.dequeue()
                console.log("\nFila: ")
                fila.printQueue()
                console.log("\nO cliente foi chamdo!")
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
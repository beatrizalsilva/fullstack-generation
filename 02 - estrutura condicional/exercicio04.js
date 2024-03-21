const input = require("readline-sync")

console.log("Codigo do Cargo: \n1 -- Gerente \n2 -- Vendedor \n3 -- Supervisor \n4 -- Motorista \n5 -- Estoquista \n6 -- STécnico de TI\n")

let nome = input.question("Digite o nome do colaborador: ")
let codCargo = input.questionInt("Digite o codigo do cargo: ")
let salario = input.questionFloat("Digite o salario: ")

switch(codCargo) {
    case 1:
        console.log(`Nome do colaborador: ${nome}`)
        console.log(`Cargo: Gerente`)
        console.log(`Salário: ${(salario + (0.1 * salario)).toFixed(2)}`)
        break
    case 2:
        console.log(`Nome do colaborador: ${nome}`)
        console.log(`Cargo: Vendedor`)
        console.log(`Salário: ${(salario + (0.07 * salario)).toFixed(2)}`)
        break
    case 3:
        console.log(`Nome do colaborador: ${nome}`)
        console.log(`Cargo: Supervisor`)
        console.log(`Salário: ${(salario + (0.09 * salario)).toFixed(2)}`)
        break
    case 4:
        console.log(`Nome do colaborador: ${nome}`)
        console.log(`Cargo: Motorista`)
        console.log(`Salário: ${(salario + (0.06 * salario)).toFixed(2)}`)
        break
    case 5:
        console.log(`Nome do colaborador: ${nome}`)
        console.log(`Cargo: Estoquista`)
        console.log(`Salário: ${(salario + (0.05 * salario)).toFixed(2)}`)
        break
    case 6:
        console.log(`Nome do colaborador: ${nome}`)
        console.log(`Cargo: Técnico de TI`)
        console.log(`Salário: ${(salario + (0.08 * salario)).toFixed(2)}`)
        break
    default:
        console.log(`Digite um codigo valido, porfavor!`)
}
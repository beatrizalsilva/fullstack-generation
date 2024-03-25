// um argumento com um tipo de dado
let resultado: number = soma(2, 2)

function soma(numero1: number, numero2: number): number {
    return numero1 + numero2
}
console.log("O Resultado da soma é: " + resultado);

// um argumento com dois tipos de dados
function tipoProduto(tamanho: number | string){
    if (typeof(tamanho) === "number" )
        console.log("\nO Tamanho é um número")
    else
        console.log("O Tamanho é uma string")
}
tipoProduto(40)
tipoProduto("M")

// dois tipos de retorno e argumento
let resposta: any;
resposta = divisao(6, 0)

if (resposta != null) {
    console.log("\nO Resultado da divisão é: " + resposta)
} else {
    console.log("\nNão existe divisão por zero")
    }

function divisao(numero1: number, numero2: number): number|null {
    let divisao = numero1 / numero2;
    return (divisao != Infinity ? divisao : null) // operador ternário
}

// função sem retorno - void
function mensagem(): void {
    console.log("\nMétodo sem retorno (void)!")
}
mensagem()
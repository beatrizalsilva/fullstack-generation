let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("Exibir os itens\n")
numeros.forEach(numero => console.log(numero))

console.log("\nExibir os itens somados com eles mesmos\n")
numeros.forEach(numero => console.log(numero + numero))

console.log("\nExibir os itens pares da lista\n")
numeros.forEach(numero =>{
    if (numero % 2 == 0)
        console.log(numero)
})
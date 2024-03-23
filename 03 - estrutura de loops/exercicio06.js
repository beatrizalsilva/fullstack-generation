const input = require("readline-sync")

let inteiros = new Array(3);
for (let indiceLinha = 0; indiceLinha < inteiros.length; indiceLinha++){
    inteiros[indiceLinha] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < inteiros.length; indiceLinha++){
    for (let indiceColuna = 0; indiceColuna < inteiros.length; indiceColuna++){
      inteiros[indiceLinha][indiceColuna] = input.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
    }
}
console.table(inteiros)

let elementoPrincipal = [inteiros[0][0], inteiros[1][1], inteiros[2][2]]
let elementoSegundario = [inteiros[0][2], inteiros[1][1], inteiros[2][0]]

console.log(`Elementos da diagonal principal: ${elementoPrincipal} \nElementos da diagonal secundária: ${elementoSegundario} \nSoma da diagonal principal: ${[inteiros[0][0] + inteiros[1][1] + inteiros[2][2]]} \nSoma da diagonal segundária: ${[inteiros[0][2] + inteiros[1][1] + inteiros[2][0]]}`)
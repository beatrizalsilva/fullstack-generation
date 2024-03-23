const input = require("readline-sync")
console.log(`Identidade de genero:\n1 - Mulher cis \n2 - Homem cis \n3 - Nao binario \n4 - Mulher tran \n5 - Homem trans \n6 - Outros\n
Pessoa desenvolvedora:\n1 - Backend \n2- Frontend \n3 - Mobile \n4 - FullStack\n`)

let continuar = "S"
let totalBack = 0, totalMulheresFront = 0, totalHomensMobile = 0, naoBinarioFull = 0, totalPessoas = 0, somaIdade = 0, media = 0.0

while(continuar === "S") {
    let idade = input.questionInt("Digite uma idade: ")
    let identidade = input.questionInt("Digite o codigo da identidade de genero: ")
    let desenvolvedor = input.questionInt("Digite o codigo do desenvolvedor: ")

    if(desenvolvedor === 1) {
        totalBack++
    }
    if (desenvolvedor === 2 && (identidade === 1 || identidade === 4)) {
        totalMulheresFront++
    }
    if (desenvolvedor === 3 && (identidade === 2 || identidade === 5) && idade >= 40) {
        totalHomensMobile++
    }
    if (desenvolvedor === 4 && identidade === 3 && idade <= 30) {
        naoBinarioFull++
    }

    somaIdade += idade
    totalPessoas += 1
    media = somaIdade / totalPessoas

    continuar = input.keyIn(`\nDeseja continuar (S/N)?: `).toUpperCase()
}

console.log(`\nTotal de desenvolvedores Backend: ${totalBack} \nTotal de mulheres (cis e trans) desenvolvedoras Frontend: ${totalMulheresFront} \nTotal de homens (cis e trans) desenvolvedores Mobile maiores de 40 anos: ${totalHomensMobile} \nTotal de pessoas nao binarias desenvolvedoras FullStack menores de 30 anos: ${naoBinarioFull} \nTotal de pessoas que responderam a pesquisa: ${totalPessoas} \nMedia da idade dos participantes: ${media.toFixed(2)}`)
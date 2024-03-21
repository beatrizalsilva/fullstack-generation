const input = require("readline-sync")

let nome = input.question("Digite o nome do doador: ")
let idade = input.questionInt("Digite a idade do doador: ")
let primeiraDoacao = input.keyInYNStrict("Primeira doacao de sangue?: ")

if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && idade <= 69 && primeiraDoacao) {
        console.log(nome + " nao esta apto(a) para doar sangue!");
    } else {
        console.log(nome + " esta apto(a) para doar sangue!");
    }
} else {
    console.log(nome + " nao está apto(a) para doar sangue!");
}
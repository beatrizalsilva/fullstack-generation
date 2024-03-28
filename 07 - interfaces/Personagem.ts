import { Pessoa } from "./Pessoa"
import { Jedi } from "./Jedi"
import { Sith } from "./Sith"

export class Personagem extends Pessoa implements Jedi, Sith {
    constructor(nome: string, sabre: string) {
        super(nome, sabre)
    }

    forca(): void {
        console.log(`Que a força esteja com você!`)
    }

    odio(): void {
        console.log(`Através do poder, ganho a vitória!`)
    }

    public informacao(): void {
        console.log(`\nNome: ${this.nome} \nCor do sabre: ${this.sabre}`)
    }
}
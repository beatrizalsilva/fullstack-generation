import { Personagem } from "./Personagem"

export function main() {
    const Jedi: Personagem = new Personagem("Obi-Wan", "Azul")
    Jedi.informacao()
    Jedi.forca()

    const Sith: Personagem = new Personagem("Darth Maul", "Vermelho")
    Sith.informacao()
    Sith.odio()
}

main()
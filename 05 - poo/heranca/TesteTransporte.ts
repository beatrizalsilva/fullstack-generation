import { Transporte } from "./Transporte";
import { Terrestre } from "./Terrestre";
import { Automovel } from "./Automovel";

export function main() {
    const aut1: Transporte = new Transporte(4)
    aut1.visualizar()

    const aut2: Terrestre = new Terrestre(2, 2, 100)
    aut2.visualizar()

    const aut3: Automovel = new Automovel(5, 4, 90, "Prata", 4, "ASDF-123", 5)
    aut3.visualizar() //herdou os objetos das demais classes
}

main()
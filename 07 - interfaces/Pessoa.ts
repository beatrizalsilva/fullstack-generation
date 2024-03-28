export abstract class Pessoa {
    private _nome: string
    private _sabre: string

    constructor(nome: string, sabre: string){
        this._nome = nome
        this._sabre = sabre
    }

    public get nome() {
        return this._nome
    } public set nome(nome: string) {
        this._nome = nome
    }

    public get sabre() {
        return this._sabre
    } public set sabre(sabre: string) {
        this._sabre = sabre
    }

    abstract informacao(): void
}
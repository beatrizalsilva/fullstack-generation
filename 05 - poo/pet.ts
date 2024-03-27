class pet {
    private _especie: string
    private _nome:string
    private _idade: number
    private _peso: number
    private _vacina: boolean

    constructor(especie: string, nome: string, idade: number, peso: number, vacina: boolean) {
        this._especie = especie
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._vacina = vacina
    }

    public get especie(): string {
        return this._especie
    } public set especie(value: string) {
        this._especie = value
    }

    public get nome(): string {
        return this._nome
    } public set nome(value: string) {
        this._nome = value
    }

    public get idade(): number {
        return this._idade
    } public set idade(value: number) {
        this._idade
    }

    public get peso(): number {
        return this._peso
    } public set peso(value: number) {
        this._peso
    }

    public get vacina(): boolean {
        return this._vacina
    } public set vacina(value: boolean) {
        this._vacina
    }

    public visualizar(): void {
        console.log(`\nDados do seu Pet: \nEspecie: ${this._especie} \nNome: ${this._nome} \nIdade: ${this._idade} \nPeso: ${this._peso} \nVacinado: ${this._vacina}`)
        // console.log("   Numero da Conta: " + this._numero);
    }
}
 const myPet = new pet("Canina", "Pingo", 6, 11, true)
 myPet.visualizar()
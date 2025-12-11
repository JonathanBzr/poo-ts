export class Produto {
    private id: number
    private codigo: number 
    private valor: number 
    private descricao: string 

    constructor(cod: number,id: number, valor: number, descricao: string) {
        this.descricao = descricao
        this.id = id
        this.codigo = cod
        this.valor = valor
    }

    public set Id(id: number) {
        this.id = id
    }

    public get Id():number {
        return this.id
    }

    public set Codigo(cod: number) {
        this.codigo = cod
    }

    public get Codigo(): number {
        return this.codigo
    }

    public set Valor(valor: number) {
        this.valor = valor
    }

    public get Valor(): number {
        return this.valor
    }

    public set Descricao(desc: string) {
        this.descricao = desc
    }

    public get Descricao(): string {
        return this.descricao
    }
}


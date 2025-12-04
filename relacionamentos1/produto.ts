export class Produto {
    private codigo: number 
    private valor: number 
    private descricao: string 

    constructor(cod: number, valor: number, descricao: string) {
        this.descricao = descricao
        this.codigo = cod
        this.valor = valor
    }

    setCodigo(cod: number) {
        this.codigo = cod
    }

    getCodigo(): number {
        return this.codigo
    }

    setValor(valor: number) {
        this.valor = valor
    }

    getValor(): number {
        return this.valor
    }

    setDescricao(desc: string) {
        this.descricao = desc
    }

    public getDescricao(): string {
        return this.descricao
    }
}


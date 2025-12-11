import { Carrinho } from "./carrinho"

export class Pedido {
    private carrinho: Carrinho
    private valorTotal: number 

    constructor(carrinho: Carrinho, valorTotal: number) {
        this.carrinho = carrinho
        this.valorTotal = valorTotal
    }

    public set Carrinho(value: Carrinho) {
        this.carrinho = value
    }

    public get Carrinho(): Carrinho {
        return this.carrinho
    }

    public get ValorTotal() {
        return this.valorTotal
    }

    public getVT() {
        this.valorTotal = this.carrinho.calcValorTotal() ?? 0
    }
}
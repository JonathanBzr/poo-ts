import { Produto } from "./produto"

export class ItemPedido {
    constructor(
        private _id: number,
        private _produto: Produto,
        private _quantidade: number
    ) {}

    public set Id(id: number) {
        this._id = id
    }

    public get Id(): number {
        return this._id
    }

   public set Produto(value: Produto) {
        this._produto = value
    }

    public get Produto() {
        return this._produto
    }

    public set Quantidade(qtd: number) {
        this._quantidade = qtd
    }

    public get Quantidade() {
        return this._quantidade
    }

    public aumentarQuantidadeItem(): number {
        return this._quantidade +=1
    }

    public diminuirQuantidadeItem(): number {
        if(this._quantidade ==1) return this._quantidade
        return this._quantidade -= 1
    }

}
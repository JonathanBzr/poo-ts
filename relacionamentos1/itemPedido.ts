import { Produto } from "./produto"

export class ItemPedido {
    private produto: Produto 
    private quantidade: number 

    constructor(produto: Produto, qtd: number) {
        //this.id = id
        this.produto = produto
        this.quantidade = qtd
    }

    getProduto() {
        return this.produto
    }

    setQuantidade(qtd: number) {
        this.quantidade = qtd
    }

    getQuantidade() {
        return this.quantidade
    }

}
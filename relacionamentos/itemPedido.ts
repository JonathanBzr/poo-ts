import { Produto } from "./produto"

export class ItemPedido {
    private produto: Produto 
    private quantidade: number 

    constructor(produto: Produto, qtd: number) {
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
    
    //incorporar para na saída ter o nome do produto
    getNomeProduto(): string {
        return this.produto.getDescricao()
    }
}
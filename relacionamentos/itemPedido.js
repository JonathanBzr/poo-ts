"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
class ItemPedido {
    constructor(produto, qtd) {
        this.produto = produto;
        this.quantidade = qtd;
    }
    getProduto() {
        return this.produto;
    }
    setQuantidade(qtd) {
        this.quantidade = qtd;
    }
    getQuantidade() {
        return this.quantidade;
    }
    //incorporar para na saída ter o nome do produto
    getNomeProduto() {
        return this.produto.getDescricao();
    }
}
exports.ItemPedido = ItemPedido;

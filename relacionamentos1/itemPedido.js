"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
class ItemPedido {
    constructor(produto, qtd) {
        //this.id = id
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
}
exports.ItemPedido = ItemPedido;

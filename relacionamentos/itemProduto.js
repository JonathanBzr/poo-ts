"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
class ItemPedido {
    constructor(pdt, qtd) {
        this.produto = pdt;
        this.quantidade = qtd;
    }
    setProduto(pdt) {
        this.produto = pdt;
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

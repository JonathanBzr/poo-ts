"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }
    adicionarItem(it) {
        this.itens.push(it);
        return true;
    }
    calcValorTotal() {
        this.valorTotal = 0;
        for (let i = 0; i < this.itens.length; i++) {
            const item = this.itens[i];
            this.valorTotal += item.getProduto().getValor() * item.getQuantidade();
        }
        return this.valorTotal;
    }
}
exports.Pedido = Pedido;

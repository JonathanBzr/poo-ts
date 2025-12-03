"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor() {
        this.itens = [];
    }
    adicionarItem(it) {
        this.itens.push(it);
        return true;
    }
    calcValorTotal() {
        let total = 0;
        for (let i = 0; i < this.itens.length; i++) {
            const item = this.itens[i];
            total += item.getProduto().getValor() * item.getQuantidade();
        }
        this.valorTotal = total;
        return total;
    }
}
exports.Pedido = Pedido;

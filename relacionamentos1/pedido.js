"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor() {
        this.itens = [];
        this.valorTotal = 0;
        this.desconto = 0;
    }
    adicionarItem(it) {
        this.itens.push(it);
        return true;
    }
    setDesconto(porcentagem) {
        let desc = porcentagem / 100;
        this.desconto = this.calcValorTotal() * desc;
    }
    getDesconto() {
        return this.desconto;
    }
    calcValorTotal() {
        this.valorTotal = 0;
        for (let i = 0; i < this.itens.length; i++) {
            const item = this.itens[i];
            this.valorTotal += item.getProduto().getValor() * item.getQuantidade();
        }
        return this.valorTotal;
    }
    valorFinal() {
        let vf = this.calcValorTotal() - this.desconto;
        return vf;
    }
}
exports.Pedido = Pedido;

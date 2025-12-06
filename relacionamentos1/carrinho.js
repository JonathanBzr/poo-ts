"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carrinho {
    constructor() {
        this.itens = [];
    }
    calcDesconto(desc) {
        desc = 0;
        let desconto = this.pedido.calcValorTotal() * desc / 100;
    }
}

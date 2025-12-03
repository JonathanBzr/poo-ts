"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(cod, valor, descricao) {
        this.descricao = descricao;
        this.codigo = cod;
        this.valor = valor;
    }
    setCodigo(cod) {
        this.codigo = cod;
    }
    getCodigo() {
        return this.codigo;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
    setDescricao(desc) {
        this.descricao = desc;
    }
    getDescricao() {
        return this.descricao;
    }
}
exports.Produto = Produto;

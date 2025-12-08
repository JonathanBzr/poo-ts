import { ItemPedido } from "./itemPedido"

export class Pedido {
    private itens: ItemPedido[] = []
    private valorTotal: number = 0
    private desconto: number = 0

    adicionarItem(it:ItemPedido): Boolean {
        this.itens.push(it)
        return true
    }

    setDesconto(porcentagem: number) {
        let desc = porcentagem/100

        this.desconto = this.calcValorTotal() * desc
    }

    getDesconto(): number {
        return this.desconto
    }

    calcValorTotal(): number {
        this.valorTotal = 0;

        for(let i = 0; i < this.itens.length; i++) {
            const item = this.itens[i];
            this.valorTotal += item.getProduto().getValor() *item.getQuantidade()}

        return this.valorTotal
    }

    valorFinal() {
        let vf = this.calcValorTotal() - this.desconto
       
        return vf
    }
}
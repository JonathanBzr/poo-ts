import { ItemPedido } from "./itemPedido"

export class Pedido {
    private itens: ItemPedido[] = []
    private valorTotal: number | undefined

    adicionarItem(it:ItemPedido): Boolean {
        this.itens.push(it)
        return true
    }

    calcValorTotal(): number {
        let total = 0;

        for(let i = 0; i < this.itens.length; i++) {
            const item = this.itens[i];
            total += item.getProduto().getValor() *item.getQuantidade()}

        this.valorTotal = total;
        return total
    }
}
/*
1. Adicionar item ao carrinho
2. Aumentar e diminuir quantidade de itens
3. Remover item
4. Aplicar cupom
5. Obter total da compra
*/
import { ItemPedido } from "./itemPedido"
import { Pedido } from "./pedido"

class Carrinho {
    private itens: ItemPedido[] = []


    calcDesconto(desc: number) {
        desc = 0;

        let desconto = this.pedido.calcValorTotal() * desc/100
    }

    

}
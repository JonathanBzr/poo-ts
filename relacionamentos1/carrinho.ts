import { ItemPedido } from "./itemPedido"

export class Carrinho {
    constructor(
        private _itens: ItemPedido[] = []
    )  {}

    get itens(): ItemPedido[] {
        return this._itens
    }

    adicionarItem(novoItem: ItemPedido): boolean {
        const existe = this._itens.some(item => item.id ===novoItem.id)
        if (!existe) {
            this._itens.push(novoItem)
            return true
        }else return false
    }
    
    aumentarQuantidade(it: ItemPedido) {
        const item = this.buscarItem(it)
        if (item) {
            item.aumentarQuantidadeItem()
        }
    }

    diminuirQuantidade(it: ItemPedido) {
        const item = this.buscarItem(it)
        if (item) {
            item.diminuirQuantidadeItem()
        }
    }
    
    buscarItem(itemBuscado: ItemPedido): ItemPedido | undefined {
        return this._itens.find(it => it.id === itemBuscado.id)
    }

    removerItem(id: number) {
        this._itens = this._itens.filter(item => item.id !==id)
    }

    calcValorTotal(): number | undefined {
        let total: number = 0
        for(let i of this._itens) {
            if(i.quantidade < 1) return undefined
            total += i.produto.valor * i._quantidade
        }
        return parseFloat(total.toFixed(2))
    }

}
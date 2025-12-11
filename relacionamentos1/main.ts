import { ItemPedido } from './itemPedido'
import { Pedido } from './pedido'
import { Produto } from './produto'

let p1 =new Produto(65156, 99.90, "Headset")
let p2 =new Produto(73891, 38.89, "Mouse c/ fio") 
let p3 =new Produto(41321, 9.90, "Limpa telas")

const item1 = new ItemPedido(p1, 1)
const item2 = new ItemPedido(p2, 15)
const item3 = new ItemPedido(p3, 6)

const pedido = new Pedido()

pedido.adicionarItem(item1)
pedido.adicionarItem(item2)
pedido.adicionarItem(item3)

pedido.setDesconto(5)
pedido.calcValorTotal()
console.dir(pedido, {depth: null })
console.log(`O valor final com desconto aplicado é: R$ ${pedido.valorFinal().toFixed(2)}`)


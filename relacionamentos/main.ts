import { ItemPedido } from './itemPedido'
import { Pedido } from './pedido'
import { Produto } from './produto'

let p1 =new Produto(65156, 99.90, "Headset")
let p2 =new Produto(73891, 38.89, "Mouse c/ fio") 
let p3 =new Produto(41321, 9.90, "Limpa telas")

const pedido = new Pedido()

pedido.adicionarItem(new ItemPedido(p1, 10))
pedido.adicionarItem(new ItemPedido(p2, 15))
pedido.adicionarItem(new ItemPedido(p3, 6))
p1.setValor(1.99)

pedido.calcValorTotal()
console.log(pedido)




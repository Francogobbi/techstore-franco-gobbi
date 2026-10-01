import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const products = [
  {
    id: 1,
    name: 'Monitor',
    description: 'Monitor para computadora.',
    price: 250000,
    stock: 10,
  },
  {
    id: 2,
    name: 'Mouse',
    description: 'Mouse óptico para computadora.',
    price: 50000,
    stock: 15,
  },
  {
    id: 3,
    name: 'Teclado',
    description: 'Teclado para computadora.',
    price: 80000,
    stock: 8,
  },
]

function ItemDetailContainer() {
  const { itemId } = useParams()

  const product = products.find(
    (product) => product.id === Number(itemId)
  )

  if (!product) {
    return <p>Producto no encontrado.</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer
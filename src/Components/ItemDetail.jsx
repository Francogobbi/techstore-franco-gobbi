import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'

function ItemDetail({ product }) {
  const { cart, addItem } = useCart()

  const handleAdd = (quantity) => {
    addItem(product, quantity)
  }

  return (
    <main>
      <div className="product-detail">
        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <p>Precio: ${product.price}</p>

        <p>Stock disponible: {product.stock}</p>

        <ItemCount
          stock={product.stock}
          onAdd={handleAdd}
        />

        <hr />

        <h2>PRUEBA DEL CARRITO</h2>

        <p>
          Productos diferentes en carrito: {cart.length}
        </p>

        {cart.map((item) => (
          <p key={item.id}>
            {item.name} — cantidad: {item.quantity}
          </p>
        ))}
      </div>
    </main>
  )
}

export default ItemDetail
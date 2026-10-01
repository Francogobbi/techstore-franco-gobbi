import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

function Cart() {
  const {
    cart,
    totalQuantity,
    totalPrice,
  } = useCart()

  if (cart.length === 0) {
    return (
      <main>
        <div className="cart-container">
          <h1>Tu carrito está vacío</h1>

          <p>
            Todavía no agregaste ningún producto.
          </p>

          <Link
            to="/"
            className="primary-button"
          >
            Volver a la tienda
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="cart-container">
        <h1>Carrito de compras</h1>

        <p className="cart-total-items">
          Productos: {totalQuantity}
        </p>

        <div className="cart-list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className="cart-summary">
          <h2>
            Total: ${totalPrice}
          </h2>

          <Link
            to="/checkout"
            className="primary-button"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Cart
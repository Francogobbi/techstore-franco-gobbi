import { useCart } from '../context/CartContext'

function CartWidget() {
  const { totalQuantity } = useCart()

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>

      <span className="cart-count">
        {totalQuantity}
      </span>
    </div>
  )
}

export default CartWidget
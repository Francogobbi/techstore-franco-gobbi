function CartItem({ item }) {
  const subtotal = item.price * item.quantity

  return (
    <article className="cart-item">
      <div>
        <h2>{item.name}</h2>
        <p>Precio unitario: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
      </div>

      <strong>Subtotal: ${subtotal}</strong>
    </article>
  )
}

export default CartItem
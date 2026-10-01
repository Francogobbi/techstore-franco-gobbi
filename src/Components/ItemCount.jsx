import { useState } from 'react'

function ItemCount({ stock, onAdd }) {
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="item-count">
      <button onClick={decrease}>-</button>

      <span>{quantity}</span>

      <button onClick={increase}>+</button>

      <button onClick={() => onAdd(quantity)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
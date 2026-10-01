import { useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useCart } from '../context/CartContext'
import { db } from '../firebase'

function Checkout() {
  const { cart, totalPrice } = useCart()

  const [buyer, setBuyer] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const [error, setError] = useState('')
  const [orderId, setOrderId] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setBuyer({
      ...buyer,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (
      !buyer.name ||
      !buyer.lastName ||
      !buyer.email ||
      !buyer.phone
    ) {
      setError('Completá todos los campos.')
      return
    }

    setError('')
    setLoading(true)

    try {
      const order = {
        buyer: buyer,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: totalPrice,
        date: serverTimestamp(),
      }

      const ordersCollection = collection(db, 'ordenes')

      const orderReference = await addDoc(
        ordersCollection,
        order
      )

      setOrderId(orderReference.id)
    } catch (error) {
      console.error('Error al crear la orden:', error)
      setError(
        'Ocurrió un error al realizar la compra. Intentá nuevamente.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <main>
        <div className="checkout-container">
          <h1>No hay productos para comprar</h1>

          <p>
            Tu carrito está vacío.
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

  if (orderId) {
    return (
      <main>
        <div className="checkout-container">
          <h1>¡Compra realizada con éxito!</h1>

          <p>
            Gracias por tu compra, {buyer.name}.
          </p>

          <p>
            Tu número de orden es:
          </p>

          <h2>{orderId}</h2>

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
      <div className="checkout-container">
        <h1>Finalizar compra</h1>

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <label>
            Nombre
            <input
              type="text"
              name="name"
              value={buyer.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Apellido
            <input
              type="text"
              name="lastName"
              value={buyer.lastName}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={buyer.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Teléfono
            <input
              type="tel"
              name="phone"
              value={buyer.phone}
              onChange={handleChange}
            />
          </label>

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <div className="checkout-summary">
            <h2>Resumen de compra</h2>

            {cart.map((item) => (
              <p key={item.id}>
                {item.name} × {item.quantity}
              </p>
            ))}

            <h2>
              Total: ${totalPrice}
            </h2>
          </div>

          <button
            type="submit"
            className="primary-button"
            disabled={loading}
          >
            {loading ? 'Procesando compra...' : 'Comprar'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default Checkout
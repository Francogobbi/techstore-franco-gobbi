import { Link } from 'react-router-dom'

function Item({ product }) {
  return (
    <article>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <p>Precio: ${product.price}</p>

      <p>Stock disponible: {product.stock}</p>

      <Link to={`/item/${product.id}`}>
        IR AL DETALLE
      </Link>
    </article>
  )
}

export default Item
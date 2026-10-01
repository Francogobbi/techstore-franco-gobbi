import Item from './Item'

function ItemList({ products }) {
  return (
    <section>
      {products.map((product) => (
        <Item
          key={product.id}
          product={product}
        />
      ))}
    </section>
  )
}

export default ItemList
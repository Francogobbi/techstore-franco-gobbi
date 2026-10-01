import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'

import ItemList from './ItemList'
import { db } from '../firebase'

import auricularesImage from '../assets/Auriculares1.jpg'
import monitorImage from '../assets/Monitor1.jpg'
import ratonImage from '../assets/Raton1.jpg'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const productsCollection = collection(db, 'productos')

    getDocs(productsCollection)
      .then((snapshot) => {
        const productsList = snapshot.docs.map((doc) => {
          const data = doc.data()

          let image = ''

          if (data.name === 'Auriculares') {
            image = auricularesImage
          }

          if (data.name === 'Monitor') {
            image = monitorImage
          }

          if (data.name === 'Ratón') {
            image = ratonImage
          }

          return {
            ...data,
            id: Number(data.id),
            image,
          }
        })

        setProducts(productsList)
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <main>
        <h1>Productos tecnológicos</h1>
        <p>Cargando productos...</p>
      </main>
    )
  }

  return (
    <main>
      <h1>Productos tecnológicos</h1>

      <ItemList products={products} />
    </main>
  )
}

export default ItemListContainer
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        TechStore
      </Link>

      <div className="navbar-links">
        <Link to="/">Inicio</Link>
      </div>

      <Link to="/cart" className="cart-link">
        <CartWidget />
      </Link>
    </nav>
  )
}

export default NavBar
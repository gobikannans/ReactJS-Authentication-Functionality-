import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <ul className="nav-list-container">
      <Link to="/" className="link-name">
        <li>Home</li>
      </Link>
      <Link to="/about" className="link-name">
        <li>About</li>
      </Link>
    </ul>
  </nav>
)

export default Header

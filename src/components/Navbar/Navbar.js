import './Navbar.css';
import logo from './mythical_gourmet_nb.png';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaHeart, FaTag } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Mythical Gourmet" />
        </Link>
      </div>

      {/* Barra de búsqueda */}
      <div className="navbar-search">
        <input type="text" placeholder="Search gourmet treats..." />
        <button type="submit">
          <FaSearch />
        </button>
      </div>

      {/* Pestañas de la derecha */}
      <div className="navbar-links">
        {/* <Link to="/favorites" className="navbar-icon">
          <FaHeart />
          <span>Favorites</span>
        </Link>
        <Link to="/promotions" className="navbar-icon">
          <FaTag />
          <span>Promotions</span>
        </Link> */}
        <Link to="/profile" className="navbar-icon">
          <FaUser />
          <span>Profile</span>
        </Link>
        <Link to="/cart" className="navbar-icon">
          <FaShoppingCart />
          <span>Cart</span>
        </Link>
        
      </div>
    </div>
  );
}

export default Navbar;

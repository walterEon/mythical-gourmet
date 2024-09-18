import './Navbar.css';
import logo from './mythical_gourmet_nb.png';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

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
        
        <input type="text" placeholder="Buscar alimentos gourmet..." />
        
      </div>

      {/* Pestañas de la derecha */}
      <div className="navbar-links">
        <div className="navbar-icon" onClick={togglePopup}>
          <FaUser />
          <span>Perfil</span>
        </div>
        <Link to="/cart" className="navbar-icon">
          <FaShoppingCart />
          <span>Carrito</span>
        </Link>
      </div>

      {/* Popup para el perfil */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            
            <h5>Iniciar sesión</h5>
            <form>
              <input type="email" placeholder="Ej.: ejemplo@mail.com" required />
              <input type="password" placeholder="Contraseña" required />
              <div className="terminos">
                <input type="checkbox" required /> He leído y acepto los 
                <a href="/terms">Términos y Condiciones</a>
              </div>
              <p>¿Aún no tienes una cuenta? <a href='/registro'>Regístrate</a> </p>
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

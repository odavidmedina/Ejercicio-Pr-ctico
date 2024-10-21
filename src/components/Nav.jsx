
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
        <li>
          <Link to="/cars">Autos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
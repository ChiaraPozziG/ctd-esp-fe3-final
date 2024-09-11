import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/tooth.png'; // Ruta del logo
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={theme}>
      <div className="logo-container">
        <img src={logo} alt="DHODON Logo" />
        <span className="title">DHODON</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favs">Favorites</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="toggle-container">
  <div className="theme-label">Theme</div>
  <label className="toggle-switch">
    <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
    <span className="slider">
      <span className="emoji sun">☀️</span>
      <span className="emoji moon">🌙</span>
    </span>
  </label>
</div>
    </nav>
  );
}

export default Navbar;

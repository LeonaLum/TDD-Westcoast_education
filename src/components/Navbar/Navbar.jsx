import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  let [mobileMenu, setMobileMenu] = useState(false);

  let toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return ( 
    <>
    <nav className="nav" data-testid="Navbar-component">
    <ul>
      <h1>Westcoast Education</h1>
      <li className="desktop-items">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="desktop-items">
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li className="desktop-items">
        <NavLink to="/teachers">Teachers</NavLink>
      </li>
      <li className="desktop-items">
        <NavLink to="/add">Add course or teacher</NavLink>
      </li>
      <li className="menu-icon" onClick={() => toggleMenu()}> <MenuIcon fontSize="large" /></li>
    </ul>
  </nav>
   {mobileMenu &&
      <nav className="mobile-menu">
        <ul className="mobile-menu-content">
          <li className="mobile-items" onClick={() => toggleMenu()}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mobile-items" onClick={() => toggleMenu()}>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li className="mobile-items" onClick={() => toggleMenu()}>
            <NavLink to="/teachers">Teachers</NavLink>
          </li>
          <li className="mobile-items" onClick={() => toggleMenu()}>
            <NavLink to="/add">Add course or teacher</NavLink>
          </li>
        </ul>
      </nav>
    }
  </>
   );
}
 
export default Navbar;
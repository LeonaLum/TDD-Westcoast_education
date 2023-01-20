import { NavLink } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="nav" data-testid="Navbar-component">
    <ul>
      <h1>Westcoast Education</h1>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="/teachers">Teachers</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add course or teacher</NavLink>
      </li>
    </ul>
  </nav>

   );
}
 
export default Navbar;
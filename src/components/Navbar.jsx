import { NavLink } from "react-router";

function Navbar() {
  const linkStyles = ({ isActive }) =>
    `${isActive ? "text-indigo-400" : "text-gray-400 hover:text-white"}`;

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={linkStyles}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/product" className={linkStyles}>
            Product
          </NavLink>
        </li>

        <li>
          <NavLink to="/pricing" className={linkStyles}>
            Pricing
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

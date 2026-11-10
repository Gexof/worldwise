import { NavLink } from "react-router";

function Navbar() {
  const linkStyles = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-[#00C46A]" : "text-white/80 hover:text-white"
    }`;

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between py-6">
      {/* Logo */}
      <NavLink to="/">
        <img
          src="/logo.png"
          alt="Worldwise logo"
          className="h-10 w-auto object-contain"
        />
      </NavLink>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8 text-sm font-semibold">
        <li>
          <NavLink to="/" end className={linkStyles}>
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

        <li>
          <NavLink
            to="/login"
            className="rounded-lg bg-white px-5 py-2.5 text-[#2D3439] transition-colors hover:bg-[#00C46A]"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

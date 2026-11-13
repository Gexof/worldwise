import { NavLink } from "react-router";

function Navbar() {
  const linkStyles = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-[#00C46A]" : "text-white/75 hover:text-white"
    }`;

  return (
    <header className="w-full px-8">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="shrink-0">
          <img
            src="/logo.png"
            alt="Worldwise logo"
            className="h-11 w-auto object-contain"
          />
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex items-center gap-10">
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
        </ul>

        {/* Login */}
        <NavLink
          to="/login"
          className="rounded-lg bg-[#00C46A] px-6 py-3 text-sm font-bold text-[#242A2E] transition-all duration-200 hover:bg-[#00A85A] hover:-translate-y-0.5"
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

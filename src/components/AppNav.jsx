import { NavLink } from "react-router";
import { MapPin, Globe } from "lucide-react";

function AppNav() {
  const linkStyles = ({ isActive }) =>
    `flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-[#00C46A]/10 text-[#00C46A]"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <nav>
      <ul className="flex gap-2 rounded-xl bg-[#2D3439] p-2">
        <li className="flex flex-1">
          <NavLink to="cities" className={linkStyles}>
            <MapPin size={18} />
            Cities
          </NavLink>
        </li>

        <li className="flex flex-1">
          <NavLink to="countries" className={linkStyles}>
            <Globe size={18} />
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;

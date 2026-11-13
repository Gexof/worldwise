import { NavLink, Outlet } from "react-router";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <aside className="flex h-full w-xl shrink-0 flex-col overflow-hidden bg-[#242A2E] px-6 py-8 text-white">
      {/* Logo */}
      <NavLink to="/" className="mb-10 flex justify-center">
        <img
          src="/logo.png"
          alt="Worldwise logo"
          className="h-10 w-auto object-contain"
        />
      </NavLink>

      {/* Navigation */}
      <AppNav />

      {/* Nested Routes */}
      <div className="mt-8 min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="mt-6 shrink-0 border-t border-white/10 pt-5 text-center">
        <p className="text-xs text-gray-500">
          &copy; Copyright {new Date().getFullYear()} by Worldwise inc.
        </p>
      </footer>
    </aside>
  );
}

export default Sidebar;

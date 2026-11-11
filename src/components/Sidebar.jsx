import { Outlet } from "react-router";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <aside className="flex h-full w-[380px] shrink-0 flex-col bg-[#242A2E] px-6 py-8 text-white">
      {/* Logo */}
      <div className="mb-10 flex justify-center">
        <img
          src="/logo.png"
          alt="Worldwise"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Navigation */}
      <AppNav />

      {/* Nested Routes */}
      <div className="mt-8 flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="mt-6 border-t border-white/10 pt-5 text-center">
        <p className="text-xs text-gray-500">
          &copy; Copyright {new Date().getFullYear()} by Worldwise inc.
        </p>
      </footer>
    </aside>
  );
}

export default Sidebar;

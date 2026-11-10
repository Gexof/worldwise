import { Outlet } from "react-router";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div>
      <img src="./logo.png" alt="" />

      <AppNav />
      <Outlet />

      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} by Worldwise inc.</p>
      </footer>
    </div>
  );
}

export default Sidebar;

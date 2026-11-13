import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { LogOut } from "lucide-react";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#2D3439] px-4 py-3 text-white">
      <img
        src={user.avatar}
        alt={user.name}
        className="h-10 w-10 rounded-full border-2 border-[#00C46A]/40 object-cover"
      />

      <span className="flex-1 truncate text-sm font-semibold">
        Welcome, {user.name}
      </span>

      <button
        onClick={handleClick}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx` ******************* DONE ******************* 
2) In the `Login.jsx` page, call `login()` from context  ******************* DONE ******************* 
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/

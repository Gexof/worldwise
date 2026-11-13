import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initalState = {
  user: null,
  isAuthenitcated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenitcated: true };

    case "logout":
      return { ...state, user: null, isAuthenitcated: false };

    default:
      throw new Error("Unkown Action!");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenitcated }, disptach] = useReducer(
    reducer,
    initalState,
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password == FAKE_USER.password)
      disptach({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    disptach({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenitcated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext used outsided the provider");

  return context;
}

export { AuthProvider, useAuth };

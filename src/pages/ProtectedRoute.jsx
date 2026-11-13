import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenitcated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenitcated) navigate("/");
  }, [isAuthenitcated, navigate]);

  return isAuthenitcated ? children : null;
}

export default ProtectedRoute;

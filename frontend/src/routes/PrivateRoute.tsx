import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/Auth";

export function PrivateRoute(): JSX.Element {
  const { auth } = useAuth();

  const { state } = useLocation();

  if (!auth.user) {
    return <Navigate to="/" state={state} replace />;
  }

  return <Outlet />;
}

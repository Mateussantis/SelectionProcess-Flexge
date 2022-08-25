import { Navigate, Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { Home } from "../components/pages/Home";
import { CreateStudent } from "../components/pages/CreateStudent";
import { UpdateStudent } from "../components/pages/UpdateStudent";
import { PrivateRoute } from "./PrivateRoute";

import { useAuth } from "../hooks/Auth";

export function AppRoutes() {
  const { auth } = useAuth();
  return (
    <Routes>
      {!auth.user ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      ) : (
        <>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/createStudent" element={<CreateStudent />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/updateStudent" element={<UpdateStudent />} />
          </Route>
        </>
      )}

      <Route path="*" element={<Navigate to={auth.user ? "/home" : "/"} />} />
    </Routes>
  );
}

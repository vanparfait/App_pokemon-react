import { Navigate, Outlet } from "react-router-dom";
import AuthenticationService from "./services/authentificationService";

const PrivateRoute = () => {
  const isAuthenticated = AuthenticationService.isAuthenticated;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

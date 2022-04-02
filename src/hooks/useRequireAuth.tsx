import { Navigate } from "react-router";
import { useCore } from "./useCore";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const core = useCore();

  return core.authService.isLoggedIn() ? (
    children
  ) : (
    <Navigate to={"/"} replace />
  );
};

export const useRequireAuth = () => {
  return RequireAuth;
};

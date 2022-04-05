import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Loading from "../pages/loading";
import { useCore } from "./useCore";

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
  const core = useCore();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = await core.authService.isLoggedIn();
      setIsLoggedIn(isLoggedIn);
      setIsLoading(false);
    };
    checkAuth();
  }, [core]);

  // useEffect(() => {
  //   core.authService.onAuthStateChanged((user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //     setIsLoading(false);
  //   });
  // }, [core]);

  if (isLoading) {
    return <Loading />;
  } else {
    return isLoggedIn ? children : <Navigate to={"/"} replace />;
  }
};

export const useRequireAuth = () => {
  return RequireAuth;
};

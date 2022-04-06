import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Loading } from "../components/Loading";
import { useCore } from "./useCore";

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
  const core = useCore();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = await core.auth.isLoggedIn();
      setIsLoggedIn(isLoggedIn);
      setIsLoading(false);
    };
    checkAuth();
  }, [core]);

  useEffect(() => {
    const unsubscribe = core.auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [core]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export const useRequireAuth = () => {
  return RequireAuth;
};

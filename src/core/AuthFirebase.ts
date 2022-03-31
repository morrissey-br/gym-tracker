import { Auth } from "./Auth";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthFirebase = (): Auth => {
  const auth = getAuth();

  const login = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
  };

  const isLoggedIn = async (): Promise<boolean> => {
    return auth.currentUser !== null;
  };

  return {
    login,
    logout,
    isLoggedIn,
  };
};

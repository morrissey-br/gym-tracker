import { AuthProvider } from "./AuthProvider";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export const FirebaseAuthProvider = (): AuthProvider => {
  const auth = getAuth();
  auth.onAuthStateChanged(async (user) => {
    console.log("auth state changed", user);
  });

  const login = async (email: string, password: string): Promise<void> => {
    await setPersistence(auth, browserLocalPersistence);
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

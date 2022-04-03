import { AuthProvider } from "./AuthProvider";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  User,
} from "firebase/auth";

export const FirebaseAuthProvider = (): AuthProvider => {
  const auth = getAuth();
  let user = auth.currentUser;
  auth.onAuthStateChanged((newUser) => {
    user = newUser;
  });

  const login = async (email: string, password: string): Promise<void> => {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
  };

  const isLoggedIn = (): boolean => {
    return !!user;
  };

  return {
    login,
    logout,
    isLoggedIn,
  };
};

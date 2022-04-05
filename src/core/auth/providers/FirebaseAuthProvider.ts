import { AuthProvider } from "../AuthProvider";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export const FirebaseAuthProvider = (): AuthProvider => {
  const auth = getAuth();
  const authIsReady = new Promise<void>((resolve) => {
    auth.onAuthStateChanged(() => {
      resolve();
    });
  });

  const login = async (email: string, password: string): Promise<void> => {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
  };

  const isLoggedIn = async (): Promise<boolean> => {
    await authIsReady;
    return !!auth.currentUser;
  };

  const onAuthStateChanged = (
    callback: (authState: boolean) => void
  ): (() => void) => {
    return auth.onAuthStateChanged(() => {
      callback(!!auth.currentUser);
    });
  };

  return {
    login,
    logout,
    isLoggedIn,
    onAuthStateChanged,
  };
};

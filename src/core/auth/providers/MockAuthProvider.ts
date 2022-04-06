import { AuthProvider } from "../AuthProvider";

export const MockAuthProvider = (): AuthProvider => {
  let authState = true;
  let authStateChangedCallbacks: ((authState: boolean) => void)[] = [];

  const login = async (email: string, password: string): Promise<void> => {
    authState = true;
    authStateChangedCallbacks.forEach((callback) => callback(authState));
  };

  const logout = async (): Promise<void> => {
    authState = false;
    authStateChangedCallbacks.forEach((callback) => callback(authState));
  };

  const isLoggedIn = async (): Promise<boolean> => {
    return authState;
  };

  const onAuthStateChanged = (
    callback: (authState: boolean) => void
  ): (() => void) => {
    authStateChangedCallbacks.push(callback);
    return () => {
      authStateChangedCallbacks = authStateChangedCallbacks.filter(
        (cb) => cb !== callback
      );
    };
  };

  return {
    login,
    logout,
    isLoggedIn,
    onAuthStateChanged,
  };
};

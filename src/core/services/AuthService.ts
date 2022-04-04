import { AuthProvider } from "../providers/AuthProvider";

export interface AuthService {
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  isLoggedIn(): Promise<boolean>;
  onAuthStateChanged(callback: (authState: boolean) => void): () => void;
}

const authService = (authProvider: AuthProvider): AuthService => {
  return {
    login: (email, password) => authProvider.login(email, password),
    logout: () => authProvider.logout(),
    isLoggedIn: () => authProvider.isLoggedIn(),
    onAuthStateChanged: (callback) => authProvider.onAuthStateChanged(callback),
  };
};

export default authService;

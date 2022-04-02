import { AuthProvider } from "../providers/AuthProvider";

export interface AuthService {
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  isLoggedIn(): boolean;
}

const authService = (authProvider: AuthProvider): AuthService => {
  return {
    login: (email, password) => authProvider.login(email, password),
    logout: () => authProvider.logout(),
    isLoggedIn: () => authProvider.isLoggedIn(),
  };
};

export default authService;

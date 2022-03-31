import { Auth } from "./Auth";

export interface AuthService {
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  isLoggedIn(): Promise<boolean>;
}

const authService = (auth: Auth): AuthService => {
  return {
    login: (email, password) => auth.login(email, password),
    logout: () => auth.logout(),
    isLoggedIn: () => auth.isLoggedIn(),
  };
};

export default authService;

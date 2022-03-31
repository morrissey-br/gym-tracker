export interface Auth {
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  isLoggedIn(): Promise<boolean>;
}

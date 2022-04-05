export interface AuthProvider {
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  isLoggedIn(): Promise<boolean>;
  onAuthStateChanged(callback: (authState: boolean) => void): () => void;
}

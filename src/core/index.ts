import AuthService from "./auth";
import DomainService from "./domain";
import { FirebaseAuthProvider } from "./auth/providers/FirebaseAuthProvider";
import { WeightMesureFirestoreRepository } from "./domain/db/firestore/WeightMesureFirestoreRepository";

interface CoreService {
  auth: ReturnType<typeof AuthService>;
  domain: ReturnType<typeof DomainService>;
}

export default (): CoreService => {
  return {
    auth: AuthService(FirebaseAuthProvider()),
    domain: DomainService(WeightMesureFirestoreRepository()),
  };
};

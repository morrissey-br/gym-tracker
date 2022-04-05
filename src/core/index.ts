import AuthService from "./auth";
import DomainService from "./domain";
import { FirebaseAuthProvider } from "./auth/providers/FirebaseAuthProvider";
import { WeightMesureFirestoreRepository } from "./domain/db/firestore/WeightMesureFirestoreRepository";
import { WeightMesureInMemoryRepository } from "./domain/db/inMemory/WeightMesureInMemoryRepository";
import { MockAuthProvider } from "./auth/providers/MockAuthProvider";

interface CoreService {
  auth: ReturnType<typeof AuthService>;
  domain: ReturnType<typeof DomainService>;
}

export default (): CoreService => {
  const inDev = import.meta.env.DEV;
  if (inDev) {
    console.info("CoreService: inDev");
    return {
      auth: AuthService(MockAuthProvider()),
      domain: DomainService(WeightMesureInMemoryRepository()),
    };
  }
  return {
    auth: AuthService(FirebaseAuthProvider()),
    domain: DomainService(WeightMesureFirestoreRepository()),
  };
};

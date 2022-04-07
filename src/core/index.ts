import AuthService from "./auth";
import DomainService from "./domain";
import { FirebaseAuthProvider } from "./auth/providers/FirebaseAuthProvider";
import { WeightMeasurementFirestoreRepository } from "./domain/db/firestore/WeightMeasurementFirestoreRepository";
import { WeightMeasurementInMemoryRepository } from "./domain/db/inMemory/WeightMeasurementInMemoryRepository";
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
      domain: DomainService(WeightMeasurementInMemoryRepository()),
    };
  }
  return {
    auth: AuthService(FirebaseAuthProvider()),
    domain: DomainService(WeightMeasurementFirestoreRepository()),
  };
};

import { FirebaseAuthProvider } from "./providers/FirebaseAuthProvider";
import authService, { AuthService } from "./services/AuthService";
import { WeightMesureFirestoreRepo } from "./db/WeightMesureFirestoreRepo";
import weightService, { WeightService } from "./services/WeightService";

export interface CoreService {
  authService: AuthService;
  weightService: WeightService;
}

export const FirebaseCoreService = (): CoreService => {
  return {
    weightService: weightService(WeightMesureFirestoreRepo()),
    authService: authService(FirebaseAuthProvider()),
  };
};

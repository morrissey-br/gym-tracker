import { AuthFirebase } from "./AuthFirebase";
import authService, { AuthService } from "./AuthService";
import { WeightMesureFirestoreRepo } from "./WeightMesureFirestoreRepo";
import weightService, { WeightService } from "./WeightService";

export interface Core {
  authService: AuthService;
  weightService: WeightService;
}

const core = (): Core => {
  return {
    weightService: weightService(WeightMesureFirestoreRepo()),
    authService: authService(AuthFirebase()),
  };
};

export default core;

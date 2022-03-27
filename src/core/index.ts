import { WeightMesureFirestoreRepo } from "./WeightMesureFirestoreRepo";
import weightService, { WeightService } from "./WeightService";

export interface Core {
  weightService: WeightService;
}

const core = (): Core => {
  const weightMesureRepository = WeightMesureFirestoreRepo();
  return {
    weightService: weightService(weightMesureRepository),
  };
};

export default core;

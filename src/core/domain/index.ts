import { WeightMesureRepository } from "./models/WeightMesureRepository";
import WeightService from "./services/WeightService";

interface CoreService {
  weightService: ReturnType<typeof WeightService>;
}

export default (
  weightMesureRepository: WeightMesureRepository
): CoreService => {
  const weightService = WeightService(weightMesureRepository);
  return {
    weightService,
  };
};

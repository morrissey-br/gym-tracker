import { WeightMeasurementRepository } from "./models/WeightMeasurementRepository";
import WeightService from "./services/WeightService";

interface CoreService {
  weightService: ReturnType<typeof WeightService>;
}

export default (
  WeightMeasurementRepository: WeightMeasurementRepository
): CoreService => {
  const weightService = WeightService(WeightMeasurementRepository);
  return {
    weightService,
  };
};

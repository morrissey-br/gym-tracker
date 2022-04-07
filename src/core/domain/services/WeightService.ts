import { WeightMeasurement } from "../models/WeightMeasurement";
import { WeightMeasurementRepository } from "../models/WeightMeasurementRepository";

interface WeightService {
  saveNewMeasurement(weight: number): Promise<void>;
  getLastMeasurement(): Promise<WeightMeasurement | null>;
  getAllMeasurements(limit: number, page: number): Promise<WeightMeasurement[]>;
}

export default (
  WeightMeasurementRepository: WeightMeasurementRepository
): WeightService => {
  const saveNewMeasurement = async (weight: number): Promise<void> => {
    const WeightMeasurement: WeightMeasurement = {
      date: new Date(),
      weight: weight,
    };
    await WeightMeasurementRepository.save(WeightMeasurement);
  };
  const getLastMeasurement = async (): Promise<WeightMeasurement | null> => {
    return WeightMeasurementRepository.getLast();
  };

  const getAllMeasurements = async (
    limit: number,
    page: number
  ): Promise<WeightMeasurement[]> => {
    return WeightMeasurementRepository.getAll(limit, page);
  };
  return {
    saveNewMeasurement,
    getLastMeasurement,
    getAllMeasurements,
  };
};

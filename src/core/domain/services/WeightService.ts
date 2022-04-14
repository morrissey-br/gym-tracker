import {
  WeightMeasurement,
  WeightMeasurementId,
} from "../models/WeightMeasurement";
import { WeightMeasurementRepository } from "../models/WeightMeasurementRepository";

interface WeightService {
  saveNewMeasurement(weight: number): Promise<void>;
  getLastMeasurement(): Promise<WeightMeasurement | null>;
  getAllMeasurements(limit: number, page: number): Promise<WeightMeasurement[]>;
  removeMeasurement(id: WeightMeasurementId): Promise<void>;
}

export default (
  WeightMeasurementRepository: WeightMeasurementRepository
): WeightService => {
  const saveNewMeasurement = async (weight: number): Promise<void> => {
    const newId = WeightMeasurementRepository.newId();
    const WeightMeasurement: WeightMeasurement = {
      id: newId,
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

  const removeMeasurement = async (id: WeightMeasurementId): Promise<void> => {
    await WeightMeasurementRepository.remove(id);
  };
  return {
    saveNewMeasurement,
    getLastMeasurement,
    getAllMeasurements,
    removeMeasurement,
  };
};

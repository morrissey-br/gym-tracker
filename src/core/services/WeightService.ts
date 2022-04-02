import { WeightMesure } from "../models/WeightMesure";
import { WeightMesureRepository } from "../db/WeightMesureRepository";

export interface WeightService {
  saveNewMeasurement(weight: number): Promise<void>;
  getLastMeasurement(): Promise<WeightMesure | null>;
}

const weightService = (
  weightMesureRepository: WeightMesureRepository
): WeightService => {
  const saveNewMeasurement = async (weight: number): Promise<void> => {
    const weightMesure: WeightMesure = {
      date: new Date(),
      weight: weight,
    };
    await weightMesureRepository.save(weightMesure);
  };
  const getLastMeasurement = async (): Promise<WeightMesure | null> => {
    return weightMesureRepository.getLast();
  };
  return {
    saveNewMeasurement,
    getLastMeasurement,
  };
};

export default weightService;

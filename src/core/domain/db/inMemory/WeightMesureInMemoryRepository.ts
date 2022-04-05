import { WeightMesure } from "../../models/WeightMesure";
import { WeightMesureRepository } from "../../models/WeightMesureRepository";

export const WeightMesureInMemoryRepository = (): WeightMesureRepository => {
  const weightMesures: WeightMesure[] = [];
  const getLast = async (): Promise<WeightMesure | null> => {
    weightMesures.sort((a, b) => a.date.getTime() - b.date.getTime());
    return weightMesures.length > 0 ? weightMesures[0] : null;
  };
  const save = async (weightMesure: WeightMesure): Promise<void> => {
    weightMesures.push(weightMesure);
  };

  return {
    getLast,
    save,
  };
};

import { WeightMesure } from "./WeightMesure";

export interface WeightMesureRepository {
  getLast(): Promise<WeightMesure | null>;
  save(weightMesure: WeightMesure): Promise<void>;
}

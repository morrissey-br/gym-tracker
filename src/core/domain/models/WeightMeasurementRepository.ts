import { WeightMeasurement } from "./WeightMeasurement";

export interface WeightMeasurementRepository {
  getLast(): Promise<WeightMeasurement | null>;
  save(WeightMeasurement: WeightMeasurement): Promise<void>;
  getAll(limit: number, page: number): Promise<WeightMeasurement[]>;
}

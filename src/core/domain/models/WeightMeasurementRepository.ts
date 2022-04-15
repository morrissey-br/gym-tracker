import { WeightMeasurement, WeightMeasurementId } from "./WeightMeasurement";

export interface WeightMeasurementRepository {
  newId(): WeightMeasurementId;
  getLast(): Promise<WeightMeasurement | null>;
  add(WeightMeasurement: WeightMeasurement): Promise<void>;
  getAll(limit: number, page: number): Promise<WeightMeasurement[]>;
  remove(id: WeightMeasurementId): Promise<void>;
}

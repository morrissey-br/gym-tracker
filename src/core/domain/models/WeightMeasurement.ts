import { Id } from "./Id";

export type WeightMeasurementId = Id;

export interface WeightMeasurement {
  id: WeightMeasurementId;
  date: Date;
  weight: number;
}

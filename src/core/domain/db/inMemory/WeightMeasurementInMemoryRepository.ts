import { WeightMeasurement } from "../../models/WeightMeasurement";
import { WeightMeasurementRepository } from "../../models/WeightMeasurementRepository";

export const WeightMeasurementInMemoryRepository =
  (): WeightMeasurementRepository => {
    const WeightMeasurements: WeightMeasurement[] = [
      { weight: 80, date: new Date(2022, 3, 1) },
      { weight: 85, date: new Date(2022, 3, 2) },
    ];
    const getLast = async (): Promise<WeightMeasurement | null> => {
      WeightMeasurements.sort((a, b) => a.date.getTime() - b.date.getTime());
      return WeightMeasurements.length > 0 ? WeightMeasurements[0] : null;
    };
    const save = async (
      WeightMeasurement: WeightMeasurement
    ): Promise<void> => {
      WeightMeasurements.push(WeightMeasurement);
    };
    const getAll = async (
      limit: number,
      page: number
    ): Promise<WeightMeasurement[]> => {
      WeightMeasurements.sort((a, b) => a.date.getTime() - b.date.getTime());
      return WeightMeasurements.slice((page - 1) * limit, page * limit);
    };

    return {
      getLast,
      save,
      getAll,
    };
  };

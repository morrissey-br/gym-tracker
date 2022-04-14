import { useEffect, useState } from "react";
import moment from "moment";
import { WeightMeasurement } from "../../../../core/domain/models/WeightMeasurement";
import { useCore } from "../../../../hooks/useCore";
import { FaTrash } from "react-icons/fa";

export default () => {
  const core = useCore();
  const [loading, setLoading] = useState(false);
  const [weightMeasurements, setWeightMeasurements] = useState<
    WeightMeasurement[]
  >([]);

  const fetchWeightMeasurements = async (limit: number, page: number) => {
    setLoading(true);
    const weightMeasurements =
      await core.domain.weightService.getAllMeasurements(limit, page);
    console.log(weightMeasurements);
    if (weightMeasurements) setWeightMeasurements(weightMeasurements);
    setLoading(false);
  };

  const handleRemoveWeightMeasurement = async (
    weightMeasurement: WeightMeasurement
  ) => {
    await core.domain.weightService.removeMeasurement(weightMeasurement.id);
    setWeightMeasurements((weightMeasurements) =>
      weightMeasurements.filter((w) => w.id !== weightMeasurement.id)
    );
  };

  useEffect(() => {
    fetchWeightMeasurements(10, 1);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="p-4 text-2xl">Medidas anteriores</h1>
      {weightMeasurements.length > 0 ? (
        <table className="w-80 border-collapse">
          <thead>
            <tr>
              <th className="text-left border border-light p-2">Data</th>
              <th className="text-left border border-light p-2">Peso</th>
              <th className="text-left border border-light p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {weightMeasurements.map((weightMeasurement) => (
              <tr key={weightMeasurement.date.toString()}>
                <td className="text-left border border-light p-2">
                  {moment(weightMeasurement.date).format("L")}
                </td>
                <td className="text-left border border-light p-2">
                  {weightMeasurement.weight.toFixed(2) + "kg"}
                </td>
                <td className="text-left border border-light p-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      handleRemoveWeightMeasurement(weightMeasurement)
                    }
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="p-4">Nenhuma medida registrada</div>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import moment from "moment";
import { WeightMeasurement } from "../../../../core/domain/models/WeightMeasurement";
import { useCore } from "../../../../hooks/useCore";

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

  useEffect(() => {
    fetchWeightMeasurements(10, 1);
  }, []);

  const handleLogout = async () => {
    await core.auth.logout();
  };
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <button
        onClick={handleLogout}
        className="absolute right-0 top-0 p-3 text-white"
      >
        Sair
      </button>
      <h1 className="p-4 text-2xl">Medidas anteriores</h1>
      {weightMeasurements.length > 0 ? (
        <table className="w-80 border-collapse">
          <thead>
            <tr>
              <th className="text-left border border-light p-2">Data</th>
              <th className="text-left border border-light p-2">Peso</th>
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

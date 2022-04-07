import { useEffect, useState } from "react";
import { WeightMeasurement } from "../../../core/domain/models/WeightMeasurement";
import { useCore } from "../../../hooks/useCore";

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
      <h1 className="p-4 text-2xl">Weight mesures details</h1>
      <table className="w-80 border-collapse">
        <thead>
          <tr>
            <th className="text-left border border-light p-2">Date</th>
            <th className="text-left border border-light p-2">Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left border border-light p-2">2020-01-01</td>
            <td className="text-left border border-light p-2">100</td>
          </tr>
          <tr>
            <td className="text-left border border-light p-2">2020-01-02</td>
            <td className="text-left border border-light p-2">101</td>
          </tr>
          <tr>
            <td className="text-left border border-light p-2">2020-01-03</td>
            <td className="text-left border border-light p-2">102</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

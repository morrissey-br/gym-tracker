import { useEffect, useRef, useState, FocusEvent } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../../components/Loading";
import { useCore } from "../../../hooks/useCore";
export default () => {
  const core = useCore();
  const [isAdding, setIsAdding] = useState(false);
  const [weightInput, setWeightInput] = useState("0");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchLastWeight = async () => {
    setLoading(true);
    const lastWeightMeasurement =
      await core.domain.weightService.getLastMeasurement();
    if (lastWeightMeasurement) {
      setWeightInput(lastWeightMeasurement.weight.toString());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLastWeight();
  }, []);

  const handleButtonClick = async () => {
    if (isAdding) {
      setLoading(true);
      await core.domain.weightService.addNewMeasurement(+weightInput);
      await fetchLastWeight();
      setLoading(false);
    }
    setIsAdding((isAdding) => !isAdding);
  };

  useEffect(() => {
    if (isAdding) inputRef.current?.focus();
  }, [isAdding]);

  const handleInputBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (e.relatedTarget === null) {
      setIsAdding(false);
    }
  };

  return (
    <div className="h-full flex justify-center items-center ">
      <div className="flex flex-col items-center min-w-[150px]">
        {!loading ? (
          <>
            <span className="text-xl text-white">Peso Atual</span>
            <div className="flex items-end pr-3">
              <div className="relative flex">
                <span
                  aria-hidden="true"
                  className="text-6xl font-light opacity-0 pl-3"
                >
                  {weightInput === "" ? "0" : weightInput}
                </span>
                <input
                  ref={inputRef}
                  disabled={!isAdding}
                  type="number"
                  inputMode="decimal"
                  value={weightInput}
                  onChange={(e) => setWeightInput(e.target.value)}
                  onBlur={handleInputBlur}
                  className="absolute h-full w-full left-0 top-0 border-none outline-none disabled:opacity-100 text-6xl font-light bg-transparent text-right appearance-none"
                />
              </div>
              <span>kg</span>
            </div>
            <button
              className={`mt-3 p-2 w-full border border-white rounded-lg transition-colors ${
                isAdding
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              }`}
              onClick={handleButtonClick}
            >
              {isAdding ? "Salvar" : "Adicionar"}
            </button>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <Link
        to="weight-measurement-details"
        className="absolute bottom-0 m-auto my-4 hover:underline "
      >
        Ver mais
      </Link>
    </div>
  );
};

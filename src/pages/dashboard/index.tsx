import { useEffect, useRef, useState } from "react";
import { useCore } from "../../hooks/useCore";
export default () => {
  const core = useCore();
  const [isAdding, setIsAdding] = useState(false);
  const [weightInput, setWeightInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchLastWeight = async () => {
    setLoading(true);
    const lastweightMesure =
      await core.domain.weightService.getLastMeasurement();
    if (lastweightMesure) {
      setWeightInput(lastweightMesure.weight.toString());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLastWeight();
  }, []);

  const handleButtonClick = async () => {
    if (isAdding) {
      await core.domain.weightService.saveNewMeasurement(+weightInput);
    }
    setIsAdding((isAdding) => !isAdding);
  };

  useEffect(() => {
    if (isAdding) inputRef.current?.focus();
  }, [isAdding]);

  const handleLogout = async () => {
    await core.auth.logout();
  };

  return (
    <div className="h-full flex justify-center items-center">
      <button
        onClick={handleLogout}
        className="absolute right-0 top-0 p-3 text-white"
      >
        Sair
      </button>
      <div className="flex flex-col items-center min-w-[150px]">
        {!loading ? (
          <>
            <span className="text-xl text-white">Peso Atual</span>
            <div className="flex items-end pr-3">
              <div className="relative flex">
                <span
                  aria-hidden="true"
                  className="text-6xl font-light text-white opacity-0 pl-3"
                >
                  {weightInput}
                </span>
                <input
                  ref={inputRef}
                  disabled={!isAdding}
                  type="number"
                  inputMode="decimal"
                  value={weightInput}
                  onChange={(e) => setWeightInput(e.target.value)}
                  className="absolute h-full w-full left-0 top-0 border-none outline-none text-white disabled:opacity-100 text-6xl font-light bg-transparent text-right appearance-none"
                />
              </div>
              <span className="text-white">kg</span>
            </div>
            <button
              className="mt-3 p-2 w-full border border-white text-white rounded-lg hover:bg-white hover:text-black hover:transition-colors"
              onClick={handleButtonClick}
            >
              {isAdding ? "Salvar" : "Adicionar"}
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center">
            <span>Carregando...</span>
          </div>
        )}
      </div>
    </div>
  );
};

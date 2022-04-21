import { useEffect, useRef, useState, FocusEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { AutoGrowInput } from "../../components/AutoGrowInput";
import { useCore } from "../../hooks/useCore";

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
            <AutoGrowInput
              value={weightInput}
              type="number"
              onChange={(event) => setWeightInput(event.target.value)}
              onBlur={handleInputBlur}
              ref={inputRef}
              unit="kg"
              disabled={!isAdding}
            />
            <Button active={isAdding} onClick={handleButtonClick}>
              {isAdding ? "Salvar" : "Adicionar"}
            </Button>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <Link
        to="details"
        className="absolute bottom-0 m-auto my-4 hover:underline "
      >
        Ver mais
      </Link>
    </div>
  );
};

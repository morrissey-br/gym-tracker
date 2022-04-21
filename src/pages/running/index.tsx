import { useState } from "react";
import { Button } from "../../components/Button";
import { Display } from "../../components/Display";
import { EditDisplay } from "../../components/EditDisplay";
import { TimeEditDisplay } from "../../components/TimeEditDisplay";

export default () => {
  const [isAdding, setIsAdding] = useState(false);
  const [distanceInput, setDistanceInput] = useState("0");
  const [timeInput, setTimeInput] = useState("0");

  const handleButtonClick = () => {
    setIsAdding((isAdding) => !isAdding);
  };
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-xl">Resumo da semana</span>
        <div className="flex gap-2">
          <Display
            label="Distância total"
            value="43.00"
            unit="km"
            percentage={10}
          />
          <Display label="Tempo total" value="1:24:00" percentage={2} />
          <Display
            label="Ritmo médio"
            value="7:34"
            unit="min/km"
            percentage={-1}
          />
        </div>

        <span className="text-xl">Última corrida</span>
        <div className="flex justify-between gap-2">
          <EditDisplay
            label="Distância"
            type="number"
            value={distanceInput}
            unit="km"
            noBorder
            disabled={!isAdding}
            onChange={setDistanceInput}
          />
          <TimeEditDisplay
            label="Tempo"
            value={timeInput}
            noBorder
            disabled={!isAdding}
            onChange={setTimeInput}
          />
        </div>
        <Button active={isAdding} onClick={handleButtonClick}>
          {isAdding ? "Salvar" : "Adicionar"}
        </Button>
      </div>
    </div>
  );
};

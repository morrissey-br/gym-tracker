import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Display } from "../../components/Display";

export default () => {
  const [isAdding, setIsAdding] = useState(false);
  const handleButtonClick = () => {};
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <span className="text-xl">Última corrida</span>
      <div className="flex gap-2">
        <Display label="Distância" value="3.00" unit="km" />
        <Display label="Tempo" value="24:00" unit="min" />
        <Display label="Ritmo" value="6:21" unit="min/km" />
      </div>
      <Button active={isAdding} onClick={handleButtonClick}>
        {isAdding ? "Salvar" : "Adicionar"}
      </Button>
      <span className="text-xl">Resumo da semana</span>
      <div className="flex justify-between gap-2">
        <Display label="Distância total" value="43.00" unit="km" noBorder />
        <Display label="Ritmo médio" value="6:10" unit="min/km" noBorder />
      </div>
    </div>
  );
};

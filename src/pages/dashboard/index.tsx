import { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";
export default () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputWeight, setInputWeight] = useState(0);

  const handleButtonClick = () => {
    if (isAdding) {
      console.log("Saving");
    }
    setIsAdding((isAdding) => !isAdding);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputWeight(Number(event.target.value));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black">
      <div className="w-48">
        <div
          className={
            "flex flex-col justify-center items-center rounded-md p-3 mb-2 transition-colors " +
            (isAdding ? "bg-white" : "bg-black")
          }
        >
          <Text color={isAdding ? "black" : "white"}>Peso Atual</Text>
          <div>
            {!isAdding && (
              <Text style="display" color={isAdding ? "black" : "white"}>
                75.5
              </Text>
            )}
            {isAdding && (
              <Input
                name="inputWeight"
                type="number"
                value={inputWeight}
                onChange={handleInputChange}
              />
            )}
            <Text style="caption" color={isAdding ? "black" : "white"}>
              kg
            </Text>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-stretch">
          <Button onClick={handleButtonClick} active={isAdding}>
            {isAdding ? "Salvar" : "Adicionar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

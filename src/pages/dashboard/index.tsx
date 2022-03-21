import { ChangeEvent, useState } from "react";
export default () => {
  const [isAdding, setIsAdding] = useState(false);
  const [weight, setWeight] = useState(75.5);

  const handleButtonClick = () => {
    if (isAdding) {
      console.log("Saving");
    }
    setIsAdding((isAdding) => !isAdding);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black">
      <span className="text-xl text-white text-center">Peso Atual</span>
      <div className="flex items-end">
        <div className="relative flex">
          <span
            aria-hidden="true"
            className="text-6xl font-light text-white opacity-0"
          >
            {weight}
          </span>
          <input
            type="number"
            value={weight}
            onChange={handleInputChange}
            max={200}
            min={0}
            step={0.1}
            className="absolute h-full w-full left-0 top-0 border-none outline-none text-white text-6xl font-light bg-transparent text-right appearance-none"
          />
        </div>
        <span className="text-white">kg</span>
      </div>
      <button
        className="p-2 border rounded-lg hover:bg-white hover:text-black hover:transition-colors"
        onClick={handleButtonClick}
      >
        Adicionar
      </button>
    </div>
  );
};

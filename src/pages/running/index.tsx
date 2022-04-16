import { FaArrowUp } from "react-icons/fa";

export default () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex gap-2">
        <div className="flex flex-col justify-center items-center gap-1 border rounded p-2">
          <span>Tempo total</span>
          <div className="flex justify-center items-end gap-1">
            <span className="text-4xl">25:00</span>
            <span>min</span>
          </div>
          <div className="flex justify-center items-center text-success">
            <FaArrowUp />
            <span>12%</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 border rounded p-2">
          <span>Distância</span>
          <div className="flex justify-center items-end gap-1">
            <span className="text-4xl">3.00</span>
            <span>km</span>
          </div>
          <div className="flex justify-center items-center text-success">
            <FaArrowUp />
            <span>12%</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 border rounded p-2">
          <span>Ritmo</span>
          <div className="flex justify-center items-end gap-1">
            <span className="text-4xl">{(25 / 3).toFixed(2)}</span>
            <span>min/km</span>
          </div>
          <div className="flex justify-center items-center text-success">
            <FaArrowUp />
            <span>12%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import { FaArrowUp } from "react-icons/fa";

export default () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1>Running</h1>
      <div className="flex gap-2">
        <div className="flex justify-center items-center gap-2">
          <span>25:00min</span>
          <div className="flex justify-center items-center">
            <FaArrowUp />
            <span>12%</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>3.00km</span>
          <div className="flex justify-center items-center">
            <FaArrowUp />
            <span>12%</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>{(25 / 3).toFixed(2)}min/km</span>
          <div className="flex justify-center items-center">
            <FaArrowUp />
            <span>12%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { AutoGrowInput } from "./AutoGrowInput";

type Props = {
  label: string;
  value: string;
  percentage?: number;
  noBorder?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export const TimeEditDisplay = ({
  label,
  value,
  percentage,
  noBorder,
  disabled,
  onChange,
}: Props) => {
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    onChange(`${minutes}:${seconds}`);
  }, [minutes, seconds]);

  return (
    <div
      className={`flex flex-col justify-center items-center gap-1 p-2 ${
        noBorder ? "" : "border rounded"
      }`}
    >
      <span>{label}</span>
      <div className="flex justify-center items-center">
        <AutoGrowInput
          type="number"
          value={minutes}
          onChange={(event) => setMinutes(event.target.value)}
        />
        <span className="text-6xl font-light bg-transparent text-right">:</span>
        <AutoGrowInput
          type="number"
          value={minutes}
          onChange={(event) => setMinutes(event.target.value)}
        />
      </div>
      <div className="flex justify-center items-center text-danger">
        {percentage && Number(percentage.toFixed(2)) !== 0 && (
          <div
            className={`flex justify-center items-center ${
              percentage > 0 ? "text-success" : "text-danger"
            }`}
          >
            {percentage > 0 && <FaArrowUp />}
            {percentage < 0 && <FaArrowDown />}
            <span>{percentage.toFixed(0)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

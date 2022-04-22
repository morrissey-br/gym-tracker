import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { AutoGrowInput } from "./AutoGrowInput";

export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

type Props = {
  label: string;
  value: Time;
  percentage?: number;
  noBorder?: boolean;
  disabled?: boolean;
  onChange: (value: Time) => void;
};

export const TimeEditDisplay = ({
  label,
  value,
  percentage,
  noBorder,
  disabled,
  onChange,
}: Props) => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    setHours(value.hours.toString().padStart(2, "0"));
    setMinutes(value.minutes.toString().padStart(2, "0"));
    setSeconds(value.seconds.toString().padStart(2, "0"));
  }, [hours, minutes, seconds]);

  return (
    <div
      className={`flex flex-col justify-center items-center gap-1 p-2 ${
        noBorder ? "" : "border rounded"
      }`}
    >
      <span>{label}</span>
      <div className="flex justify-center items-top">
        <div className="relative flex">
          <span aria-hidden="true" className="text-6xl font-light opacity-0">
            {"00"}
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={hours}
            onChange={(event) => setHours(event.target.value)}
            disabled={disabled}
            max={59}
            min={0}
            step={1}
            className="absolute h-full w-full left-0 top-0 border-none outline-none disabled:opacity-100 text-6xl font-light bg-transparent text-right appearance-none"
          />
        </div>
        <span className="text-6xl font-light bg-transparent">:</span>
        <div className="relative flex">
          <span aria-hidden="true" className="text-6xl font-light opacity-0">
            {"00"}
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={minutes}
            onChange={(event) => setMinutes(event.target.value)}
            disabled={disabled}
            max={59}
            min={0}
            step={1}
            className="absolute h-full w-full left-0 top-0 border-none outline-none disabled:opacity-100 text-6xl font-light bg-transparent text-right appearance-none"
          />
        </div>
        <span className="text-6xl font-light bg-transparent">:</span>
        <div className="relative flex">
          <div className="relative flex">
            <span aria-hidden="true" className="text-6xl font-light opacity-0">
              {"00"}
            </span>
            <input
              type="number"
              inputMode="numeric"
              value={seconds}
              onChange={(event) => setSeconds(event.target.value)}
              disabled={disabled}
              max={59}
              min={0}
              step={1}
              className="absolute h-full w-full left-0 top-0 border-none outline-none disabled:opacity-100 text-6xl font-light bg-transparent text-right appearance-none"
            />
          </div>
        </div>
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

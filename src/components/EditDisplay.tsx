import { HTMLInputTypeAttribute } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { AutoGrowInput } from "./AutoGrowInput";

type Props = {
  label: string;
  value: string | number;
  unit?: string;
  percentage?: number;
  noBorder?: boolean;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
};

export const EditDisplay = ({
  label,
  value,
  unit,
  percentage,
  noBorder,
  disabled,
  type,
  onChange,
}: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-1  p-2 ${
        noBorder ? "" : "border rounded"
      }`}
    >
      <span>{label}</span>
      <div className="flex justify-center items-end gap-1">
        <AutoGrowInput
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
          unit={unit}
          type={type}
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

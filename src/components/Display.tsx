import { FaArrowDown, FaArrowUp } from "react-icons/fa";

type Props = {
  label: string;
  value: string | number;
  unit?: string;
  percentage?: number;
  noBorder?: boolean;
};

export const Display = ({
  label,
  value,
  unit,
  percentage,
  noBorder,
}: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-1  p-2 ${
        noBorder ? "" : "border rounded"
      }`}
    >
      <span>{label}</span>
      <div className="flex justify-center items-end gap-1">
        <span className="text-4xl">{value}</span>
        {unit && <span>{unit}</span>}
      </div>
      <div className="flex justify-center items-center text-danger">
        {percentage && Number(percentage.toFixed(2)) !== 0 && (
          <div className="flex justify-center items-center text-success">
            {percentage > 0 && <FaArrowUp />}
            {percentage < 0 && <FaArrowDown />}
            <span>{percentage.toFixed(0)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

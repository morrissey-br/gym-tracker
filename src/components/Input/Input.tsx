import { ChangeEvent, InputHTMLAttributes } from "react";
import Text from "../Text";

type Props = {
  label?: string;
  placeholder?: string;
  name: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  label,
  placeholder,
  name,
  type,
  value,
  onChange,
}: Props) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block px-2 pb-2">
          <Text color="dark">{label}</Text>
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full p-2 border-none outline-none shadow-inner bg-light rounded-lg placeholder-dark"
      />
    </div>
  );
};

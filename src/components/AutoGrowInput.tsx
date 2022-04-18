import React, { InputHTMLAttributes } from "react";

type Props = {
  unit?: string;
};

export const AutoGrowInput = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & Props
>((props, ref) => {
  return (
    <div className="flex items-end pr-3">
      <div className="relative flex">
        <span aria-hidden="true" className="text-6xl font-light opacity-0 pl-3">
          {props.value ? props.value : "0"}
        </span>
        <input
          ref={ref}
          type="number"
          inputMode="decimal"
          className="absolute h-full w-full left-0 top-0 border-none outline-none disabled:opacity-100 text-6xl font-light bg-transparent text-right appearance-none"
          {...props}
        />
      </div>
      {props.unit && <span>{props.unit}</span>}
    </div>
  );
});

import { FaSpinner } from "react-icons/fa";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <FaSpinner className="text-4xl text-white animate-spin" />
    </div>
  );
};

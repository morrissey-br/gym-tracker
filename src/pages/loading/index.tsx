import { FaSpinner } from "react-icons/fa";

export default () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <FaSpinner className="text-4xl text-white animate-spin" />
    </div>
  );
};

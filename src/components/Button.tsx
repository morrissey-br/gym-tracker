type Props = {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ active, ...props }: Props) => {
  return (
    <button
      className={`mt-3 p-2 w-full border border-white rounded-lg transition-colors ${
        active ? "bg-white text-black" : "hover:bg-white hover:text-black"
      }`}
      {...props}
    />
  );
};

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
};

export const Button = ({ children, onClick, active }: Props) => {
  const className =
    "p-2 border rounded-lg hover:bg-white hover:text-black hover:transition-colors" +
    (active ? " bg-white text-black" : "bg-transparent text-white");

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

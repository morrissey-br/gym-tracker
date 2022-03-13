type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  const className =
    "p-2 border rounded-lg text-white bg-transparent hover:bg-white hover:text-black hover:transition-colors";

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

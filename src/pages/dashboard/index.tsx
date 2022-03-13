import Button from "../../components/Button";
import Text from "../../components/Text";
export default () => {
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center bg-black">
      <div className="flex flex-col w-36 justify-center items-center">
        <Text color="white">Peso Atual</Text>
        <div className="relative flex flex-col">
          <Text style="display" color="white">
            75.5
          </Text>
          <div className="absolute right-0 bottom-0 translate-x-full">
            <Text style="caption" color="white">
              kg
            </Text>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-stretch mt-2">
          <Button onClick={() => {}}>Adicionar</Button>
        </div>
      </div>
    </div>
  );
};

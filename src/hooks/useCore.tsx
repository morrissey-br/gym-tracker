import { createContext, ReactNode, useContext } from "react";
import { CoreService, FirebaseCoreService } from "../core";

const defaultCoreContext: CoreService = FirebaseCoreService();

const Context = createContext(defaultCoreContext);

export const CoreProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value?: typeof defaultCoreContext;
}) => {
  return (
    <Context.Provider value={value || defaultCoreContext}>
      {children}
    </Context.Provider>
  );
};

export const useCore = () => {
  return useContext(Context);
};

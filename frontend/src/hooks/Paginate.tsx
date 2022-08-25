/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useState,
} from "react";

interface PaginateContextData {
  index: number | undefined;
  handleSetIndex: (pageIndex: number) => void;
}

interface PaginateProviderProps {
  children: ReactNode;
}

const PaginateContext = createContext<PaginateContextData>(
  {} as PaginateContextData
);

function PaginateProvider({ children }: PaginateProviderProps): JSX.Element {
  const [index, setIndex] = useState(0);

  const handleSetIndex = useCallback((pageIndex: number) => {
    setIndex(pageIndex);
  }, []);

  return (
    <PaginateContext.Provider
      value={{
        index,
        handleSetIndex,
      }}
    >
      {children}
    </PaginateContext.Provider>
  );
}

function usePaginate(): PaginateContextData {
  const context = useContext(PaginateContext);

  if (!context) {
    throw new Error("usePaginate should be used within a PaginateProvider");
  }

  return context;
}

export { PaginateProvider, usePaginate };

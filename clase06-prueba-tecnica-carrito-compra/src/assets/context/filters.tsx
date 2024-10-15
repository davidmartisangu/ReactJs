import { createContext, ReactNode, useState } from "react";

interface FiltersState {
    category: string;
    minPrice: number;
  }
  
interface FilterContextType {
filters: FiltersState;
setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

interface FilterProviderProps {
    children: ReactNode;
  }

// 1. Crear el contexto (este es el que tenemos que consumir)
export const FilterContext = createContext<FilterContextType | undefined>(undefined);

// 2. Crear el provider, para proveer el contexto
export function FilterProvider({children}:FilterProviderProps){
    const [filters, setFilters] = useState({
    category:"all",
    minPrice:0
  })
    return(
        <FilterContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FilterContext.Provider>
    )
}
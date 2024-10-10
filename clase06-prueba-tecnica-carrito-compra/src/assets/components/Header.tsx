import {Filters} from "./Filters"

interface HeaderProps {
    changeFilters: React.Dispatch<React.SetStateAction<{ minPrice: number; category: string }>>
  }

export function Header ({changeFilters}:HeaderProps){
    return (
        <header>
            <h1>React Shop</h1>
            <Filters onChange={changeFilters}/>
        </header>
    )
}
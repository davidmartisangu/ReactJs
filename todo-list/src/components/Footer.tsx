import { FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted:()=>void
    handleFilterChange: (filer: FilterValue)=>void
}

export const Footer:React.FC<Props> = ({
    activeCount = 0,
    completedCount  = 0,
    onClearCompleted,
    filterSelected,
    handleFilterChange})=>{

    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                handleFilterChange={handleFilterChange}
            />

            {
                completedCount>0 && (
                    <button className="clear-completed"
                    onClick={onClearCompleted}>
                        Borrar completados
                    </button>
                )
            }
        </footer>
    )
}

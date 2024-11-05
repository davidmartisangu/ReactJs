import { FILTERS_BUTONS } from "../consts"
import { FilterValue } from "../types"

interface Props {
    handleFilterChange:(filter: FilterValue)=>void
    filterSelected: FilterValue;
}

export const Filters:React.FC<Props> = ({filterSelected, handleFilterChange})=>{
    return(
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTONS).map(([key, {href, literal}]) =>{
                    const isSelected = key === filterSelected
                    const className = isSelected ? "selected" : ""

                    return(
                        <li key={key}>
                            <a href={href}
                                className={className}
                                onClick={(event)=>{
                                    event.preventDefault()
                                    handleFilterChange(key as FilterValue)
                                }}
                                >
                                    {literal}
                                </a>
                        </li>
                    )
                })
            }
                
        </ul>
    )
}

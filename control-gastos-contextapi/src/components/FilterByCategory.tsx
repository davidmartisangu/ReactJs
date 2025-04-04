import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {

    const {dispatch} = useBudget()

    const handleChange =(e: React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch({type:"add-filter-id", payload:{id: e.target.value}})
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-10">
            <form>
                <div className=" flex flex-col gap-5 md:flex-row md:items-center">
                    <label htmlFor="category">Filtrar Gastos:</label>
                    <select 
                        id="category"
                        className="bg-slate-100 p-3 flex-1 rounded"
                        onChange={handleChange}
                    >
                        <option value="">Todas las categorias</option>
                        {categories.map((category)=>(
                            <option 
                                value={category.id}
                                key={category.id}
                                >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        
        </div>
    )
}

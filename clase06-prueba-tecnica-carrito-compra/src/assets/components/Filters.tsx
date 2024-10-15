import { useId, useState } from "react"
import "./Filters.css"
import {products} from "../../mocks/products.json"
import { useFilters } from "../../hooks/useFilters"

const allCategories = products.map(product=>product.category)

const uniqueCategory = Array.from(new Set(allCategories))

export function Filters () {
    const{filters, setFilters} = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const [category, setCategory] = useState("all")

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setFilters(prevState =>({
            ...prevState,
            minPrice: Number(event.target.value)     // convertir el valor a número
        }))
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        setFilters(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}/>
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    {uniqueCategory.map(categoria =>(
                        <option key={categoria} value={categoria}>{categoria}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}

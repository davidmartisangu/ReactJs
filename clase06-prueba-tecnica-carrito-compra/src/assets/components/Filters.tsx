import { useState } from "react"
import "./Filters.css"
import {products} from "../../mocks/products.json"

interface FiltersProps {
    onChange: React.Dispatch<React.SetStateAction<{ minPrice: number; category: string }>>
  }

const allCategories = products.map(product=>product.category)

const uniqueCategory = Array.from(new Set(allCategories))

export function Filters ({onChange}:FiltersProps) {
    const [minPrice, setMinPrice] = useState(0)
    const [category, setCategory] = useState("all")

    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setMinPrice(Number(event.target.value))  // convertir el valor a número
        onChange(prevState =>({
            ...prevState,
            minPrice: Number(event.target.value)     // convertir el valor a número
        }))
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        setCategory(event.target.value)
        onChange(prevState =>({
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
                    id="price"
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={minPrice}/>
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    {uniqueCategory.map(categoria =>(
                        <option key={categoria} value={categoria}>{categoria}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}

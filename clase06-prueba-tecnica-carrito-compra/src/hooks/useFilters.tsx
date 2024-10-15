import { useContext } from "react"
import { Product as productsProps} from "../assets/interfaces/Product"
import { FilterContext } from "../assets/context/filters"

export function useFilters(){
    // const [filters, setFilters] = useState({
    //   category:"all",
    //   minPrice:0
    // })
    const {filters, setFilters} = useContext(FilterContext)
  
    const filterProdcuts = (products:productsProps[]):productsProps[] =>{
      return products.filter(product=>{
        return (
          product.price >= filters.minPrice &&
          (
            filters.category === "all" ||
            product.category === filters.category
          )
        )
      })
    }
    return {filters, setFilters, filterProdcuts}
  }
  
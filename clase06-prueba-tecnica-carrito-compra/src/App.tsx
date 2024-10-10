import { useState } from "react"
import {Products, productsProps} from "./assets/components/Products"
import {products} from "./mocks/products.json"
import {Header} from "./assets/components/Header"

function App() {

  const [filters, setFilters] = useState({
    category:"all",
    minPrice:50})

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

  const filteredProducts = filterProdcuts(products)

  return (
    <>
      <Header changeFilters= {setFilters}/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App

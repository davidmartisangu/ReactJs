import {products as initialProducts} from "./mocks/products.json"
import {Products} from "./assets/components/Products"
import {Header} from "./assets/components/Header"
import { Footer } from "./assets/components/Footer"
import { useFilters } from "./hooks/useFilters"
import { useState } from "react"
import { Cart } from "./assets/components/Carrito"
import { CartContextProvider } from "./assets/context/cart"

function App() {
  const[products] = useState(initialProducts)
  const {filterProdcuts} = useFilters()
  const filteredProducts = filterProdcuts(products)

  return (
    <CartContextProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}/>
      <Footer/>
    </CartContextProvider>
  )
}

export default App

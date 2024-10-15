import "./Products.css"
import  {AddToCartIcon, RemoveFromCartIcon} from "./Icons.js"
import { useCart } from "../../hooks/useCart.js"
import {Product as productsProps} from "../interfaces/Product.js"

//Interfaz para las props que recibe el comonente
interface ProductsComponentProps{
    products: productsProps[]
}

export function Products({products}:ProductsComponentProps){
    const{addToCart, cart, removeFromCart} = useCart()

    const productInCart = (product:productsProps) =>{
        return cart.some(item=>item.id ===product.id)
    }

    return (        
        <main className="products">
            <ul>
                {products.slice(0,10).map(product=>{
                    const isProductInCart = productInCart(product)
                    return(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - {product.price}
                        </div>
                        <div>
                            <button
                            style={{backgroundColor: isProductInCart ? "red" : "blue"}}
                            onClick={()=>{
                                isProductInCart
                                ? removeFromCart(product)
                                : addToCart(product)
                            }}
                            >
                                {
                                    isProductInCart
                                    ? <RemoveFromCartIcon />
                                    : <AddToCartIcon />
                                }
                            </button>
                        </div>
                    </li>
                    )
                }
                )}
            </ul>
        </main>
    )
}
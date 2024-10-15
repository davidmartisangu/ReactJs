import { createContext, useReducer } from "react";
import {Product} from "../interfaces/Product"
import {cartReducer, cartInitialState} from "../../reducers/cartReducer"

// 1. Crear el contexto (este es el que tenemos que consumir)
export const CartContext = createContext<{
    cart:Product[];
    addToCart:(product:Product)=>void;
    clearCart:()=>void;
    removeFromCart:(product:Product)=>void;
} | undefined>(undefined)

function useCartReducer(){
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product:Product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = (product:Product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch ({
        type: 'CLEAR_CART'
    })

    return {state, addToCart, removeFromCart, clearCart}

}

// 2. Crear el provider, para proveer el contexto
export function CartContextProvider ({children}:{children: React.ReactNode}){
    const {state, addToCart, removeFromCart, clearCart} = useCartReducer()
    
    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
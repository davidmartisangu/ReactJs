import {Product} from "../assets/interfaces/Product"

// Definir la interfaz para accciones del reducer
interface Actions{
    type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'CLEAR_CART';
    payload?:any
}

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart') || '[]')

export const updateLocalStorage = (state:Product[]) =>{
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state: Product[] , action:Actions):Product[] =>{
    switch(action.type){
        case 'ADD_TO_CART': {
            const {id} =action.payload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if(productInCartIndex >=0){
                const newState = structuredClone(state)
                if(newState[productInCartIndex].quantity){
                    newState[productInCartIndex].quantity += 1
                } else{
                    newState[productInCartIndex].quantity = 1
                }
                updateLocalStorage(newState)
                return newState
            }
            
            const newState = [
                ...state,
                {
                    ...action.payload,
                    quantity: 1
                }
            ]
            updateLocalStorage(newState)
            return newState

        }

        case 'REMOVE_FROM_CART':{
            const{id} = action.payload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case 'CLEAR_CART':{
            const emptyCart: Product[]=[]
            updateLocalStorage(emptyCart)
            return emptyCart
        }
        default:
            return state
    }
    
}
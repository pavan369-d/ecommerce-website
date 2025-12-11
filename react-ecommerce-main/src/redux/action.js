import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART } from "./constant"

export const addToCart=(data)=>{
    console.warn('action is called',data)
    return {
        type:ADD_TO_CART,
        data
    }
}

export const removeToCart=(data)=>{
    console.warn('action is Removecart',data)
    return {
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyToCart=(data)=>{
    console.warn('action is Emptycart')
    return {
        type:EMPTY_TO_CART,
        data
    }
}
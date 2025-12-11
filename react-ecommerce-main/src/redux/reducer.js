import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART } from "./constant";
export const cartData=(data=[],action)=>{
    
    let remainingItems;
    switch(action.type){
        case ADD_TO_CART:
            console.warn('ADD_TO_CART condition',action)
            return [action.data,...data];
        case REMOVE_TO_CART:
            console.warn('REMOVE_TO_CART',action);
            // data.length=data.length?data.length-1:[];
            remainingItems= data.filter((item)=>item.id!==action.data)
            return [...remainingItems]
        case EMPTY_TO_CART:
            console.log('EMPTY_TO_CART')
            data=[];
            return [...data]
     
        default:
            return data
    }
    
}
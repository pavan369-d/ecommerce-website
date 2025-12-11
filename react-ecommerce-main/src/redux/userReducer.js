import { USER_LOGIN } from "./constant";


export const userData=(data=[],action)=>{
    switch(action.type){
            case USER_LOGIN:
                console.log('USER_LOGIN',action)
                return [...action.data];
     
        default: 
            return data
    }
    
}
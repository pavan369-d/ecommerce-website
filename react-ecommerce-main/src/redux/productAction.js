import { PRODUCT_LIST } from "./constant";

export const productList=()=>{
  console.log('product list action called')
    return {
        type:PRODUCT_LIST,
    }
}




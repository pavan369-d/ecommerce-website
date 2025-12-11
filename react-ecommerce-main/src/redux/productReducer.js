import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";


export const productData = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        loading: true
      };

    case SET_PRODUCT_LIST:
      return {
        loading: false,
        products: action.data
      };

    default:
      return state;
  }
};

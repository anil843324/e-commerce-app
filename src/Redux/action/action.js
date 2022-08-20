import { ADD_TO_CART , REMOVE_FROM_CART ,INCREMENT_QUANTITY ,DECREMENT_QUANTITY } from "../constant/constant"

export const addToCart = (product) => {

  return {
    type: ADD_TO_CART,
    product,
  };
};


export const removeFromCart = (p_Id) => {

  return {
    type: REMOVE_FROM_CART,
    p_Id,
  };
};

export const incrementQuantity = (p_I_Id) => {

  return {
    type: INCREMENT_QUANTITY,
    p_I_Id,
  };
};

export const decrementQuantity = (p_D_Id) => {

  return {
    type: DECREMENT_QUANTITY,
    p_D_Id,
  };
};













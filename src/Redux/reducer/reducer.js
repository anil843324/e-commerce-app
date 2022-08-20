import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../constant/constant"

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // add to product to cart
      let checkD = data && data.find((ele) => ele.id === action.product.id)
      if (checkD) {
        alert("already added")
        return [...data];
      }
      return [action.product, ...data];
    case REMOVE_FROM_CART:
      // Remove product from  cart
      
      let filterData = data.filter((ele) => ele.id !== action.p_Id)
      return [...filterData];

    case INCREMENT_QUANTITY:
      // increment quantity to product in cart
      let filterI = data.map((ele) => {
        if (ele.id === action.p_I_Id) {
          return { ...ele, quantity: ele.quantity <10 ? ele.quantity+1 : ele.quantity   };
        }
        return ele;
      });

      return [...filterI];
    case DECREMENT_QUANTITY:
      // decrement quantity to product in cart
      let filterD = data.map((ele) => {
        if (ele.id === action.p_D_Id) {
          return { ...ele, quantity: ele.quantity >1 ? ele.quantity-1 : ele.quantity   };
        }
        return ele;
      });

      return [...filterD];
    default:
      // no case matched
      return data;
  }
};

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "./action-types/cart-actions";

//add item to cart: Action
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};
//Remove item from cart: Action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//Subtract Quantity from item: Action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//Add Quantity from item: Action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};

import { initialState } from "./_initial-state";
import { CartStateType, CartActions, CartActionsTypes } from "./_types";

export const cartReducer = (state: CartStateType, action: CartActions) => {
  switch (action.type) {
    case CartActionsTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case CartActionsTypes.CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

"use client";
import { useReducer } from "react";
import { AsteroidCard } from "@shared/types";
import { CartContext, CartDispatchContext } from "./cart-context";
import { cartReducer } from "./cart-reducer";
import { CartActionsTypes } from "./_types";
import { initialState } from "./_initial-state";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (asteroid: AsteroidCard) => {
    dispatch({
      type: CartActionsTypes.ADD_TO_CART,
      payload: asteroid,
    });
  };

  const clearCart = () => {
    dispatch({
      type: CartActionsTypes.CLEAR_CART,
    });
  };

  const dispatchValue = {
    addToCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatchValue}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

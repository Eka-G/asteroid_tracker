"use client";
import { createContext, useContext } from "react";
import { AsteroidProps } from "@shared/types";
import { initialState } from "./_initial-state";
import { CartStateType, DispatchValueType } from "./_types";

export const CartContext = createContext<CartStateType>(initialState);

export const CartDispatchContext = createContext<DispatchValueType>({
  addToCart: (asteroid: AsteroidProps) => {},
  clearCart: () => {},
});

export const useCart = () => {
  return useContext(CartContext);
};

export const useCartDispatch = () => {
  return useContext(CartDispatchContext);
};

import { AsteroidProps, ActionMap } from "@shared/types";

export type CartStateType = {
  cartItems: AsteroidProps[];
  isLoading: boolean;
  cartError: string | null;
};

export enum CartActionsTypes {
  ADD_TO_CART = "ADD_TO_CART",
  CLEAR_CART = "CLEAR_CART",
}

type CartPayload = {
  [CartActionsTypes.ADD_TO_CART]: AsteroidProps;
  [CartActionsTypes.CLEAR_CART]: undefined;
};

export type CartActions = ActionMap<CartPayload>[keyof ActionMap<CartPayload>];

export type DispatchValueType = {
  addToCart: (asteroid: AsteroidProps) => void;
  clearCart: () => void;
};

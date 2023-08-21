import { initialState } from "./_initial-state";
import {
  CatalogStateType,
  CatalogActions,
  CatalogActionsTypes,
} from "./_types";

export const catalogReducer = (
  state: CatalogStateType,
  action: CatalogActions,
) => {
  switch (action.type) {
    case CatalogActionsTypes.FILL:
      return {
        ...state,
        asteroids: [...state.asteroids, ...action.payload],
      };
    case CatalogActionsTypes.CLEAR:
      return initialState;
    default:
      return state;
  }
};

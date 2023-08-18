"use client";
import { useReducer, useCallback } from "react";
import {
  CatalogContext,
  CatalogDispatchContext,
  catalogReducer,
  CatalogActionsTypes,
} from "@store/catalog";
import { Asteroid } from "@/shared/types";
import { initialState } from "./_initial-state";

export default function CatalogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [catalog, dispatch] = useReducer(catalogReducer, initialState);

  const fillCatalog = useCallback(
    (asteroids: Asteroid[]) => {
      dispatch({
        type: CatalogActionsTypes.FILL,
        payload: asteroids,
      });
    },
    [dispatch],
  );

  const clearCatalog = () => {
    dispatch({
      type: CatalogActionsTypes.CLEAR,
    });
  };

  const dispatchValue = {
    fillCatalog,
    clearCatalog,
  };

  return (
    <CatalogContext.Provider value={catalog}>
      <CatalogDispatchContext.Provider value={dispatchValue}>
        {children}
      </CatalogDispatchContext.Provider>
    </CatalogContext.Provider>
  );
}

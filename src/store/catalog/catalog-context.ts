"use client";
import { createContext, useContext } from "react";
import { initialState } from "./_initial-state";
import { CatalogStateType, DispatchValueType } from "./_types";

export const CatalogContext = createContext<CatalogStateType>(initialState);

export const CatalogDispatchContext = createContext<DispatchValueType>({
  fillCatalog: (date: string) => {},
  clearCatalog: () => {},
});

export const useCatalog = () => {
  return useContext(CatalogContext);
};

export const useCatalogDispatch = () => {
  return useContext(CatalogDispatchContext);
};

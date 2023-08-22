import { AsteroidInCatalog, ActionMap } from "@shared/types";

export type CatalogStateType = {
  asteroids: AsteroidInCatalog[];
  isLoading: boolean;
  catalogError: string | null;
};

export enum CatalogActionsTypes {
  FILL = "FILL_CATALOG",
  CLEAR = "CLEAR_CATALOG",
}

type CatalogPayload = {
  [CatalogActionsTypes.FILL]: AsteroidInCatalog[];
  [CatalogActionsTypes.CLEAR]: undefined;
};

export type CatalogActions =
  ActionMap<CatalogPayload>[keyof ActionMap<CatalogPayload>];

export type DispatchValueType = {
  fillCatalog: (date: string) => void;
  clearCatalog: () => void;
};

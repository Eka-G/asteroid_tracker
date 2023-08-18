import { Asteroid } from "@/shared/types";

export type CatalogStateType = {
  asteroids: Asteroid[];
  isLoading: boolean;
  catalogError: string | null;
};

export enum CatalogActionsTypes {
  FILL = "FILL_CATALOG",
  CLEAR = "CLEAR_CATALOG",
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type CatalogPayload = {
  [CatalogActionsTypes.FILL]: Asteroid[];
  [CatalogActionsTypes.CLEAR]: undefined;
};

export type CatalogActions =
  ActionMap<CatalogPayload>[keyof ActionMap<CatalogPayload>];

export type DispatchValueType = {
  fillCatalog: (asteroids: Asteroid[]) => void;
  clearCatalog: () => void;
};

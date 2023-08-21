"use client";
import { useReducer, useCallback } from "react";
import { AxiosResponse } from "axios";
import { axios, type CatalogResponce } from "@api";
import { CatalogContext, CatalogDispatchContext } from "./catalog-context";
import { catalogReducer } from "./catalog-reducer";
import { CatalogActionsTypes } from "./_types";
import { initialState } from "./_initial-state";

export default function CatalogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [catalog, dispatch] = useReducer(catalogReducer, initialState);

  const fillCatalog = useCallback(
    async (date: string) => {
      const response: AxiosResponse<CatalogResponce, any> = await axios.get(
        "/feed",
        {
          params: {
            start_date: date,
            end_date: date,
            api_key: process.env.NEXT_PUBLIC_API_KEY,
          },
        },
      );

      const data = await response.data.near_earth_objects[date];

      const asteroids = data.map((asteroid) => {
        return {
          id: asteroid.id,
          name: asteroid.name.substring(
            asteroid.name.indexOf("(") + 1,
            asteroid.name.indexOf(")"),
          ),
          distanceKm: Number(
            asteroid.close_approach_data[0].miss_distance.kilometers,
          ),
          distanceLunar: Number(
            asteroid.close_approach_data[0].miss_distance.lunar,
          ),
          size: asteroid.estimated_diameter.meters.estimated_diameter_max,
          date: asteroid.close_approach_data[0].close_approach_date,
          isDangerous: asteroid.is_potentially_hazardous_asteroid,
        };
      });

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

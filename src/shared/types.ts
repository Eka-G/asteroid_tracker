export interface AsteroidBaseParams {
  id: string;
  name: string;
  size: number;
  isDangerous: boolean;
}

/* Catalog */
export interface AsteroidInCatalog extends AsteroidBaseParams {
  date: string;
  distanceKm: number;
  distanceLunar: number;
}

export interface AsteroidInCatalogProps extends AsteroidInCatalog {
  isDistanceInKm: boolean;
}

export interface AsteroidCardProps {
  info: AsteroidInCatalogProps;
}

/* Single asteroid page */
export interface CloseAproachData {
  date: string;
  distanceKm: number;
  orbitingBody: string;
  speedKmPerH: number;
}

export interface AsteroidSingle extends AsteroidBaseParams {
  closeAproach: CloseAproachData[];
}

/* Common */
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

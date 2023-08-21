export interface Asteroid {
  id: string;
  name: string;
  distanceKm: number;
  distanceLunar: number;
  size: number;
  date: string;
  isDangerous: boolean;
}

export interface AsteroidProps extends Asteroid {
  isDistanceInKm: boolean;
}

export interface AsteroidCardProps {
  info: AsteroidProps;
}

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

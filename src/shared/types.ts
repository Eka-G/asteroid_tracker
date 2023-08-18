export interface Asteroid {
  name: string;
  distanceKm: number;
  distanceLunar: number;
  size: number;
  date: string;
  isDangerous: boolean;
}

interface AsteroidCard extends Asteroid {
  isDistanceInKm: boolean;
}

export interface AsteroidCardProps {
  info: AsteroidCard;
}

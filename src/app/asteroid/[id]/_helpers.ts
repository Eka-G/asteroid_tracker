import { AxiosResponse } from "axios";
import { axios, AsteroidResponce } from "@api";

export const getAsteroidInfo = async (id: string) => {
  const response: AxiosResponse<AsteroidResponce, any> = await axios.get(
    `/neo/${id}`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
      },
    },
  );

  const data = await response.data;

  const closeAproach = data.close_approach_data.map((approach) => {
    return {
      date: approach.close_approach_date,
      distanceKm: Math.round(Number(approach.miss_distance.kilometers)),
      orbitingBody: approach.orbiting_body,
      speedKmPerH: Math.round(
        Number(approach.relative_velocity.kilometers_per_hour),
      ),
    };
  });

  const info = {
    id: data.id,
    name: data.designation,
    size: Math.round(data.estimated_diameter.meters.estimated_diameter_max),
    isDangerous: data.is_potentially_hazardous_asteroid,
    closeAproach,
  };

  return info;
};

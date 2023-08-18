"use client";
import { useState } from "react";
import { AsteroidCard } from "@components";
import data from "@/shared/data.json";
import styles from "./style.module.scss";

const AsteroidList = () => {
  const [isKmDistance, setIsKmDistance] = useState(true);

  const kmClasses = isKmDistance
    ? `${styles.catalog__btn} ${styles.catalog__btn_active}`
    : styles.catalog__btn;
  const lunarClasses = isKmDistance
    ? styles.catalog__btn
    : `${styles.catalog__btn} ${styles.catalog__btn_active}`;

  const asteroidsData = data.near_earth_objects["2021-09-12"];
  const asteroids = asteroidsData.map((asteroid) => {
    return (
      <AsteroidCard
        key={asteroid.id}
        info={{
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
          isDistanceInKm: isKmDistance,
        }}
      />
    );
  });

  const changeToLunar = () => {
    if (isKmDistance) setIsKmDistance(false);
  };
  const changeToKm = () => {
    if (!isKmDistance) setIsKmDistance(true);
  };

  return (
    <section className={styles.catalog}>
      <div className={styles.catalog__heading}>
        <h2 className={styles.catalog__title}>Ближайшие подлёты астероидов</h2>

        <div>
          <button className={kmClasses} onClick={changeToKm}>
            в километрах
          </button>
          <span className={styles.catalog__btn_separator}>|</span>
          <button className={lunarClasses} onClick={changeToLunar}>
            в лунных орбитах
          </button>
        </div>
      </div>

      <ul className={styles.catalog__list}>{asteroids}</ul>
    </section>
  );
};

export default AsteroidList;

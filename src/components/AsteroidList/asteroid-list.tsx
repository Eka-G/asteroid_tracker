"use client";
import { useEffect, useState } from "react";
import { AsteroidCard } from "@components";
import { useCatalog, useCatalogDispatch } from "@store/catalog";
import styles from "./style.module.scss";

const AsteroidList = () => {
  const [isKmDistance, setIsKmDistance] = useState(true);
  const catalog = useCatalog();
  const { fillCatalog } = useCatalogDispatch();

  useEffect(() => {
    fillCatalog();
  }, [fillCatalog]);

  const kmClasses = isKmDistance
    ? `${styles.catalog__btn} ${styles.catalog__btn_active}`
    : styles.catalog__btn;
  const lunarClasses = isKmDistance
    ? styles.catalog__btn
    : `${styles.catalog__btn} ${styles.catalog__btn_active}`;

  const asteroids = catalog.asteroids.map(
    ({ id, name, distanceKm, distanceLunar, size, date, isDangerous }) => {
      return (
        <AsteroidCard
          key={id}
          info={{
            id,
            name,
            distanceKm,
            distanceLunar,
            size,
            date,
            isDangerous,
            isDistanceInKm: isKmDistance,
          }}
        />
      );
    },
  );

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

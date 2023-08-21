"use client";
import { useState } from "react";
import { AsteroidCard } from "@components";
import { Asteroid } from "@shared/types";
import styles from "./style.module.scss";

type AsteroidListProps = {
  list: Asteroid[];
  isInCatalog?: boolean;
};

const AsteroidList = ({ list, isInCatalog }: AsteroidListProps) => {
  const [isKmDistance, setIsKmDistance] = useState(true);

  const kmClasses = isKmDistance
    ? `${styles.catalog__btn} ${styles.catalog__btn_active}`
    : styles.catalog__btn;
  const lunarClasses = isKmDistance
    ? styles.catalog__btn
    : `${styles.catalog__btn} ${styles.catalog__btn_active}`;
  const title = isInCatalog
    ? "Ближайшие подлёты астероидов"
    : "Заказ отправлен!";

  const asteroids = list.map(
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
          isInCatalog={isInCatalog}
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
        <h2 className={styles.catalog__title}>{title}</h2>

        {isInCatalog && (
          <div>
            <button className={kmClasses} onClick={changeToKm}>
              в километрах
            </button>
            <span className={styles.catalog__btn_separator}>|</span>
            <button className={lunarClasses} onClick={changeToLunar}>
              в лунных орбитах
            </button>
          </div>
        )}
      </div>

      <ul className={styles.catalog__list}>{asteroids}</ul>
    </section>
  );
};

export default AsteroidList;

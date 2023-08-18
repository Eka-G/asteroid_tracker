"use client";
import { useState } from "react";
import Image from "next/image";
import { formatDate, getImgParams, getLunarPhraseEnding } from "./_helpers";
import styles from "./style.module.scss";

type AsteroidProps = {
  info: {
    name: string;
    distanceKm: number;
    distanceLunar: number;
    size: number;
    date: string;
    isDangerous: boolean;
    isDistanceInKm: boolean;
  };
};

const AsteroidCard: React.FC<AsteroidProps> = ({
  info: {
    name,
    distanceKm,
    distanceLunar,
    size,
    date,
    isDangerous,
    isDistanceInKm,
  },
}) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const imgParams = getImgParams(size);
  const editedDate = formatDate(date);
  const editedDistance = isDistanceInKm
    ? Math.round(distanceKm) + " км"
    : Math.round(distanceLunar) + getLunarPhraseEnding(distanceLunar);

  const toggleOrder = () => {
    setIsOrdered(!isOrdered);
  };

  return (
    <li className={styles.asteroid}>
      <h3>{editedDate}</h3>
      <div className={styles.asteroid__description}>
        <span className={styles.asteroid__distance}>{editedDistance}</span>
        <Image
          className={styles.asteroid__img}
          width={imgParams.width}
          height={imgParams.height}
          src={imgParams.path}
          alt="asteroid"
        />
        <div className={styles.params}>
          <p className={styles.params__name}>{name}</p>
          <span className={styles.params__size}>
            Ø {Math.round(size) + " м"}
          </span>
        </div>
      </div>

      <div className={styles.order}>
        <button
          className={
            isOrdered
              ? `${styles.order__btn} ${styles.order__btn_ordered}`
              : styles.order__btn
          }
          onClick={toggleOrder}
        >
          {isOrdered ? "В корзине" : "Заказать"}
        </button>
        {isDangerous && <span className={styles.order__warning}>Опасен</span>}
      </div>
    </li>
  );
};

export default AsteroidCard;

"use client";
import { useState } from "react";
import Image from "next/image";
import { AsteroidCardProps } from "@shared/types";
import { getPhraseEnding } from "@shared/helpers";
import { useCartDispatch } from "@store";
import { formatDate, getImgParams } from "./_helpers";
import styles from "./style.module.scss";

interface CardProps extends AsteroidCardProps {
  isInCatalog?: boolean;
}

const AsteroidCard: React.FC<CardProps> = ({
  info: {
    name,
    distanceKm,
    distanceLunar,
    size,
    date,
    isDangerous,
    isDistanceInKm,
  },
  info,
  isInCatalog,
}) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const { addToCart } = useCartDispatch();

  const imgParams = getImgParams(size);
  const editedDate = formatDate(date);
  const editedDistance = isDistanceInKm
    ? Math.round(distanceKm) + " км"
    : Math.round(distanceLunar) +
      getPhraseEnding({
        parameter: distanceLunar,
        firstEnding: "лунная орбита",
        secondEnding: "лунных орбиты",
        thirdEnding: "лунных орбит",
      });

  const handleOrder = () => {
    addToCart(info);
    setIsOrdered(true);
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
        {isInCatalog && (
          <button
            className={
              isOrdered
                ? `${styles.order__btn} ${styles.order__btn_ordered}`
                : styles.order__btn
            }
            onClick={handleOrder}
          >
            {isOrdered ? "В корзине" : "Заказать"}
          </button>
        )}
        {isDangerous && <span className={styles.order__warning}>Опасен</span>}
      </div>
    </li>
  );
};

export default AsteroidCard;

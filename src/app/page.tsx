"use client";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AsteroidList, ShoppingCart } from "@components";
import { getEditedDate, getNextDay } from "@shared/helpers";
import { useCatalog, useCatalogDispatch } from "@store";
import styles from "./page.module.scss";

export default function Home() {
  const { asteroids } = useCatalog();
  const [currentDate, setCurrentDate] = useState(new Date());
  const { fillCatalog } = useCatalogDispatch();

  const loadingText = (
    <p className={styles.page__loading}>Минутку, грузим...</p>
  );

  useEffect(() => {
    fillCatalog(getEditedDate(currentDate));
  }, [fillCatalog, currentDate]);

  return (
    <div className={styles.page}>
      <InfiniteScroll
        dataLength={asteroids.length}
        next={() => fillCatalog(getNextDay(currentDate, setCurrentDate))}
        hasMore={true}
        loader={loadingText}
      >
        <AsteroidList list={asteroids} isInCatalog />
      </InfiniteScroll>
      <ShoppingCart />
    </div>
  );
}

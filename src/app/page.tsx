"use client";
import { useEffect } from "react";
import { useCatalog, useCatalogDispatch } from "@store";
import { AsteroidList, ShoppingCart } from "@components";
import styles from "./page.module.scss";

export default function Home() {
  const { asteroids } = useCatalog();
  const { fillCatalog } = useCatalogDispatch();

  useEffect(() => {
    fillCatalog();
  }, [fillCatalog]);

  return (
    <div className={styles.page}>
      <AsteroidList list={asteroids} isInCatalog />
      <ShoppingCart />
    </div>
  );
}

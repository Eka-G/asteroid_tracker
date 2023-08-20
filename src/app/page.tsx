import { HeroImg, AsteroidList, ShoppingCart } from "@components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroImg />
      <div className={styles.main__content}>
        <AsteroidList />
        <ShoppingCart />
      </div>
    </main>
  );
}

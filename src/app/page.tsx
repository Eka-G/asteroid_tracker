import { AsteroidList, ShoppingCart } from "@components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <AsteroidList />
      <ShoppingCart />
    </div>
  );
}

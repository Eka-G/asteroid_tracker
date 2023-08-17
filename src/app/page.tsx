import { HeroImg } from "@components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroImg />
      <div></div>
    </main>
  );
}

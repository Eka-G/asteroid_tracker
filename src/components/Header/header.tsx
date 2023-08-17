import { Passion_One } from "next/font/google";
import styles from "./style.module.scss";

const passionOne = Passion_One({
  subsets: ["latin"],
  weight: "400",
});

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <h1 className={passionOne.className}>ARMAGEDDON 2023</h1>
      <p>
        ООО “Команда им. Б. Уиллиса”.
        <br /> Взрываем астероиды с 1998 года.
      </p>
    </header>
  );
};

export default HeaderComponent;

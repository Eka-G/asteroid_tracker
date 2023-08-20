"use client";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";

const ShoppingCart = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/successful-order");
  };

  return (
    <section>
      <div className={styles.cart}>
        <div className={styles.cart__header}>
          <h2 className={styles.cart__title}>Корзина</h2>
          <p>2 астероида</p>
        </div>

        <button className={styles.cart__btn} onClick={handleClick}>
          Отправить
        </button>
      </div>
    </section>
  );
};

export default ShoppingCart;

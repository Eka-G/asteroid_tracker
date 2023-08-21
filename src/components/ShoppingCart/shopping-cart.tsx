"use client";
import { useRouter } from "next/navigation";
import { getPhraseEnding } from "@shared/helpers";
import { useCart } from "@store";
import styles from "./style.module.scss";

const ShoppingCart = () => {
  const router = useRouter();
  const { cartItems } = useCart();

  const cartAmount = cartItems.length;
  const editedText =
    cartAmount +
    getPhraseEnding({
      parameter: cartAmount,
      firstEnding: "астероид",
      secondEnding: "астероида",
      thirdEnding: "астероидов",
    });

  const handleClick = () => {
    router.push("/successful-order");
  };

  return (
    <section>
      <div className={styles.cart}>
        <div className={styles.cart__header}>
          <h2 className={styles.cart__title}>Корзина</h2>
          <p>{editedText}</p>
        </div>

        <button
          className={styles.cart__btn}
          onClick={handleClick}
          disabled={!cartAmount}
        >
          Отправить
        </button>
      </div>
    </section>
  );
};

export default ShoppingCart;

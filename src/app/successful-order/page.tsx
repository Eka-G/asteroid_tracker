"use client";
import { AsteroidList, CopyrightFooter } from "@components";
import { useCart } from "@store";

export default function OrderPage() {
  const { cartItems } = useCart();

  return (
    <div>
      <AsteroidList list={cartItems} />
      <CopyrightFooter />
    </div>
  );
}

"use client";
import { useEffect } from "react";
import { AsteroidList, CopyrightFooter } from "@components";
import { useCart, useCartDispatch } from "@store";

export default function OrderPage() {
  const { cartItems } = useCart();
  const { clearCart } = useCartDispatch();

  useEffect(() => {
    return () => clearCart();
  }, [clearCart]);

  return (
    <div>
      <AsteroidList list={cartItems} />
      <CopyrightFooter />
    </div>
  );
}

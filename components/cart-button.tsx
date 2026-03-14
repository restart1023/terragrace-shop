"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-context";

export default function CartButton() {
  const { items } = useCart();
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="btn-black min-w-[150px]">
      <span>{totalCount > 0 ? `CART (${totalCount})` : "CART"}</span>
    </Link>
  );
}
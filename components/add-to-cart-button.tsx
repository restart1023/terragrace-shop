"use client";

import { useCart } from "@/components/cart-context";

type AddToCartButtonProps = {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
};

export default function AddToCartButton({
  id,
  name,
  color,
  size,
  price,
  image,
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleClick = () => {
    addItem({
      id,
      name,
      color,
      size,
      price,
      image,
      quantity: 1,
    });
  };

  return (
    <button type="button" onClick={handleClick} className="btn-black">
      <span>ADD TO CART</span>
    </button>
  );
}
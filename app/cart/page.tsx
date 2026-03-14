"use client";

import { useCart } from "@/components/cart-context";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 800 : 0;
  const total = subtotal + shipping;

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <p className="text-[12px] uppercase tracking-[0.24em] text-neutral-500">Cart</p>

      <h1 className="mt-4 text-[42px] font-semibold tracking-[-0.04em]">
        YOUR CART
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
        {/* 商品一覧 */}
        <div className="space-y-6">
          {items.length === 0 && (
            <p className="text-neutral-500">カートに商品がありません。</p>
          )}

          {items.map((item) => (
            <div
              key={item.id + item.size}
              className="flex items-center gap-6 border-b pb-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[110px] w-[110px] object-cover"
              />

              <div className="flex-1">
                <h3 className="text-[16px] font-medium">{item.name}</h3>

                <p className="mt-1 text-[13px] text-neutral-500">
                  カラー: {item.color}
                </p>

                <p className="text-[13px] text-neutral-500">
                  サイズ: {item.size}
                </p>

                <p className="mt-2 text-[15px] font-medium">
                  ¥{item.price.toLocaleString()}
                </p>

                {/* 数量 */}
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    className="h-[32px] w-[32px] border"
                  >
                    -
                  </button>

                  <span className="w-[20px] text-center">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    className="h-[32px] w-[32px] border"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id, item.size)}
                className="text-[12px] tracking-[0.18em] text-neutral-500"
              >
                REMOVE
              </button>
            </div>
          ))}
        </div>

        {/* サマリー */}
        <div className="border p-6">
          <p className="text-[12px] uppercase tracking-[0.24em] text-neutral-500">
            Summary
          </p>

          <div className="mt-6 space-y-3 text-[14px]">
            <div className="flex justify-between">
              <span>小計</span>
              <span>¥{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>送料</span>
              <span>¥{shipping.toLocaleString()}</span>
            </div>

            <div className="flex justify-between border-t pt-4 text-[16px] font-medium">
              <span>合計</span>
              <span>¥{total.toLocaleString()}</span>
            </div>
          </div>

          {/* CHECKOUT */}
          <Link
            href="/contact"
            className={`mt-6 block w-full bg-black py-3 text-center text-[13px] uppercase tracking-[0.18em] text-white ${
              items.length === 0 ? "pointer-events-none opacity-40" : ""
            }`}
          >
            CHECKOUT
          </Link>

          <Link
            href="/products"
            className="mt-3 block w-full border py-3 text-center text-[13px] uppercase tracking-[0.18em]"
          >
            CONTINUE SHOPPING
          </Link>

          <button
            onClick={clearCart}
            className="mt-3 w-full text-[12px] tracking-[0.18em] text-neutral-500"
          >
            CLEAR CART
          </button>

          <p className="mt-6 text-[12px] leading-[1.8] text-neutral-500">
            現在オンライン決済は準備中です。<br />
            ご購入希望の方はお問い合わせフォームよりご連絡ください。
          </p>
        </div>
      </div>
    </main>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 800 : 0;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
          Cart
        </p>

        <h1 className="mt-4 text-[44px] font-semibold leading-none tracking-[-0.05em] sm:text-[58px] md:text-[72px]">
          YOUR CART
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div className="border-t border-neutral-200">
            {items.length === 0 ? (
              <div className="py-12">
                <p className="text-[15px] leading-[1.9] text-neutral-600">
                  カートに商品がありません。
                </p>

                <div className="mt-6">
                  <Link
                    href="/products"
                    className="inline-flex min-h-[48px] items-center justify-center border border-black px-6 text-[12px] font-semibold tracking-[0.08em] transition hover:bg-black hover:text-white"
                  >
                    商品一覧を見る
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="grid grid-cols-[92px_1fr] gap-4 border-b border-neutral-200 py-6 sm:grid-cols-[120px_1fr]"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-6">
                      <div className="min-w-0 flex-1">
                        <h2 className="text-[18px] font-semibold tracking-[-0.02em] sm:text-[22px]">
                          {item.name}
                        </h2>

                        <div className="mt-2 space-y-1 text-[14px] leading-[1.8] text-neutral-600">
                          <p>カラー: {item.color}</p>
                          <p>サイズ: {item.size}</p>
                        </div>

                        <p className="mt-3 text-[18px] font-semibold">
                          ¥{item.price.toLocaleString()}
                        </p>

                        <div className="mt-4 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))
                            }
                            className="inline-flex h-[40px] w-[40px] items-center justify-center border border-neutral-300 text-[18px] transition hover:border-black"
                            aria-label="数量を減らす"
                          >
                            -
                          </button>

                          <div className="inline-flex h-[40px] min-w-[48px] items-center justify-center border border-neutral-300 px-3 text-[14px] font-medium">
                            {item.quantity}
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.quantity + 1)
                            }
                            className="inline-flex h-[40px] w-[40px] items-center justify-center border border-neutral-300 text-[18px] transition hover:border-black"
                            aria-label="数量を増やす"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-between sm:items-end">
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-[12px] font-medium tracking-[0.08em] text-neutral-500 transition hover:text-black"
                        >
                          商品を削除
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="h-fit border border-neutral-200 p-5 sm:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
              Order Summary
            </p>

            <div className="mt-6 space-y-4 border-b border-neutral-200 pb-6 text-[14px]">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">小計</span>
                <span className="font-medium">¥{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-600">送料</span>
                <span className="font-medium">¥{shipping.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[18px] font-semibold">合計</span>
              <span className="text-[22px] font-semibold tracking-[-0.03em]">
                ¥{total.toLocaleString()}
              </span>
            </div>

            <Link
              href="/contact"
              className={`mt-6 inline-flex min-h-[52px] w-full items-center justify-center bg-black px-6 text-center text-[12px] font-semibold tracking-[0.08em] text-white transition hover:opacity-85 ${
                items.length === 0 ? "pointer-events-none opacity-40" : ""
              }`}
            >
              購入について問い合わせる
            </Link>

            <Link
              href="/products"
              className="mt-3 inline-flex min-h-[52px] w-full items-center justify-center border border-black px-6 text-center text-[12px] font-semibold tracking-[0.08em] transition hover:bg-black hover:text-white"
            >
              買い物を続ける
            </Link>

            <button
              type="button"
              onClick={clearCart}
              className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center text-center text-[12px] font-medium tracking-[0.08em] text-neutral-500 transition hover:text-black"
            >
              カートを空にする
            </button>

            <p className="mt-6 text-[13px] leading-[1.9] text-neutral-500">
              現在オンライン決済は準備中です。
              ご購入希望の方は、お問い合わせフォームよりご連絡ください。
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-context";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();

  const shipping = subtotal >= 11000 ? 0 : 550;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Checkout
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[56px]">
            CHECKOUT
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-0 lg:grid-cols-[1fr_420px]">
          {/* LEFT */}
          <div className="border-b border-neutral-200 lg:border-b-0 lg:border-r">
            <div className="px-4 py-10 sm:px-6 md:px-8 md:py-12">
              {/* CONTACT */}
              <section className="border-b border-neutral-200 pb-10">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Contact
                </p>

                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-black md:text-[36px]">
                  連絡先情報
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      姓
                    </label>
                    <input
                      type="text"
                      placeholder="山田"
                      className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      名
                    </label>
                    <input
                      type="text"
                      placeholder="太郎"
                      className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="09012345678"
                      className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                    />
                  </div>
                </div>
              </section>

              {/* SHIPPING */}
              <section className="border-b border-neutral-200 py-10">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Shipping
                </p>

                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-black md:text-[36px]">
                  配送先
                </h2>

                <div className="mt-8 grid gap-5">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      郵便番号
                    </label>
                    <input
                      type="text"
                      placeholder="123-4567"
                      className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      都道府県
                    </label>
                    <input
                      type="text"
                      placeholder="東京都"
                      className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      市区町村
                    </label>
                    <input
                      type="text"
                      placeholder="渋谷区"
                      className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      番地・建物名
                    </label>
                    <input
                      type="text"
                      placeholder="1-2-3 ○○マンション101"
                      className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                    />
                  </div>
                </div>
              </section>

              {/* PAYMENT */}
              <section className="pt-10">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Payment
                </p>

                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-black md:text-[36px]">
                  お支払い方法
                </h2>

                <div className="mt-8 space-y-3">
                  <div className="border border-neutral-300 px-5 py-4">
                    <p className="text-[14px] font-semibold text-black">
                      クレジットカード
                    </p>
                    <p className="mt-2 text-[14px] leading-[2] text-neutral-600">
                      Visa / Mastercard / JCB / American Express
                    </p>
                  </div>

                  <div className="border border-neutral-300 px-5 py-4">
                    <p className="text-[14px] font-semibold text-black">
                      その他の決済方法
                    </p>
                    <p className="mt-2 text-[14px] leading-[2] text-neutral-600">
                      今後の実装でStripeなどに接続可能です。
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="bg-white">
            <div className="px-4 py-10 sm:px-6 md:px-8 md:py-12">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                Order Summary
              </p>

              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.03em] text-black md:text-[38px]">
                SUMMARY
              </h2>

              <div className="mt-8 space-y-4">
                {items.length === 0 ? (
                  <p className="text-[14px] leading-[2] text-neutral-600">
                    カートに商品が入っていません。
                  </p>
                ) : (
                  items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="border border-neutral-200 px-5 py-4"
                    >
                      <p className="text-[14px] font-semibold text-black">
                        {item.name}
                      </p>
                      <p className="mt-2 text-[13px] leading-[2] text-neutral-600">
                        Size: {item.size} / Qty: {item.quantity}
                      </p>
                      <p className="mt-2 text-[14px] font-semibold text-black">
                        ¥{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-8 space-y-4 border-t border-neutral-200 pt-6">
                <div className="flex items-center justify-between text-[14px] text-neutral-600">
                  <span>小計</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between text-[14px] text-neutral-600">
                  <span>送料</span>
                  <span>{shipping === 0 ? "無料" : `¥${shipping.toLocaleString()}`}</span>
                </div>

                <div className="flex items-center justify-between border-t border-neutral-200 pt-4 text-[18px] font-semibold text-black">
                  <span>合計</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href="/order/complete"
                  className="inline-flex min-h-[48px] w-full items-center justify-center border border-black bg-black px-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-85"
                >
                  Place Order
                </Link>

                <Link
                  href="/cart"
                  className="inline-flex min-h-[48px] w-full items-center justify-center border border-black bg-white px-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
                >
                  Back to Cart
                </Link>
              </div>

              <p className="mt-6 text-[12px] leading-[1.9] text-neutral-500">
                ※ 現在はデザイン確認用のチェックアウト画面です。
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
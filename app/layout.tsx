import "./globals.css";
import Image from "next/image";
import Link from "next/link";

import { CartProvider } from "@/components/cart-context";
import CartButton from "@/components/cart-button";

export const metadata = {
  title: "TerraGrace",
  description: "TerraGrace公式ECサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-black">
        <CartProvider>
          {/* TOP NOTICE BAR */}
          <div className="border-b border-neutral-200 bg-black py-3 text-center text-[12px] font-medium tracking-[0.18em] text-white">
            OFFICIAL ONLINE STORE / FREE SHIPPING OVER ¥11,000
          </div>

          {/* HEADER */}
          <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-[1500px] px-6 md:px-8">
              <div className="relative flex h-[80px] items-center justify-between">
                {/* LEFT */}
                <div className="flex items-center gap-8">
                  <Link
                    href="/products"
                    className="hidden text-[12px] font-medium uppercase tracking-[0.2em] text-neutral-700 transition hover:text-black md:inline-block"
                  >
                    Shop
                  </Link>
                  <Link
                    href="/faq"
                    className="hidden text-[12px] font-medium uppercase tracking-[0.2em] text-neutral-700 transition hover:text-black md:inline-block"
                  >
                    FAQ
                  </Link>
                </div>

                {/* CENTER LOGO */}
                <Link
                  href="/"
                  className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center"
                >
                  <Image
                    src="/logo.png"
                    alt="TerraGrace"
                    width={700}
                    height={280}
                    priority
                    className="h-[280px] w-auto object-contain"
                  />
                </Link>

                {/* RIGHT */}
                <div className="flex items-center gap-4 md:gap-6">
                  <Link
                    href="/contact"
                    className="hidden text-[12px] font-medium uppercase tracking-[0.2em] text-neutral-700 transition hover:text-black md:inline-block"
                  >
                    Contact
                  </Link>

                  <Link href="/products" className="btn-white">
                    <span>PRODUCTS</span>
                  </Link>

                  <CartButton />
                </div>
              </div>
            </div>
          </header>

          <main>{children}</main>

          {/* FOOTER */}
          <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-8">
              <div className="grid gap-12 md:grid-cols-4">
                <div>
                  <div className="brand-text text-[30px]">TerraGrace</div>
                  <p className="mt-4 max-w-sm text-[14px] leading-[2] text-neutral-600">
                    MODERN RECOVERY WEAR WITH A CLEAN, REFINED PRESENCE.
                  </p>
                </div>

                <div>
                  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
                    Shop
                  </p>
                  <div className="flex flex-col gap-3 text-[14px] text-neutral-700">
                    <Link href="/products" className="transition hover:text-black">
                      すべての商品
                    </Link>
                    <Link href="/products/white" className="transition hover:text-black">
                      ホワイト
                    </Link>
                    <Link href="/products/black" className="transition hover:text-black">
                      ブラック
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
                    Support
                  </p>
                  <div className="flex flex-col gap-3 text-[14px] text-neutral-700">
                    <Link href="/faq" className="transition hover:text-black">
                      FAQ
                    </Link>
                    <Link href="/contact" className="transition hover:text-black">
                      Contact
                    </Link>
                    <Link href="/cart" className="transition hover:text-black">
                      Cart
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-black">
                    Legal
                  </p>
                  <div className="flex flex-col gap-3 text-[14px] text-neutral-700">
                    <Link href="/company" className="transition hover:text-black">
                      会社情報
                    </Link>
                    <Link href="/law" className="transition hover:text-black">
                      特定商取引法
                    </Link>
                    <Link href="/privacy" className="transition hover:text-black">
                      プライバシーポリシー
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-14 border-t border-neutral-200 pt-6">
                <p className="text-[12px] tracking-[0.18em] text-neutral-500">
                  © TerraGrace
                </p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
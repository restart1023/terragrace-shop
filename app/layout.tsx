import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";


export const metadata: Metadata = {
  title: "TerraGrace",
  description: "TerraGrace 公式オンラインストア",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-black antialiased">
        <CartProvider>
          <div className="min-h-screen bg-white text-black">
            <div className="border-b border-black bg-black px-4 py-2 text-center text-[10px] font-medium tracking-[0.18em] text-white sm:text-[11px]">
              OFFICIAL ONLINE STORE
            </div>

            <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
              <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
                <nav className="hidden items-center gap-8 md:flex">
                  <Link
                    href="/products"
                    className="text-[12px] font-medium tracking-[0.16em] text-black transition hover:opacity-60"
                  >
                    商品一覧
                  </Link>
                  <Link
                    href="/faq"
                    className="text-[12px] font-medium tracking-[0.16em] text-black transition hover:opacity-60"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/company"
                    className="text-[12px] font-medium tracking-[0.16em] text-black transition hover:opacity-60"
                  >
                    会社情報
                  </Link>
                </nav>

                <div className="flex items-center gap-4 md:hidden">
                  <Link
                    href="/products"
                    className="text-[11px] font-medium tracking-[0.12em] text-black"
                  >
                    商品一覧
                  </Link>
                  <Link
                    href="/faq"
                    className="text-[11px] font-medium tracking-[0.12em] text-black"
                  >
                    FAQ
                  </Link>
                </div>

                <Link
  href="/"
  className="absolute left-1/2 -translate-x-1/2"
>
  <Image
    src="/logo.png"
    alt="TerraGrace"
    width={120}
    height={120}
    className="h-auto w-[120px] sm:w-[250px]"
    priority
  />
</Link>

                <div className="ml-auto flex items-center gap-3 sm:gap-4 md:gap-5">
                  <Link
                    href="/contact"
                    className="hidden text-[12px] font-medium tracking-[0.16em] text-black transition hover:opacity-60 sm:inline-block"
                  >
                    お問い合わせ
                  </Link>

                  <Link
  href="/cart"
  className="inline-flex min-h-[42px] items-center justify-center border border-black px-4 text-[11px] font-semibold tracking-[0.12em] text-black transition hover:bg-black hover:text-white sm:px-5"
>
  カート
</Link>
                </div>
              </div>
            </header>

            {children}

            <footer className="border-t border-neutral-200 bg-white">
              <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 md:px-14 lg:px-16 xl:px-20">
                <div className="grid grid-cols-1 gap-10 border-b border-neutral-200 pb-10 md:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <div className="text-[28px] font-semibold tracking-[-0.04em] sm:text-[34px]">
                      TerraGrace
                    </div>
                    <p className="mt-4 max-w-[560px] text-[14px] leading-[2] text-neutral-600 sm:text-[15px]">
                      日本の大地が育んだ特別な鉱石の力に着目し、
                      毎日のコンディションに寄り添う新しいリカバリーウェアを提案します。
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                        SHOP
                      </p>
                      <div className="mt-4 space-y-3">
                        <Link
                          href="/products"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          商品一覧
                        </Link>
                        <Link
                          href="/products/white"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          ホワイト
                        </Link>
                        <Link
                          href="/products/black"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          ブラック
                        </Link>
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                        GUIDE
                      </p>
                      <div className="mt-4 space-y-3">
                        <Link
                          href="/faq"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          FAQ
                        </Link>
                        <Link
                          href="/contact"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          お問い合わせ
                        </Link>
                        <Link
                          href="/cart"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          カート
                        </Link>
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                        LEGAL
                      </p>
                      <div className="mt-4 space-y-3">
                        <Link
                          href="/company"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          会社情報
                        </Link>
                        <Link
                          href="/law"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          特定商取引法
                        </Link>
                        <Link
                          href="/privacy"
                          className="block text-[14px] text-black transition hover:opacity-60"
                        >
                          プライバシーポリシー
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-6 text-[12px] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                  <p>© TerraGrace. All rights reserved.</p>
                  <p>Official Online Store</p>
                </div>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
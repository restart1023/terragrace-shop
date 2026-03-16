"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddToCartButton from "@/components/add-to-cart-button";

const sizes = ["S", "M", "L", "LL", "3L", "4L"];

const galleryImages = [
  "/product-white.jpg",
  "/product-white-2.jpg",
  "/product-white-3.jpg",
  "/product-white-4.jpg",
  "/product-white-5.jpg",
  "/product-white-6.jpg",
];

export default function WhiteProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-16 xl:px-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[12px]">
            WHITE
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[42px] md:text-[50px]">
            TerraGrace ホワイト
          </h1>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div className="border-b border-neutral-200 bg-[#f5f5f3] lg:border-b-0 lg:border-r">
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex min-h-[360px] items-center justify-center bg-[#f5f5f3] sm:min-h-[480px] md:min-h-[700px]">
                <Image
                  src={selectedImage}
                  alt="TerraGrace ホワイト"
                  width={1400}
                  height={1600}
                  priority
                  className="h-full max-h-[720px] w-full object-contain"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`border p-2 transition ${
                      selectedImage === image
                        ? "border-black bg-white"
                        : "border-neutral-200 bg-white hover:border-black"
                    }`}
                  >
                    <div className="flex h-[72px] items-center justify-center bg-[#f5f5f3] sm:h-[84px] md:h-[100px]">
                      <Image
                        src={image}
                        alt={`TerraGrace ホワイト ${index + 1}`}
                        width={500}
                        height={600}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white">
            <div className="px-6 py-10 sm:px-10 md:px-14 md:py-12 lg:px-12 xl:px-14">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[12px]">
                WHITE
              </p>

              <h2 className="mt-3 text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[34px] md:text-[42px]">
                TerraGrace ホワイト
              </h2>

              <p className="mt-4 text-[22px] font-semibold tracking-[-0.02em] text-black">
                ¥8,800
              </p>

              <p className="mt-6 text-[14px] leading-[2] text-neutral-600 sm:text-[15px]">
                明るさと静けさを併せ持つ、クリーンなホワイトモデル。
                余計な装飾を削ぎ落とした佇まいが、日常の装いに自然と溶け込みます。
              </p>

              <div className="mt-8 border-t border-neutral-200 pt-8">
                <p className="text-[12px] font-semibold tracking-[0.08em] text-black">
                  サイズを選ぶ
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`inline-flex min-h-[42px] min-w-[54px] items-center justify-center border px-4 text-[12px] font-semibold tracking-[0.08em] transition ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-neutral-300 bg-white text-black hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-neutral-200 pt-8">
                <div className="grid gap-4">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Material
                    </p>
                    <p className="mt-2 text-[14px] text-black">ポリエステル100%</p>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Color
                    </p>
                    <p className="mt-2 text-[14px] text-black">ホワイト</p>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Details
                    </p>
                    <p className="mt-2 text-[14px] leading-[2] text-neutral-600">
                      すっきりとした印象を保ちながら、やわらかく上品な空気感をまとえる一着です。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-neutral-200 pt-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  About TerraGrace
                </p>

                <div className="mt-5 space-y-4 text-[14px] leading-[2] text-neutral-600">
                  <p>
                    リカバリーウェア「TerraGrace」は、大地の恵みから生まれた
                    “やすらぎのエネルギー”をテーマにした一着です。
                  </p>
                  <p>
                    特別な鉱石「貴陽石」を繊維生地にプリントし、まるで温泉に包まれるような感覚で、
                    やさしく寄り添う着心地を目指しました。
                  </p>
                  <p>
                    ホワイトは、顔まわりや全体の印象を明るく見せやすく、
                    軽やかでクリーンな雰囲気を求める方におすすめです。
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AddToCartButton
                  id="white"
                  name="TerraGrace ホワイト"
                  color="ホワイト"
                  size={selectedSize}
                  price={8800}
                  image="/product-white.jpg"
                />

                <Link
                  href="/products"
                  className="inline-flex min-h-[48px] items-center justify-center border border-black bg-white px-7 text-[12px] font-semibold tracking-[0.08em] transition hover:bg-black hover:text-white"
                >
                  商品一覧に戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-2">
          <div className="border-b border-neutral-200 px-6 py-12 sm:px-10 md:border-b-0 md:border-r md:px-14 lg:px-16 xl:px-20">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Impression
            </p>
            <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.03em] sm:text-[28px]">
              Light & Clean
            </h3>
            <p className="mt-5 max-w-[560px] text-[14px] leading-[2] text-neutral-600">
              ホワイトは、顔まわりや全体の印象を明るく見せやすく、
              軽やかで清潔感のある雰囲気を大切にしたい方におすすめです。
            </p>
          </div>

          <div className="px-6 py-12 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Styling
            </p>
            <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.03em] sm:text-[28px]">
              Minimal Mood
            </h3>
            <p className="mt-5 max-w-[560px] text-[14px] leading-[2] text-neutral-600">
              余計な要素を削ぎ落としたデザインだからこそ、日常の装いに静かに馴染み、
              上品な抜け感を演出します。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddToCartButton from "@/components/add-to-cart-button";

const sizes = ["S", "M", "L", "LL", "3L", "4L"];

const galleryImages = [
  "/product-black.jpg",
  "/product-black-2.jpg",
  "/product-black-3.jpg",
  "/product-black-4.jpg",
  "/product-black-5.jpg",
  "/product-black-6.jpg",
];

export default function BlackProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-500 sm:text-[12px]">
            Black
          </p>
          <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[46px] md:text-[56px]">
            TerraGrace ブラック
          </h1>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-neutral-200 bg-[#f5f5f5] lg:border-b-0 lg:border-r">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex min-h-[360px] items-center justify-center bg-[#f5f5f5] sm:min-h-[480px] md:min-h-[680px]">
                <Image
                  src={selectedImage}
                  alt="TerraGrace Black"
                  width={1400}
                  height={1600}
                  className="h-full max-h-[680px] w-full object-contain"
                  priority
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
                    <div className="flex h-[72px] items-center justify-center bg-[#f5f5f5] sm:h-[84px] md:h-[100px]">
                      <Image
                        src={image}
                        alt={`TerraGrace Black ${index + 1}`}
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

          <div className="bg-white">
            <div className="px-5 py-10 sm:px-8 md:px-10 md:py-12 lg:px-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[12px]">
                Black
              </p>

              <h2 className="mt-3 text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[34px] md:text-[42px]">
                TerraGrace ブラック
              </h2>

              <p className="mt-4 text-[22px] font-semibold tracking-[-0.02em]">
                ¥8,800
              </p>

              <p className="mt-6 text-[14px] leading-[2] text-neutral-600 sm:text-[15px]">
                落ち着きと洗練を感じる、深みのある定番カラー。
                モダンでシャープな印象を持つブラックモデルです。
              </p>

              <div className="mt-8 border-t border-neutral-200 pt-8">
                <p className="text-[12px] font-semibold tracking-[0.08em]">
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
                    <p className="mt-2 text-[14px]">ポリエステル100%</p>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Color
                    </p>
                    <p className="mt-2 text-[14px]">ブラック</p>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Details
                    </p>
                    <p className="mt-2 text-[14px] leading-[2] text-neutral-600">
                      シックでミニマルな存在感があり、TerraGraceの世界観を最も端的に感じやすい一着です。
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
                    リカバリーウェア「TerraGrace」。
                    大地の恵みから生まれた“やすらぎのエネルギー”をテーマにしたウェアです。
                  </p>
                  <p>
                    地殻変動で生まれ育まれた特別な鉱石「貴陽石」は、
                    群馬県利根郡片品村・群馬長石鉱床でのみ採掘される神秘の天然石です。
                  </p>
                  <p>
                    この鉱石は、遠赤外線・近赤外線・テラヘルツ波・マイナスイオンを放射する特性を持ち、
                    自然のぬくもりを感じさせてくれます。
                  </p>
                  <p>
                    背中と胸元、身体の要となる部分に配置された貴陽石を含んだ特殊プリント。
                    大自然が育んだ鉱石の力が目に見えない「波」となり、
                    頑張るあなたの毎日をサポートします。
                  </p>
                  <p>
                    ポリエステル100%の機能素材は軽く、乾きやすく、ストレスフリー。
                    他のウェアでは物足りなさを感じていた方にもぜひ選んでほしい、
                    大人のためのコンディショニングウェアです。
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AddToCartButton
                  id="black"
                  name="TerraGrace ブラック"
                  color="ブラック"
                  size={selectedSize}
                  price={8800}
                  image="/product-black.jpg"
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
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-2">
          <div className="border-b border-neutral-200 px-5 py-12 sm:px-8 md:border-b-0 md:border-r md:px-10">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Impression
            </p>
            <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.03em] sm:text-[28px]">
              Sharp & Essential
            </h3>
            <p className="mt-5 max-w-[560px] text-[14px] leading-[2] text-neutral-600">
              ブラックは、落ち着きと洗練を両立しやすく、シックで都会的な雰囲気を求める方におすすめです。
            </p>
          </div>

          <div className="px-5 py-12 sm:px-8 md:px-10">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Styling
            </p>
            <h3 className="mt-4 text-[26px] font-semibold tracking-[-0.03em] sm:text-[28px]">
              Clean Presence
            </h3>
            <p className="mt-5 max-w-[560px] text-[14px] leading-[2] text-neutral-600">
              余白とシルエットを活かしたデザインにより、日常の中でもシャープな存在感を保ちます。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
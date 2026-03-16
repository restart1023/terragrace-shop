import Image from "next/image";
import Link from "next/link";

const products = [
  {
  　title: "ホワイト",
    subtitle: "WHITE",
    href: "/products/white",
    image: "/product-white.jpg",
    description:
      "軽やかでクリーンな印象を持つホワイトモデル。静かな存在感で、日常のスタイルに自然に溶け込みます。",
  },
  {
    title: "ブラック",
    subtitle: "BLACK",
    href: "/products/black",
    image: "/product-black.jpg",
    description:
      "シャープで洗練された印象を持つブラックモデル。TerraGraceの世界観を最も強く感じられる一着です。",
  },
];

const features = [
  {
    title: "大地の恵みをまとう",
    text: "TerraGraceは、日本の大地が育んだ特別な鉱石の力に着目し、毎日のコンディションに寄り添う新しいリカバリーウェアを目指しています。",
  },
  {
    title: "日常に溶け込むデザイン",
    text: "くつろぎの時間だけでなく、外出や日常着としても自然に取り入れやすい、ミニマルで洗練されたデザインに仕上げています。",
  },
  {
    title: "軽く、扱いやすい素材",
    text: "ポリエステル100%の軽やかな機能素材を採用。乾きやすく、ストレスフリーで、毎日のワードローブに取り入れやすい一着です。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* PRODUCTS */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 md:px-14 md:py-20 lg:px-16 xl:px-20">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[12px]">
                PRODUCTS
              </p>
              <h2 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[40px] md:text-[48px]">
                カラーバリエーション
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex min-h-[48px] w-full items-center justify-center border border-black px-6 text-center text-[12px] font-semibold tracking-[0.08em] transition hover:bg-black hover:text-white sm:w-auto"
            >
              商品一覧
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group block border border-neutral-200 bg-white transition hover:border-black"
              >
                <div className="border-b border-neutral-200 bg-[#f5f5f3] p-5 sm:p-8 md:p-10">
                  <div className="flex h-[320px] items-center justify-center sm:h-[420px] md:h-[500px]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={1400}
                      height={1600}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* ここだけ修正 */}
                <div className="p-6 text-center sm:p-8 md:p-10">

                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                    {product.subtitle}
                  </p>

                  <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] sm:text-[34px] md:text-[40px]">
                    {product.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[2] text-neutral-600 sm:text-[15px]">
                    {product.description}
                  </p>

                  {/* ここだけ修正 */}
                  <div className="mt-6 flex justify-center">
                    <div className="inline-flex min-h-[48px] items-center justify-center bg-black px-6 text-[12px] font-semibold tracking-[0.08em] text-white transition hover:opacity-85">
                      商品詳細
                    </div>
                  </div>

                </div>

              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

const products = [
  {
  　title: "TerraGrace ホワイト",
    subtitle: "WHITE",
    href: "/products/white",
    image: "/product-white.jpg",
    description:
      "軽やかでクリーンな印象を持つホワイトモデル。静かな存在感で、日常のスタイルに自然に溶け込みます。",
  },
  {
    title: "TerraGrace ブラック",
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
      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div className="border-b border-neutral-200 lg:border-b-0 lg:border-r">
            <div className="flex items-center px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:min-h-[980px] lg:px-16 xl:px-20">
              <div className="w-full">
                <div className="mx-auto max-w-[1120px]">
                  <p className="text-center text-[11px] font-medium tracking-[0.18em] text-neutral-500 sm:text-[12px]">
                    TerraGrace
                  </p>

                  <div className="mt-8 text-center">
                    <h1 className="text-[#7fa1a9] font-semibold leading-[1.55] tracking-[0.02em] text-[24px] sm:text-[30px] md:text-[38px] lg:text-[46px] xl:text-[54px]">
                      それは、ただのＴシャツではない。
                      <br />
                      日本の大地が生んだ、新しいリカバリーウェアのかたち。
                    </h1>
                  </div>

                  <div className="mt-10 max-w-[980px]">
                    <p className="text-[15px] leading-[2] text-neutral-800 sm:text-[16px]">
                      大地の恵みから生まれた“やすらぎのエネルギー”
                    </p>

                    <p className="mt-8 text-[14px] leading-[2.2] text-neutral-600 sm:text-[15px]">
                      約6,600万年前、地殻の変動で生まれ育まれた特別な鉱石「貴陽石」は、
                      世界で唯一、群馬県利根郡片品村・群馬長石御座入鉱山でのみ採掘される神秘の天然石です。
                      この鉱石は、遠赤外線・近赤外線・テラヘルツ波・マイナスイオンを放射する特性を持ち、
                      自然のぬくもりを感じさせてくれます。
                    </p>

                    <p className="mt-6 text-[14px] leading-[2.2] text-neutral-600 sm:text-[15px]">
                      リカバリーウェア「TerraGrace」は、この特別な鉱石を繊維生地にプリント。
                      まるで温泉に包まれるような感覚で、やさしく寄り添うような着心地を目指しました。
                      貴陽石のぬくもりが、あなたの毎日にそっと寄り添います。
                    </p>

                    <div className="mt-8 max-w-[620px] space-y-3">
                      <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-[15px] font-semibold text-black">“Terra”</span>
                        <span className="text-[14px] text-neutral-600">―地球・大地の力</span>
                      </div>

                      <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-[15px] font-semibold text-black">“Grace”</span>
                        <span className="text-[14px] text-neutral-600">
                          ―心と体を整える波動という恵み
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#f5f5f3]">
            <div className="flex min-h-[420px] items-center justify-center px-6 py-10 sm:px-10 sm:py-12 md:min-h-[560px] md:px-12 lg:min-h-[980px] lg:px-16 lg:py-16 xl:px-20">
              <Image
                src="/hero.jpg"
                alt="TerraGrace Hero"
                width={2000}
                height={2400}
                priority
                className="h-auto max-h-[860px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

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

                <div className="p-6 sm:p-8 md:p-10">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                    {product.subtitle}
                  </p>

                  <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] sm:text-[34px] md:text-[40px]">
                    {product.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[2] text-neutral-600 sm:text-[15px]">
                    {product.description}
                  </p>

                  <div className="mt-6 inline-flex min-h-[48px] items-center justify-center bg-black px-6 text-[12px] font-semibold tracking-[0.08em] text-white transition hover:opacity-85">
                    商品詳細
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND FEATURES */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 md:px-14 md:py-20 lg:px-16 xl:px-20">
          <div className="mb-12 max-w-[760px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[12px]">
              FEATURES
            </p>
            <h2 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[40px] md:text-[48px]">
              TerraGraceの特徴
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="border border-neutral-200 p-6 sm:p-7 md:p-8">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-black">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[2] text-neutral-600 sm:text-[15px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[980px] px-6 py-16 text-center sm:px-10 md:py-24">
          <div className="text-[34px] font-semibold tracking-[-0.04em] sm:text-[42px] md:text-[46px]">
            TerraGrace
          </div>

          <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-[48px] md:text-[60px]">
            毎日に寄り添う、
            <br />
            新しいリカバリーウェア
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[14px] leading-[2] text-neutral-600 sm:text-[15px] md:text-[16px]">
            シンプルで洗練されたデザインと、やさしく寄り添う着心地。
            TerraGraceの世界観を、商品一覧からご覧ください。
          </p>

          <div className="mt-8 flex justify-center">
  
          </div>
        </div>
      </section>
    </main>
  );
}
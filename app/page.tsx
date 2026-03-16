import Image from "next/image";
import Link from "next/link";

const categoryCards = [
  {
    title: "White",
    subtitle: "Clean / Light / Minimal",
    href: "/products/white",
    image: "/product-white.jpg",
    description:
      "軽やかでクリーンな印象を持つホワイトモデル。静かな存在感で、日常のスタイルに自然に溶け込みます。",
  },
  {
    title: "Black",
    subtitle: "Sharp / Modern / Essential",
    href: "/products/black",
    image: "/product-black.jpg",
    description:
      "シャープで洗練された印象を持つブラックモデル。TerraGraceの世界観を最も強く感じられる一着です。",
  },
];

const featureBlocks = [
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
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <div className="border-b border-neutral-200 lg:border-b-0 lg:border-r">
            <div className="flex min-h-auto items-center px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:min-h-[980px] lg:px-14 xl:px-16">
              <div className="w-full">
               <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
  リカバリーウェア
</p>

                <h1 className="mt-5 text-[32px] font-semibold leading-[1.28] tracking-[-0.04em] sm:text-[42px] md:text-[54px] xl:text-[62px]">
                  それは、ただのＴシャツではない。<br />
                  日本の大地が生んだ、新しいリカバリーウェアのかたち。<br />
                  
                </h1>

                <p className="mt-8 max-w-[720px] text-[15px] leading-[2] text-neutral-700 sm:text-[16px]">
                  大地の恵みから生まれた“やすらぎのエネルギー”
                </p>

                <p className="mt-6 max-w-[760px] text-[14px] leading-[2.1] text-neutral-600">
                  約6,600万年前、地殻の変動で生まれ育まれた特別な鉱石「貴陽石」は、
                  世界で唯一、群馬県利根郡片品村・群馬長石御座入鉱山でのみ採掘される神秘の天然石です。
                  この鉱石は、遠赤外線・近赤外線・テラヘルツ波・マイナスイオンを放射する特性を持ち、
                  自然のぬくもりを感じさせてくれます。
                </p>

                <p className="mt-6 max-w-[760px] text-[14px] leading-[2.1] text-neutral-600">
                  リカバリーウェア「TerraGrace」は、この特別な鉱石を繊維生地にプリント。
                  まるで温泉に包まれるような感覚で、やさしく寄り添うような着心地を目指しました。
                  貴陽石のぬくもりが、あなたの毎日にそっと寄り添います。
                </p>

                <div className="mt-8 grid max-w-[620px] gap-3">
                  <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[15px] font-semibold text-black">“Terra”</span>
                    <span className="text-[14px] text-neutral-600">―地球・大地の力</span>
                  </div>

                  <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[15px] font-semibold text-black">“Grace”</span>
                    <span className="text-[14px] text-neutral-600">―心と体を整える波動という恵み</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/products"
                    className="inline-flex min-h-[50px] items-center justify-center bg-black px-7 text-center text-[12px] font-semibold tracking-[0.08em] text-white transition hover:opacity-85"
                  >
                    商品一覧を見る
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-[50px] items-center justify-center border border-black px-7 text-center text-[12px] font-semibold tracking-[0.08em] text-black transition hover:bg-black hover:text-white"
                  >
                    お問い合わせはこちら
                  </Link>
                </div>

                <div className="mt-10 grid gap-5 border-t border-neutral-200 pt-7 sm:grid-cols-3 sm:gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                      Color
                    </p>
                    <p className="mt-2 text-[15px] font-semibold">White / Black</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                      Size
                    </p>
                    <p className="mt-2 text-[15px] font-semibold">S / M / L / LL</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                      Price
                    </p>
                    <p className="mt-2 text-[15px] font-semibold">¥8,800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#f5f5f5]">
            <div className="flex min-h-[420px] items-center justify-center px-5 py-10 sm:px-8 sm:py-12 md:min-h-[560px] md:px-10 lg:min-h-[980px] lg:px-14 lg:py-14">
              <Image
                src="/hero.jpg"
                alt="TerraGrace Hero"
                width={2000}
                height={2400}
                priority
                className="h-auto max-h-[820px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-10 md:py-20 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
                Products
              </p>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-[42px] md:text-[52px]">
                カラーバリエーション
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex min-h-[48px] w-full items-center justify-center border border-black px-6 text-center text-[12px] font-semibold tracking-[0.08em] transition hover:bg-black hover:text-white sm:w-auto"
            >
              商品一覧を見る
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {categoryCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group block border border-neutral-200 bg-white transition hover:border-black"
              >
                <div className="border-b border-neutral-200 bg-[#f5f5f5] p-5 sm:p-7 md:p-8">
                  <div className="flex h-[320px] items-center justify-center sm:h-[420px] md:h-[460px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1400}
                      height={1600}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="p-5 sm:p-7 md:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                    {card.subtitle}
                  </p>

                  <h3 className="mt-3 text-[30px] font-semibold tracking-[-0.03em] sm:text-[34px] md:text-[40px]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.9] text-neutral-600 sm:text-[15px]">
                    {card.description}
                  </p>

                  <div className="mt-5 text-[12px] font-semibold tracking-[0.08em] text-black">
                    商品詳細を見る
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE BLOCKS */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-10 md:py-20 lg:px-12">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
              Features
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-[42px] md:text-[52px]">
              TerraGrace の特徴
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featureBlocks.map((feature) => (
              <div key={feature.title} className="border border-neutral-200 p-6 sm:p-7">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.95] text-neutral-600 sm:text-[15px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="border-b border-neutral-200 bg-black text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-5 py-10 sm:px-8 md:grid-cols-3 md:px-10 lg:px-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 sm:text-[11px]">
              Color
            </p>
            <p className="mt-3 text-[18px] font-semibold">WHITE / BLACK</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 sm:text-[11px]">
              Size
            </p>
            <p className="mt-3 text-[18px] font-semibold">S / M / L / LL / 3L / 4L</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 sm:text-[11px]">
              Price
            </p>
            <p className="mt-3 text-[18px] font-semibold">¥8,800</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[980px] px-5 py-16 text-center sm:px-8 md:py-24">
          <div className="text-[34px] font-semibold tracking-[-0.04em] sm:text-[42px] md:text-[46px]">
            TerraGrace
          </div>

          <h2 className="mt-5 text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[52px] md:text-[64px]">
            毎日に寄り添う、
            <br />
            新しいリカバリーウェア
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[14px] leading-[2] text-neutral-600 sm:text-[15px] md:text-[16px]">
            シンプルで洗練されたデザインと、やさしく寄り添う着心地。
            TerraGraceの世界観を、商品一覧からご覧ください。
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex min-h-[50px] items-center justify-center bg-black px-7 text-center text-[12px] font-semibold tracking-[0.08em] text-white transition hover:opacity-85"
            >
              商品一覧を見る
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center border border-black px-7 text-center text-[12px] font-semibold tracking-[0.08em] transition hover:bg-black hover:text-white"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
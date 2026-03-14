import Image from "next/image";
import Link from "next/link";

const categories = [
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

const features = [
  {
    title: "MINIMAL DESIGN",
    text: "余計な装飾を削ぎ落としたミニマルなデザイン。日常の空気に自然に馴染み、長く愛用できる一着です。",
  },
  {
    title: "RECOVERY CONCEPT",
    text: "TerraGraceは、日々のコンディションを整える発想から生まれたリカバリーウェア。心地よさと美しさを両立します。",
  },
  {
    title: "EASY CARE",
    text: "軽く、乾きやすく、扱いやすい素材感。日常使いしやすい設計で、毎日のワードローブに取り入れやすい仕様です。",
  },
];

const faqItems = [
  {
    q: "普段着として着られますか？",
    a: "はい。シンプルで洗練されたデザインのため、リラックスタイムだけでなく日常着としても自然に着用できます。",
  },
  {
    q: "洗濯はできますか？",
    a: "はい。日常使いしやすい素材を採用しており、ご家庭で洗濯可能です。洗濯表示に沿ってお手入れしてください。",
  },
  {
    q: "サイズはどう選べばよいですか？",
    a: "基本的には普段お選びのサイズを基準にしていただけます。ゆったり着たい場合は1サイズ上もおすすめです。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <div className="border-b border-neutral-200 lg:border-b-0 lg:border-r">
            <div className="flex min-h-[auto] items-center px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:min-h-[860px] lg:px-14 lg:py-16 xl:px-16">
              <div className="w-full">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
                  New Collection
                </p>

                <h1 className="mt-5 text-[52px] font-semibold leading-[0.92] tracking-[-0.06em] text-black sm:text-[72px] md:text-[92px] xl:text-[108px]">
                  TERRA
                  <br />
                  GRACE
                </h1>

                <p className="mt-6 max-w-[560px] text-[14px] leading-[1.95] text-neutral-600 sm:text-[15px] md:text-[16px]">
                  ミニマルで洗練された佇まい。今の空気に合う、モダンなリカバリーウェア。
                  心地よさと美しさを両立し、日々のコンディションに寄り添います。
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/products"
                    className="inline-flex min-h-[50px] items-center justify-center bg-black px-7 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-85"
                  >
                    SHOP ALL
                  </Link>

                  <Link
                    href="/products/black"
                    className="inline-flex min-h-[50px] items-center justify-center border border-black px-7 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
                  >
                    EXPLORE BLACK
                  </Link>
                </div>

                <div className="mt-10 grid gap-5 border-t border-neutral-200 pt-7 sm:grid-cols-3 sm:gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                      Color
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-black">
                      White / Black
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                      Size
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-black">
                      S / M / L / LL
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                      Price
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-black">
                      ¥8,800
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#f5f5f5]">
            <div className="flex min-h-[420px] items-center justify-center px-5 py-10 sm:px-8 sm:py-12 md:min-h-[560px] md:px-10 lg:min-h-[860px] lg:px-14 lg:py-14">
              <Image
                src="/hero.jpg"
                alt="TerraGrace Hero"
                width={2000}
                height={2400}
                priority
                className="h-auto max-h-[760px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-12 md:py-20">
          <div className="max-w-[920px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
              About TerraGrace
            </p>

            <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[46px] md:text-[58px]">
              MODERN RECOVERY WEAR
              <br className="hidden sm:block" />
              WITH A CLEAN PRESENCE
            </h2>

            <p className="mt-6 max-w-[760px] text-[14px] leading-[2] text-neutral-600 sm:text-[15px] md:text-[16px]">
              TerraGraceは、日々のコンディションを整えるための発想から生まれたリカバリーウェアです。
              着心地のよさだけではなく、日常に自然に溶け込む洗練されたデザインを大切にしています。
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-12 md:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
                Categories
              </p>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-black sm:text-[44px] md:text-[52px]">
                COLOR FOCUS
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex min-h-[48px] w-full items-center justify-center border border-black px-6 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white sm:w-auto"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {categories.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block border border-neutral-200 bg-white transition hover:border-black"
              >
                <div className="border-b border-neutral-200 bg-[#f5f5f5] p-5 sm:p-7 md:p-8">
                  <div className="flex h-[320px] items-center justify-center sm:h-[420px] md:h-[460px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1400}
                      height={1600}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="p-5 sm:p-7 md:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-3 text-[30px] font-semibold tracking-[-0.03em] text-black sm:text-[34px] md:text-[40px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.9] text-neutral-600 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      {categories.map((item, index) => (
        <section key={item.title} className="border-b border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
            <div
              className={`bg-[#f5f5f5] ${
                index % 2 === 0
                  ? "border-b border-neutral-200 lg:order-2 lg:border-b-0 lg:border-l"
                  : "border-b border-neutral-200 lg:border-b-0 lg:border-r"
              }`}
            >
              <div className="flex min-h-[360px] items-center justify-center p-6 sm:min-h-[480px] sm:p-10 md:min-h-[620px] md:p-14 lg:p-16">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1600}
                  height={1800}
                  className="h-full max-h-[620px] w-full object-contain"
                />
              </div>
            </div>

            <div className={`${index % 2 === 0 ? "lg:order-1" : ""} flex`}>
              <div className="flex w-full flex-col justify-center px-5 py-14 sm:px-8 md:px-12 md:py-20">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
                  Editorial
                </p>

                <h2 className="mt-5 text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] text-black sm:text-[46px] md:text-[58px]">
                  {index === 0 ? "MINIMAL WHITE" : "ESSENTIAL BLACK"}
                </h2>

                <p className="mt-6 max-w-[560px] text-[14px] leading-[2] text-neutral-600 sm:text-[15px] md:text-[16px]">
                  {item.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[50px] items-center justify-center bg-black px-7 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-85"
                  >
                    {index === 0 ? "VIEW WHITE" : "VIEW BLACK"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FEATURES */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-12 md:py-20">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
              Feature
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-black sm:text-[44px] md:text-[52px]">
              DESIGNED FOR DAILY COMFORT
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="border border-neutral-200 p-6 sm:p-7">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-black">
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
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-5 py-10 sm:px-8 md:grid-cols-3 md:px-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 sm:text-[11px]">
              Color
            </p>
            <p className="mt-3 text-[18px] font-semibold text-white">WHITE / BLACK</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 sm:text-[11px]">
              Size
            </p>
            <p className="mt-3 text-[18px] font-semibold text-white">
              S / M / L / LL / 3L / 4L
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 sm:text-[11px]">
              Price
            </p>
            <p className="mt-3 text-[18px] font-semibold text-white">¥8,800</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-12 md:py-20">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
              FAQ
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-black sm:text-[44px] md:text-[52px]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-6">
            {faqItems.map((item) => (
              <div key={item.q} className="border border-neutral-200 p-5 sm:p-6">
                <p className="text-[16px] font-semibold text-black sm:text-[18px]">
                  Q. {item.q}
                </p>
                <p className="mt-3 text-[14px] leading-[1.95] text-neutral-600 sm:text-[15px]">
                  A. {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/faq"
              className="inline-flex min-h-[50px] items-center justify-center border border-black px-7 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
            >
              VIEW FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[980px] px-5 py-16 text-center sm:px-8 md:py-24">
          <div className="text-[34px] font-semibold tracking-[-0.04em] text-black sm:text-[42px] md:text-[46px]">
            TerraGrace
          </div>

          <h2 className="mt-5 text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[52px] md:text-[64px]">
            DISCOVER
            <br />
            YOUR ESSENTIAL
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[14px] leading-[2] text-neutral-600 sm:text-[15px] md:text-[16px]">
            シンプルで洗練されたリカバリーウェアを、TerraGraceの世界観とともに。
            ご購入希望の方は商品一覧からご覧ください。
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex min-h-[50px] items-center justify-center bg-black px-7 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-85"
            >
              SHOP ALL
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center border border-black px-7 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
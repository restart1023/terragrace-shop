import Link from "next/link";
import Image from "next/image";

const categoryCards = [
  {
    title: "White",
    subtitle: "Clean / Light / Minimal",
    href: "/products/white",
    image: "/product-white.jpg",
  },
  {
    title: "Black",
    subtitle: "Sharp / Modern / Essential",
    href: "/products/black",
    image: "/product-black.jpg",
  },
];

const editorialBlocks = [
  {
    eyebrow: "Editorial",
    title: "Minimal White",
    text: "軽やかでクリーンな印象を持つホワイトモデル。静かな存在感で、日常のスタイルに自然に溶け込みます。",
    image: "/product-white.jpg",
    href: "/products/white",
    cta: "VIEW WHITE",
  },
  {
    eyebrow: "Editorial",
    title: "Essential Black",
    text: "シャープで洗練された印象を持つブラックモデル。TerraGraceの世界観を最も強く感じられる一着です。",
    image: "/product-black.jpg",
    href: "/products/black",
    cta: "VIEW BLACK",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT */}
          <div className="border-b border-neutral-200 lg:border-b-0 lg:border-r">
            <div className="flex min-h-[780px] w-full items-start lg:min-h-[860px]">
              <div className="w-full px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24 xl:px-16 xl:pt-28">
                <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-neutral-500">
                  New Collection
                </p>

                <h1 className="mt-6 text-[88px] font-semibold leading-[0.9] tracking-[-0.055em] text-black xl:text-[104px]">
                  TERRA
                  <br />
                  GRACE
                </h1>

                <p className="mt-8 max-w-[500px] text-[16px] leading-[2] text-neutral-600">
                  ミニマルで洗練された佇まい。今の空気に合う、モダンなリカバリーウェア。
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/products" className="btn-black">
                    <span>SHOP ALL</span>
                  </Link>

                  <Link href="/products/black" className="btn-white min-w-[190px]">
                    <span>EXPLORE BLACK</span>
                  </Link>
                </div>

                <div className="mt-12 grid gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-3">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                      Color
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-black">
                      White / Black
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                      Size
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-black">
                      S / M / L / LL
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
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
          <div className="relative bg-[#f5f5f5]">
            <div className="flex min-h-[780px] items-start justify-center px-10 pb-12 pt-14 lg:min-h-[860px] lg:px-16 lg:pt-20">
              <Image
                src="/hero.jpg"
                alt="TerraGrace Hero"
                width={2000}
                height={2400}
                className="h-auto max-h-[820px] w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="border-b border-neutral-200 bg-white px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-neutral-500">
                Categories
              </p>
              <h2 className="mt-4 text-[48px] font-semibold leading-[1.05] tracking-[-0.04em] text-black">
                COLOR FOCUS
              </h2>
            </div>

            <Link href="/products" className="btn-white min-w-[150px]">
              <span>VIEW ALL</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {categoryCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group block border border-neutral-200 bg-white transition hover:border-black"
              >
                <div className="border-b border-neutral-200 bg-[#f5f5f5] p-8">
                  <div className="flex h-[460px] items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1400}
                      height={1600}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                    {card.subtitle}
                  </p>

                  <h3 className="mt-3 text-[40px] font-semibold tracking-[-0.03em] text-black">
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      {editorialBlocks.map((block, index) => (
        <section key={block.title} className="border-b border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div
              className={`bg-[#f5f5f5] ${
                index % 2 === 0
                  ? "border-b border-neutral-200 lg:order-2 lg:border-b-0 lg:border-l"
                  : "border-b border-neutral-200 lg:border-b-0 lg:border-r"
              }`}
            >
              <div className="flex min-h-[620px] items-center justify-center p-16">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={1600}
                  height={1800}
                  className="h-full max-h-[620px] w-full object-contain"
                />
              </div>
            </div>

            <div className={`${index % 2 === 0 ? "lg:order-1" : ""} flex`}>
              <div className="flex w-full flex-col justify-center px-6 py-16 md:px-12 md:py-20">
                <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-neutral-500">
                  {block.eyebrow}
                </p>

                <h2 className="mt-5 text-[58px] font-semibold leading-[1.02] tracking-[-0.04em] text-black">
                  {block.title}
                </h2>

                <p className="mt-6 max-w-[520px] text-[16px] leading-[2] text-neutral-600">
                  {block.text}
                </p>

                <div className="mt-8">
                  <Link href={block.href} className="btn-black min-w-[190px]">
                    <span>{block.cta}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* INFO STRIP */}
      <section className="border-b border-neutral-200 bg-black px-6 py-10 text-white md:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              Color
            </p>
            <p className="mt-3 text-[18px] font-semibold text-white">WHITE / BLACK</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              Size
            </p>
            <p className="mt-3 text-[18px] font-semibold text-white">S / M / L / LL / 3L / 4L</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              Price
            </p>
            <p className="mt-3 text-[18px] font-semibold text-white">¥8,800</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-[920px] text-center">
          <div className="brand-text text-[46px]">TerraGrace</div>

          <h2 className="mt-5 text-[60px] font-semibold leading-[1.05] tracking-[-0.04em] text-black">
            DISCOVER
            <br />
            YOUR ESSENTIAL
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[16px] leading-[2] text-neutral-600">
            シンプルで洗練されたリカバリーウェアを、TerraGraceの世界観とともに。
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link href="/products" className="btn-black">
              <span>SHOP ALL</span>
            </Link>

            <Link href="/faq" className="btn-white min-w-[140px]">
              <span>FAQ</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
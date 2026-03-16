import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "TerraGrace ホワイト",
    subtitle: "Clean / Light / Minimal",
    href: "/products/white",
    image: "/product-white.jpg",
    price: "¥8,800",
    description:
      "明るくやわらかな印象で、清潔感と軽やかさを感じられるホワイトモデルです。",
  },
  {
    title: "TerraGrace ブラック",
    subtitle: "Sharp / Modern / Essential",
    href: "/products/black",
    image: "/product-black.jpg",
    price: "¥8,800",
    description:
      "落ち着きと洗練を感じる、深みのある定番カラーのブラックモデルです。",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-10 md:py-16 lg:px-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-[12px]">
            Products
          </p>
          <h1 className="mt-4 text-[38px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[50px] md:text-[60px]">
            ALL PRODUCTS
          </h1>
          <p className="mt-5 max-w-[700px] text-[14px] leading-[2] text-neutral-600 sm:text-[15px] md:text-[16px]">
            TerraGraceの各モデル一覧です。カラーごとの違いや印象を比較しながら、お好みの一着をお選びください。
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group block border border-neutral-200 bg-white transition hover:border-black"
              >
                <div className="border-b border-neutral-200 bg-[#f5f5f5] p-5 sm:p-7 md:p-8">
                  <div className="flex h-[320px] items-center justify-center sm:h-[420px] md:h-[480px]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={1400}
                      height={1600}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="p-5 sm:p-7 md:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[11px]">
                    {product.subtitle}
                  </p>

                  <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] sm:text-[34px] md:text-[40px]">
                    {product.title}
                  </h2>

                  <p className="mt-4 text-[20px] font-semibold">{product.price}</p>

                  <p className="mt-4 text-[14px] leading-[1.9] text-neutral-600 sm:text-[15px]">
                    {product.description}
                  </p>

                  <div className="mt-5 inline-flex min-h-[48px] items-center justify-center bg-black px-6 text-[12px] font-semibold tracking-[0.08em] text-white transition hover:opacity-85">
                    商品詳細を見る
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
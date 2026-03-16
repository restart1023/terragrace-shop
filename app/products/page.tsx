import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "TerraGrace ホワイト",
    subtitle: "WHITE",
    href: "/products/white",
    image: "/product-white.jpg",
    price: "¥8,800",
    description:
      "軽やかでクリーンな印象を持つホワイトモデル。静かな存在感で、日常のスタイルに自然に溶け込みます。",
  },
  {
    title: "TerraGrace ブラック",
    subtitle: "BLACK",
    href: "/products/black",
    image: "/product-black.jpg",
    price: "¥8,800",
    description:
      "シャープで洗練された印象を持つブラックモデル。TerraGraceの世界観を最も強く感じられる一着です。",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 md:px-14 md:py-18 lg:px-16 xl:px-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:text-[12px]">
            PRODUCTS
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[42px] md:text-[50px]">
            商品一覧
          </h1>

          <p className="mt-6 max-w-[760px] text-[14px] leading-[2] text-neutral-600 sm:text-[15px] md:text-[16px]">
            TerraGraceの各モデルをご覧いただけます。
            カラーごとの印象や雰囲気の違いを比較しながら、お好みの一着をお選びください。
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-16 xl:px-20">
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

                  <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] sm:text-[34px] md:text-[40px]">
                    {product.title}
                  </h2>

                  <p className="mt-4 text-[20px] font-semibold tracking-[-0.02em] text-black">
                    {product.price}
                  </p>

                  <p className="mt-4 text-[14px] leading-[2] text-neutral-600 sm:text-[15px]">
                    {product.description}
                  </p>

                  <div className="mt-6 inline-flex min-h-[48px] items-center justify-center bg-black px-6 text-[12px] font-semibold tracking-[0.08em] text-white transition hover:opacity-85">
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
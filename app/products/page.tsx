import Image from "next/image";
import Link from "next/link";

const products = [
  {
    slug: "white",
    name: "TerraGrace ホワイト",
    subtitle: "Clean / Light / Minimal",
    price: "¥8,800",
    image: "/product-white.jpg",
  },
  {
    slug: "black",
    name: "TerraGrace ブラック",
    subtitle: "Sharp / Modern / Essential",
    price: "¥8,800",
    image: "/product-black.jpg",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Shop
          </p>
          <h1 className="mt-4 text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[60px]">
            ALL PRODUCTS
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1440px] grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block border border-neutral-200 bg-white transition hover:border-black"
            >
              <div className="border-b border-neutral-200 bg-[#f5f5f5] p-8">
                <div className="flex h-[460px] items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1400}
                    height={1600}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  {product.subtitle}
                </p>

                <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] text-black">
                  {product.name}
                </h2>

                <p className="mt-4 text-[20px] font-semibold text-black">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
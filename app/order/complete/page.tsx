import Link from "next/link";

export default function OrderCompletePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Order Complete
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[56px]">
            THANK YOU
            <br />
            FOR YOUR ORDER
          </h1>

          <p className="mt-6 max-w-[760px] text-[14px] leading-[2] text-neutral-600 md:text-[15px]">
            ご注文ありがとうございます。ご注文内容は正常に受け付けられました。
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-4 py-14 sm:px-6 md:px-8 md:py-20">
          <div className="border border-neutral-200">
            <div className="px-5 py-10 text-center md:px-8 md:py-14">
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center border border-black bg-black text-[28px] text-white md:h-[84px] md:w-[84px] md:text-[32px]">
                ✓
              </div>

              <h2 className="mt-8 text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-[42px]">
                ORDER CONFIRMED
              </h2>

              <p className="mx-auto mt-6 max-w-[720px] text-[14px] leading-[2] text-neutral-600 md:text-[15px]">
                ご入力いただいた内容をもとに、ご注文手続きを進めます。
                今後の実装では、ご注文確認メールや発送通知メールにも対応できます。
              </p>

              <div className="mx-auto mt-10 max-w-[760px] border border-neutral-200 bg-[#f5f5f5] px-5 py-6 text-left md:px-8 md:py-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Next Step
                </p>

                <div className="mt-4 space-y-3">
                  <p className="text-[14px] leading-[2] text-black">
                    1. ご注文内容の確認
                  </p>
                  <p className="text-[14px] leading-[2] text-black">
                    2. 発送準備
                  </p>
                  <p className="text-[14px] leading-[2] text-black">
                    3. 発送完了後のお知らせ
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/products"
                  className="inline-flex min-h-[48px] items-center justify-center border border-black bg-black px-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-85"
                >
                  Continue Shopping
                </Link>

                <Link
                  href="/"
                  className="inline-flex min-h-[48px] items-center justify-center border border-black bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="border-t border-neutral-200 bg-black text-white">
        <div className="mx-auto max-w-[1000px] px-4 py-14 text-center sm:px-6 md:px-8 md:py-20">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-400">
            Support
          </p>

          <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[52px]">
            NEED ASSISTANCE?
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[14px] leading-[2] text-neutral-300 md:text-[15px]">
            ご注文後のご不明点がある場合は、お問い合わせページよりご連絡ください。
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center border border-white bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-85"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
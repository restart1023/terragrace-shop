export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Contact
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[56px]">
            CONTACT
          </h1>

          <p className="mt-6 max-w-[760px] text-[14px] leading-[2] text-neutral-600 md:text-[15px]">
            TerraGraceに関するご質問・ご相談は、下記フォームよりお問い合わせください。
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1000px] px-4 py-10 sm:px-6 md:px-8 md:py-14">
          <div className="border border-neutral-200">
            <div className="px-5 py-8 md:px-8 md:py-10">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                Contact Form
              </p>

              <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-black md:text-[38px]">
                お問い合わせフォーム
              </h2>

              <form className="mt-8 space-y-7">
                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="山田 太郎"
                    className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="お問い合わせ件名"
                    className="w-full border border-neutral-300 px-4 py-3 text-[14px] text-black outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Message
                  </label>
                  <textarea
                    rows={7}
                    placeholder="お問い合わせ内容をご記入ください"
                    className="w-full border border-neutral-300 px-4 py-3 text-[14px] leading-[2] text-black outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] items-center justify-center border border-black bg-black px-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-85"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1000px] px-4 py-14 text-center sm:px-6 md:px-8 md:py-18">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Support
          </p>

          <h2 className="mt-5 text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-[42px]">
            CUSTOMER SUPPORT
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[14px] leading-[2] text-neutral-600 md:text-[15px]">
            通常2〜3営業日以内にご返信いたします。内容によってはお時間をいただく場合があります。
          </p>
        </div>
      </section>
    </main>
  );
}
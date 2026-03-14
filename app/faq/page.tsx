import Link from "next/link";

const faqItems = [
  {
    question: "TerraGraceとはどのような商品ですか？",
    answer:
      "TerraGraceは、日々の休息時間に寄り添うリカバリーウェアブランドです。ミニマルで洗練されたデザインと、日常に取り入れやすい着心地を大切にしています。",
  },
  {
    question: "カラーは何色ありますか？",
    answer:
      "現在はホワイトとブラックの2色をご用意しています。それぞれ印象が異なるため、お好みやスタイルに合わせてお選びいただけます。",
  },
  {
    question: "サイズ展開を教えてください。",
    answer:
      "サイズは S / M / L / LL / 3L / 4L をご用意しています。商品詳細ページでもご確認いただけます。",
  },
  {
    question: "素材は何ですか？",
    answer:
      "TerraGraceはポリエステル100%です。軽やかで取り入れやすい着用感を意識した仕様です。",
  },
  {
    question: "送料はかかりますか？",
    answer:
      "ご注文金額に応じて送料条件が異なります。現在の実装では、一定金額以上で送料無料となる設定です。",
  },
  {
    question: "返品や交換はできますか？",
    answer:
      "返品・交換条件は、特定商取引法ページおよび正式な販売ルールに沿ってご案内します。公開前に必ず運用内容と合わせてご確認ください。",
  },
  {
    question: "注文後どれくらいで届きますか？",
    answer:
      "発送時期は運用に応じて設定されます。正式公開前に配送ポリシーを明記する想定です。",
  },
  {
    question: "ギフトとして購入できますか？",
    answer:
      "今後の運用によってギフト対応やラッピング対応を追加することが可能です。",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            FAQ
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[56px]">
            FREQUENTLY
            <br />
            ASKED QUESTIONS
          </h1>

          <p className="mt-6 max-w-[760px] text-[14px] leading-[2] text-neutral-600 md:text-[15px]">
            TerraGraceの商品やご購入に関して、よくあるご質問をまとめています。
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 md:px-8 md:py-14">
          <div className="border border-neutral-200">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={index !== faqItems.length - 1 ? "border-b border-neutral-200" : ""}
              >
                <div className="px-5 py-6 md:px-8 md:py-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                    Q{index + 1}
                  </p>

                  <h2 className="mt-3 text-[22px] font-semibold leading-[1.25] tracking-[-0.03em] text-black md:text-[30px]">
                    {item.question}
                  </h2>

                  <p className="mt-4 text-[14px] leading-[2] text-neutral-600 md:text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-black text-white">
        <div className="mx-auto max-w-[1000px] px-4 py-14 text-center sm:px-6 md:px-8 md:py-20">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-400">
            Support
          </p>

          <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[52px]">
            NEED MORE HELP?
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[14px] leading-[2] text-neutral-300 md:text-[15px]">
            FAQで解決しない場合は、お問い合わせページよりご連絡ください。
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
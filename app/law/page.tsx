const lawItems = [
  { label: "販売事業者", value: "合名会社 群馬長石" },
  { label: "運営責任者", value: "星野本三" },
  { label: "所在地", value: "〒378-0406 群馬県利根郡片品村大字摺渕540" },
  { label: "電話番号", value: "0278-58-2551" },
  { label: "メールアドレス", value: "info@example.com" },
  { label: "販売価格", value: "各商品ページに税込価格を表示" },
  {
    label: "商品代金以外の必要料金",
    value: "送料・決済手数料等が発生する場合は、購入手続き時に表示します。",
  },
  { label: "支払方法", value: "クレジットカード等（今後の決済実装に応じて調整）" },
  { label: "支払時期", value: "ご注文確定時にお支払いが確定します。" },
  {
    label: "商品の引渡時期",
    value: "ご注文確認後、通常数営業日以内に発送予定です。正式な運用に応じて調整してください。",
  },
  {
    label: "返品・交換",
    value:
      "商品に欠陥がある場合を除き、原則として返品・交換はお受けしておりません。詳細は正式運用にあわせてご確認ください。",
  },
];

const noticeItems = [
  "メールアドレスは実際に受信できるものへ変更してください。",
  "送料、決済方法、返品条件、発送日数は実運用に合わせて必ず調整してください。",
  "このページの内容は、購入フローや決済方法と一致させる必要があります。",
];

export default function LawPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Legal
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[56px]">
            SPECIFIED
            <br />
            COMMERCIAL TRANSACTIONS ACT
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 md:px-8 md:py-14">
          <div className="border border-neutral-200">
            {lawItems.map((item, index) => (
              <div
                key={item.label}
                className={index !== lawItems.length - 1 ? "border-b border-neutral-200" : ""}
              >
                <div className="grid gap-3 px-5 py-5 md:grid-cols-[260px_1fr] md:px-8 md:py-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="text-[14px] leading-[2] text-black">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1000px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Notice
          </p>

          <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.03em] text-black md:text-[42px]">
            公開前の確認ポイント
          </h2>

          <div className="mt-8 border border-neutral-200 bg-white">
            {noticeItems.map((item, index) => (
              <div
                key={index}
                className={index !== noticeItems.length - 1 ? "border-b border-neutral-200" : ""}
              >
                <div className="px-5 py-5 md:px-8 md:py-6">
                  <p className="text-[14px] leading-[2] text-neutral-600">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
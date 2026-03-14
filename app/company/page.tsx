const companyInfo = [
  { label: "会社名", value: "合名会社 群馬長石" },
  { label: "代表者", value: "代表取締役 星野本三" },
  { label: "所在地", value: "〒378-0406 群馬県利根郡片品村大字摺渕540" },
  { label: "電話番号", value: "0278-58-2551" },
  { label: "FAX", value: "0278-58-4532" },
  { label: "設立", value: "1997年10月30日" },
];

const businessItems = [
  "長石の採掘・加工・販売",
  "貴陽石の採掘・加工・販売",
  "貴陽石にかかわる商品開発および販売",
  "有機農業向け土壌改良剤の販売",
];

const historyItems = [
  "1953年 珪石鉱山として開発、有限会社 御座入鉱山を設立",
  "1998年 自社鉱山にて貴陽石を発見",
  "2001年 貴陽石商標登録出願",
  "2003年 貴陽石商標登録",
  "2013年 ミネラルスター商標登録・販売開始",
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Company
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[56px]">
            COMPANY
          </h1>

          <p className="mt-6 max-w-[760px] text-[14px] leading-[2] text-neutral-600 md:text-[15px]">
            TerraGraceを展開する運営会社の情報をご案内します。
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 md:px-8 md:py-14">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="border border-neutral-200 lg:border-r-0">
              <div className="px-5 py-8 md:px-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Company Profile
                </p>

                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-black md:text-[38px]">
                  会社概要
                </h2>

                <div className="mt-8 divide-y divide-neutral-200">
                  {companyInfo.map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-3 py-5 md:grid-cols-[180px_1fr]"
                    >
                      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                        {item.label}
                      </p>
                      <p className="text-[14px] leading-[2] text-black">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-x border-b border-neutral-200 lg:border">
              <div className="px-5 py-8 md:px-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Business
                </p>

                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-black md:text-[38px]">
                  事業内容
                </h2>

                <div className="mt-8 space-y-4">
                  {businessItems.map((item) => (
                    <div
                      key={item}
                      className="border border-neutral-200 px-5 py-4"
                    >
                      <p className="text-[14px] leading-[2] text-black">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-neutral-200 pt-8">
                  <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                    Brand Background
                  </p>

                  <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.03em] text-black md:text-[30px]">
                    TerraGraceについて
                  </h3>

                  <p className="mt-5 text-[14px] leading-[2] text-neutral-600 md:text-[15px]">
                    TerraGraceは、御座入鉱山由来の背景とともに生まれた、
                    ミニマルで洗練されたリカバリーウェアブランドです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            History
          </p>

          <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.03em] text-black md:text-[42px]">
            沿革
          </h2>

          <div className="mt-8 border border-neutral-200 bg-white">
            {historyItems.map((item, index) => (
              <div
                key={index}
                className={index !== historyItems.length - 1 ? "border-b border-neutral-200" : ""}
              >
                <div className="px-5 py-5 md:px-8 md:py-6">
                  <p className="text-[14px] leading-[2] text-black">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
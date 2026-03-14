import Link from "next/link";

const policySections = [
  {
    title: "1. 個人情報の取得について",
    body: [
      "当サイトでは、お問い合わせやご注文手続きの際に、氏名、メールアドレス、電話番号、住所などの個人情報をご入力いただく場合があります。",
      "取得する情報は、サービスの提供やご連絡、ご注文対応に必要な範囲に限ります。",
    ],
  },
  {
    title: "2. 個人情報の利用目的",
    body: [
      "取得した個人情報は、以下の目的で利用します。",
      "・ご注文内容の確認、発送、決済対応のため",
      "・お問い合わせへの回答のため",
      "・サービス向上や運営改善の参考とするため",
      "・必要に応じて重要なお知らせをご案内するため",
    ],
  },
  {
    title: "3. 個人情報の第三者提供について",
    body: [
      "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
      "ただし、決済・配送などの業務遂行に必要な範囲で、業務委託先へ情報を提供する場合があります。",
    ],
  },
  {
    title: "4. 個人情報の管理について",
    body: [
      "当サイトは、個人情報の漏えい、滅失、改ざんなどを防止するため、適切な安全管理措置を講じます。",
      "また、個人情報を取り扱う必要がなくなった場合には、適切な方法で管理・廃棄を行います。",
    ],
  },
  {
    title: "5. Cookie等の利用について",
    body: [
      "当サイトでは、利便性向上やアクセス解析のためにCookie等を利用する場合があります。",
      "これにより個人を直接特定するものではありませんが、ブラウザ設定によりCookieの利用を制限することも可能です。",
    ],
  },
  {
    title: "6. アクセス解析ツールについて",
    body: [
      "当サイトでは、サイト改善のためにアクセス解析ツールを利用する場合があります。",
      "利用するツールにより収集されるデータは、各ツール提供事業者のプライバシーポリシーに基づいて管理されます。",
    ],
  },
  {
    title: "7. 開示・訂正・削除等の請求について",
    body: [
      "ご本人から個人情報の開示、訂正、削除等のご希望があった場合には、ご本人確認のうえ、法令に基づき適切に対応します。",
    ],
  },
  {
    title: "8. プライバシーポリシーの変更について",
    body: [
      "本ポリシーの内容は、必要に応じて見直し、予告なく変更する場合があります。",
      "変更後の内容は、当サイト上に掲載した時点で効力を生じるものとします。",
    ],
  },
  {
    title: "9. お問い合わせ窓口",
    body: [
      "本ポリシーに関するお問い合わせは、お問い合わせページよりご連絡ください。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-500">
            Privacy Policy
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[56px]">
            PRIVACY
            <br />
            POLICY
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-4 py-10 sm:px-6 md:px-8 md:py-14">
          <div className="border border-neutral-200">
            {policySections.map((section, index) => (
              <div
                key={section.title}
                className={index !== policySections.length - 1 ? "border-b border-neutral-200" : ""}
              >
                <section className="px-5 py-6 md:px-8 md:py-8">
                  <h2 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.03em] text-black md:text-[30px]">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-3">
                    {section.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-[14px] leading-[2] text-neutral-600 md:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-black text-white">
        <div className="mx-auto max-w-[1000px] px-4 py-14 text-center sm:px-6 md:px-8 md:py-20">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-neutral-400">
            Contact
          </p>

          <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[52px]">
            QUESTIONS?
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[14px] leading-[2] text-neutral-300 md:text-[15px]">
            個人情報の取扱いに関するご不明点は、お問い合わせページよりご連絡ください。
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
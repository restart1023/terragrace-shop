import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

type CheckoutItem = {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items: CheckoutItem[] = body.items ?? [];

    if (!items.length) {
      return NextResponse.json(
        { error: "カートが空です。" },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!siteUrl) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_SITE_URL が未設定です。" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteUrl}/checkout/success`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["JP"],
      },
      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "jpy",
          product_data: {
            name: `${item.name} / ${item.size}`,
            description: `カラー: ${item.color}`,
            images: item.image ? [`${siteUrl}${item.image}`] : [],
          },
          unit_amount: item.price,
        },
      })),
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Stripe Checkoutの作成に失敗しました。" },
      { status: 500 }
    );
  }
}
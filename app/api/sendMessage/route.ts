import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  selectedPack?: string;
  projectTimeline?: string;
  budget?: string;
};

function formatValue(value?: string) {
  return value && value.trim().length > 0 ? value.trim() : "Non renseigné";
}

function truncate(value: string, maxLength: number) {
  return value.length > maxLength ? `${value.slice(0, maxLength - 3)}...` : value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const webhookUrl =
      process.env.DISCORD_WEBHOOK_URL || process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { message: "Webhook Discord non configuré (DISCORD_WEBHOOK_URL)." },
        { status: 500 }
      );
    }

    const name = formatValue(body.name);
    const email = formatValue(body.email);
    const phone = formatValue(body.phone);
    const company = formatValue(body.company);
    const selectedPack = formatValue(body.selectedPack);
    const projectTimeline = formatValue(body.projectTimeline);
    const budget = formatValue(body.budget);
    const projectMessage = truncate(formatValue(body.message), 1800);

    const discordPayload = {
      username: "Unetra Tech - Leads",
      content: "Nouvelle demande de contact depuis le site.",
      embeds: [
        {
          title: "Nouveau lead site web",
          color: 0x2563eb,
          timestamp: new Date().toISOString(),
          fields: [
            { name: "Nom", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Téléphone", value: phone, inline: true },
            { name: "Entreprise", value: company, inline: true },
            { name: "Service", value: selectedPack, inline: true },
            { name: "Délai", value: projectTimeline, inline: true },
            { name: "Budget", value: budget, inline: true },
            { name: "Message", value: projectMessage, inline: false },
          ],
        },
      ],
    };

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
      cache: "no-store",
    });

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      return NextResponse.json(
        {
          message: "Erreur webhook Discord",
          status: discordResponse.status,
          details: errorText || "Aucun détail retourné par Discord.",
        },
        { status: 500 }
      );
    }

    // Discord webhooks répondent généralement 204 No Content.
    if (discordResponse.status === 204) {
      return NextResponse.json({ message: "Message envoyé à Discord." }, { status: 200 });
    }

    const responseText = await discordResponse.text();
    return NextResponse.json(
      { message: "Message envoyé à Discord.", details: responseText || null },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur sendMessage:", error);
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }
}

// app/api/sendMessage/route.ts

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("Form data received:", formData);
    const webhookUrl:any = process.env.NEXT_N8N_WEBHOOK_URL;
    console.log("Webhook URL:", webhookUrl);
    const response = await fetch(webhookUrl!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ message: "Erreur webhook n8n" }), {
        status: 500,
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.log("Erreur lors de l'envoi du message :", error);
    console.error("Erreur serveur :", error);
    return new Response(JSON.stringify({ message: "Erreur serveur" }), {
      status: 500,
    });
  }
}

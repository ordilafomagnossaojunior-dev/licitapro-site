// Força Node.js (não Edge) e evita qualquer cache
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// (opcional, perto de você) export const preferredRegion = "gru1";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const to = process.env.CONTACT_EMAIL_TO;

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      console.error("[contact] faltando RESEND_API_KEY");
      return NextResponse.json(
        { success: false, error: "Servidor sem RESEND_API_KEY" },
        { status: 500 }
      );
    }
    if (!to) {
      console.error("[contact] faltando CONTACT_EMAIL_TO");
      return NextResponse.json(
        { success: false, error: "Servidor sem CONTACT_EMAIL_TO" },
        { status: 500 }
      );
    }

    const { name, email, company, message } = (await req.json()) as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Campos obrigatórios: nome, e-mail e mensagem." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const from = process.env.CONTACT_FROM ?? "LicitaPro <onboarding@resend.dev>";

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email, // ok com o SDK (camelCase)
      subject: `Contato – LicitaPro${company ? ` (${company})` : ""}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
        <p><strong>Mensagem:</strong></p>
        <p>${(message ?? "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    // Se a API do Resend devolver erro, mostramos
    if ((result as any)?.error) {
      console.error("[contact] resend error:", (result as any).error);
      return NextResponse.json(
        { success: false, error: (result as any).error?.message ?? "Erro no Resend" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] exception:", msg);
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    );
  }
}

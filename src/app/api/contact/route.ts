// Garante Node.js e evita cache da rota
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { Resend } from "resend";

/** Payload esperado do formulário */
type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  /** honeypot anti-bot (campo escondido no form) */
  hp?: string;
};

/** Estrutura mínima de erro que o Resend devolve */
type ResendError = { name?: string; message?: string };

/** Estrutura mínima da resposta do Resend */
type SendResult = {
  data?: { id: string } | null;
  error?: ResendError | null;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;

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

    // Tipamos o body para não usar `any`
    const body: ContactBody = await req.json();
    const { name, email, company, message, hp } = body;

    // Honeypot preenchido => ignora (finge sucesso)
    if (hp) return NextResponse.json({ success: true });

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Campos obrigatórios: nome, e-mail e mensagem." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM ?? "LicitaPro <noreply@updates.licitapro.pro>";

    const result: SendResult = await resend.emails.send({
      from,
      to,
      replyTo: email,
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

    if (result.error) {
      console.error("[contact] resend error:", result.error);
      return NextResponse.json(
        { success: false, error: result.error.message ?? "Erro no Resend" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[contact] exception:", msg);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

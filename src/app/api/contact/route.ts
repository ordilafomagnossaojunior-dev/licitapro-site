export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { Resend } from "resend";

// ---- Tipagem segura do corpo ----
type ContactBody = {
  name: string;
  email: string;
  company?: string;
  message: string;
  hp?: string;
};

function isContactBody(x: unknown): x is ContactBody {
  if (!x || typeof x !== "object") return false;
  const r = x as Record<string, unknown>;
  return (
    typeof r.name === "string" &&
    typeof r.email === "string" &&
    typeof r.message === "string"
  );
}

// ---- Tipagem do retorno do Resend ----
type ResendErr = { name?: string; message?: string } | null | undefined;
type SendEmailResponse = { data?: { id: string } | null; error?: ResendErr };

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

    const raw = await req.json();
    if (!isContactBody(raw)) {
      return NextResponse.json(
        { success: false, error: "Corpo inválido." },
        { status: 400 }
      );
    }

    const { name, email, company, message, hp } = raw;

    // honeypot opcional
    if (hp) return NextResponse.json({ success: true });

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Campos obrigatórios: nome, e-mail e mensagem.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM ?? "LicitaPro <onboarding@resend.dev>";

    const result = (await resend.emails.send({
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
    })) as SendEmailResponse;

    if (result.error) {
      const msg =
        (typeof result.error === "object" && result.error?.message) ||
        "Erro no Resend";
      console.error("[contact] resend error:", result.error);
      return NextResponse.json({ success: false, error: msg }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Erro desconhecido";
    console.error("[contact] exception:", msg);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

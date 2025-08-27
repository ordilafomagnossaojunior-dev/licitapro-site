// Garante Node e evita cache
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { Resend } from "resend";

type ResendErr = { name?: string; message?: string };
type SendEmailResponse = { data?: { id: string } | null; error?: ResendErr | null };

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;
    const fromEmail = process.env.CONTACT_FROM;   // agora só o e-mail, sem “Nome <…>”
    const fromName = process.env.CONTACT_FROM_NAME ?? "LicitaPro"; // opcional

    if (!apiKey) return NextResponse.json({ success: false, error: "Servidor sem RESEND_API_KEY" }, { status: 500 });
    if (!to)     return NextResponse.json({ success: false, error: "Servidor sem CONTACT_EMAIL_TO" }, { status: 500 });
    if (!fromEmail) return NextResponse.json({ success: false, error: "Servidor sem CONTACT_FROM" }, { status: 500 });

    const body = (await req.json()) as {
      name?: string; email?: string; company?: string; message?: string; hp?: string;
    };
    const { name, email, company, message, hp } = body;

    if (hp) return NextResponse.json({ success: true }); // honeypot
    if (!name || !email || !message)
      return NextResponse.json({ success: false, error: "Campos obrigatórios: nome, e-mail e mensagem." }, { status: 400 });

    // monta o “from” usando nome + e-mail
    const from = `${fromName} <${fromEmail}>`;

    const resend = new Resend(apiKey);
    const result: SendEmailResponse = await resend.emails.send({
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
      return NextResponse.json({ success: false, error: result.error.message ?? "Erro no Resend" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

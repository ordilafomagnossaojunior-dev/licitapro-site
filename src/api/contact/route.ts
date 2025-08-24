// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Campos obrigatórios faltando." },
        { status: 400 }
      );
    }

    // Se tiver as envs, envia e-mail com o Resend
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_TO) {
      await resend.emails.send({
        // Para testes, use um remetente permitido (ex.: onboarding@resend.dev)
        from: "LicitaPro <onboarding@resend.dev>",
        to: [process.env.CONTACT_EMAIL_TO],
        replyTo: email, // <- CORRETO (camelCase)
        subject: `Contato LicitaPro – ${name}`,
        text: [
          `Nome: ${name}`,
          `E-mail: ${email}`,
          `Órgão/Empresa: ${company ?? "-"}`,
          "",
          "Mensagem:",
          message,
        ].join("\n"),
      });
    } else {
      // Fallback em dev: loga no servidor
      console.log("Contato recebido:", { name, email, company, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

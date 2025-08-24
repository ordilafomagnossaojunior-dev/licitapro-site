import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Body = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = (await req.json()) as Partial<Body>;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Campos obrigatórios: nome, e-mail e mensagem." },
        { status: 400 }
      );
    }

    const from = process.env.CONTACT_FROM ?? "LicitaPro <onboarding@resend.dev>";
    const to = process.env.CONTACT_EMAIL_TO;

    if (!to) {
      console.error("Falta a env CONTACT_EMAIL_TO");
      return NextResponse.json(
        { success: false, error: "Servidor sem e-mail de destino configurado." },
        { status: 500 }
      );
    }

    await resend.emails.send({
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Falha ao enviar. Tente novamente." },
      { status: 500 }
    );
  }
}

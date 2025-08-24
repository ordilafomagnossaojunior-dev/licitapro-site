"use client";
import React, { useState } from "react";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const data: ContactPayload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: fd.get("company") ? String(fd.get("company")) : undefined,
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setOk(true);
        form.reset();
      } else {
        setOk(false);
      }
    } catch {
      setOk(false);
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input
          name="name"
          required
          placeholder="Seu nome"
          className="w-full rounded-xl border px-4 py-3"
        />
        <input
          name="email"
          required
          type="email"
          placeholder="Seu e-mail"
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <input
        name="company"
        placeholder="Órgão/Empresa"
        className="w-full rounded-xl border px-4 py-3"
      />

      <textarea
        name="message"
        required
        placeholder="Descreva sua necessidade (ETP, TR, análise de riscos, etc.)"
        className="w-full rounded-xl border px-4 py-3 h-28"
      />

      <button
        disabled={sending}
        className="w-full rounded-2xl bg-primary-600 text-white px-5 py-3 text-sm font-semibold hover:bg-primary-700 transition disabled:opacity-60"
      >
        {sending ? "Enviando..." : "Solicitar proposta"}
      </button>

      {ok === true && (
        <div className="text-sm text-primary-700">
          Recebido! Em breve retornamos com a proposta.
        </div>
      )}
      {ok === false && (
        <div className="text-sm text-danger-700">
          Não foi possível enviar agora. Tente novamente.
        </div>
      )}

      <p className="text-xs text-gray-500">
        Ao enviar, você concorda com nossa{" "}
        <a className="underline text-primary-700" href="/privacidade">
          Política de Privacidade
        </a>.
      </p>
    </form>
  );
}

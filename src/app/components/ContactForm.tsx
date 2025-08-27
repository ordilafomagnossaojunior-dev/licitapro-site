"use client";

import React, { useMemo, useState } from "react";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  hp?: string; // honeypot (anti-bot)
};

type ApiResponse = { success: true } | { success: false; error?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorText, setErrorText] = useState<string>("");

  // Validação simples só para evitar requisições óbvias inválidas
  const emailRe = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorText("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const data: ContactPayload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: fd.get("company") ? String(fd.get("company")).trim() : undefined,
      message: String(fd.get("message") ?? "").trim(),
      hp: String(fd.get("website") ?? ""), // campo honeypot
    };

    // Anti-bot: se o honeypot foi preenchido, não envia
    if (data.hp) {
      setStatus("success"); // finge sucesso para o bot ir embora
      form.reset();
      return;
    }

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setErrorText("Preencha nome, e-mail e mensagem.");
      return;
    }
    if (!emailRe.test(data.email)) {
      setStatus("error");
      setErrorText("Informe um e-mail válido.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Tenta ler a mensagem do servidor
      let payload: ApiResponse | undefined = undefined;
      try {
        payload = (await res.json()) as ApiResponse;
      } catch {
        // pode não vir JSON em algum erro; segue o fluxo
      }

      if (res.ok && payload && payload.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorText(
          (payload && "error" in payload && payload.error) ||
            `Falha ao enviar (HTTP ${res.status}).`
        );
      }
    } catch (err: unknown) {
      // usamos o err para não gerar o aviso do ESLint e ainda ter log de depuração
      console.error("Falha ao enviar contato:", err);
      setStatus("error");
      setErrorText("Não foi possível enviar. Verifique sua conexão.");
    }
  }

  const disabled = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      {/* Honeypot (não remova o display:none) */}
      <div style={{ display: "none" }}>
        <label>
          Se você é humano, deixe este campo em branco:
          <input name="website" autoComplete="off" />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <input
          name="name"
          required
          placeholder="Seu nome"
          className="w-full rounded-xl border px-4 py-3"
          aria-label="Seu nome"
          disabled={disabled}
        />
        <input
          name="email"
          required
          type="email"
          placeholder="Seu e-mail"
          className="w-full rounded-xl border px-4 py-3"
          aria-label="Seu e-mail"
          disabled={disabled}
        />
      </div>

      <input
        name="company"
        placeholder="Órgão/Empresa"
        className="w-full rounded-xl border px-4 py-3"
        aria-label="Órgão ou empresa"
        disabled={disabled}
      />

      <textarea
        name="message"
        required
        placeholder="Descreva sua necessidade (ETP, TR, análise de riscos, etc.)"
        className="w-full rounded-xl border px-4 py-3 h-28"
        aria-label="Sua mensagem"
        disabled={disabled}
      />

      <button
        disabled={disabled}
        className="w-full rounded-2xl bg-primary-600 text-white px-5 py-3 text-sm font-semibold hover:bg-primary-700 transition disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Solicitar proposta"}
      </button>

      {/* Mensagens de retorno (com aria-live para leitores de tela) */}
      <div className="text-sm min-h-5" aria-live="polite">
        {status === "success" && (
          <span className="text-primary-700">
            Recebido! Em breve retornamos com a proposta.
          </span>
        )}
        {status === "error" && (
          <span className="text-danger-700">
            {errorText || "Não foi possível enviar agora. Tente novamente."}
          </span>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Ao enviar, você concorda com nossa{" "}
        <a className="underline text-primary-700" href="/privacidade">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  );
}

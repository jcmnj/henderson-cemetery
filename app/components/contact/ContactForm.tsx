"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(result.error || "Unable to send your message.");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      });
    } catch {
      setStatus("error");
      setError("Unable to send your message.");
    }
  };

  return (
    <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
      <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Archive Inquiry</p>
      <p className="mt-3 text-sm leading-6 text-stone-700">
        Send a cemetery, preservation, burial record, or family history question
        to the archive contact. Required fields are name, email, and message.
      </p>

      <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-100/75 p-4">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
          Donation Mailing Details
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
          <p className="text-sm leading-6 text-stone-700">
            Harmarville Cemetery Association
            <br />
            c/o David Campbell
            <br />
            505 Bicker Rd
            <br />
            Cabot, PA 16023
          </p>
          <p className="text-sm leading-6 text-stone-600 sm:max-w-56">
            Checks may be made payable to &ldquo;Harmarville Cemetery
            Association.&rdquo;
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-4 grid gap-3">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <input
          name="name"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Name"
          required
          className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-base text-stone-900 placeholder:text-stone-500 outline-none focus:border-stone-600"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="Email"
          required
          className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-base text-stone-900 placeholder:text-stone-500 outline-none focus:border-stone-600"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          placeholder="Phone (optional)"
          className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-base text-stone-900 placeholder:text-stone-500 outline-none focus:border-stone-600"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Message"
          rows={6}
          required
          className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-base text-stone-900 placeholder:text-stone-500 outline-none focus:border-stone-600"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="button-soft inline-flex w-full justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" ? (
        <p className="mt-4 text-sm text-emerald-700">Your message has been sent.</p>
      ) : null}
      {status === "error" ? <p className="mt-4 text-sm text-rose-700">{error}</p> : null}
    </article>
  );
}

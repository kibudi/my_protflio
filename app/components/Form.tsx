"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", content: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(t("contact.form.sending"));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus(t("contact.form.success"));
        setForm({ name: "", email: "", content: "" });
      } else {
        setStatus(t("contact.form.error"));
      }
    } catch (err) {
      console.error(err);
      setStatus(t("contact.form.serverError"));
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all hover:scale-[1.01] hover:shadow-2xl duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        {t("contact.form.title")}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder={t("contact.form.name")}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
        />
        <input
          type="email"
          placeholder={t("contact.form.email")}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
        />
        <textarea
          placeholder={t("contact.form.message")}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
          rows={5}
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition resize-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform active:scale-95"
        >
          {t("contact.form.send")}
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 text-center font-medium ${
            status.includes("✅") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}

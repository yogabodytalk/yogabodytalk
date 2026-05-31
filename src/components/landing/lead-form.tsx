"use client";

import { FormEvent, useState } from "react";
import { programs } from "@/data/landing";

export function LeadForm() {
  const [note, setNote] = useState("Hoặc liên hệ trực tiếp qua Zalo: 0962 895 314");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const program = String(data.get("program") || "").trim();

    if (!name || !phone || !program) {
      setSuccess(false);
      setNote("Vui lòng điền đủ thông tin để nhận lộ trình phù hợp.");
      return;
    }

    const message = `Chào Master Thu Nhanh, tôi là ${name}. Tôi muốn nhận gợi ý lộ trình ${program}. SĐT của tôi: ${phone}.`;
    setSuccess(true);
    setNote("Đã ghi nhận. Đang mở Zalo để gửi nhanh.");
    window.open(`https://zalo.me/0962895314?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid gap-3" onSubmit={handleSubmit} noValidate>
      <label className="grid gap-2 text-sm font-semibold text-sage">
        Họ tên
        <input
          className="min-h-12 rounded-lg border border-[rgba(114,121,113,0.32)] bg-white px-4 text-base font-medium text-ink"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Tên của bạn"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-sage">
        Số điện thoại
        <input
          className="min-h-12 rounded-lg border border-[rgba(114,121,113,0.32)] bg-white px-4 text-base font-medium text-ink"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="09xx xxx xxx"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-sage">
        Lộ trình quan tâm
        <select
          className="min-h-12 rounded-lg border border-[rgba(114,121,113,0.32)] bg-white px-4 text-base font-medium text-ink"
          name="program"
          defaultValue=""
          required
        >
          <option value="">Chọn một lộ trình</option>
          {programs.map((program) => (
            <option key={program}>{program}</option>
          ))}
        </select>
      </label>
      <button
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sage px-6 font-bold leading-none text-white shadow-[0_14px_28px_rgba(63,107,74,0.18)] transition hover:-translate-y-px"
        type="submit"
      >
        Gửi thông tin & mở Zalo
      </button>
      <p className={success ? "text-sm font-semibold text-sage" : "text-sm text-muted"} aria-live="polite">
        {note}
      </p>
    </form>
  );
}

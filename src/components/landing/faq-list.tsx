"use client";

import { useState } from "react";
import { faqs } from "@/data/landing";

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article className="rounded-xl border border-[rgba(114,121,113,0.32)] bg-white/60" key={faq.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-extrabold text-sage"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {faq.question}
              <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <div className="px-5 pb-5 text-muted">{faq.answer}</div> : null}
          </article>
        );
      })}
    </div>
  );
}

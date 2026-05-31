import { faqs } from "@/data/landing";

export function FaqList() {
  return (
    <div className="border-t border-[rgba(114,121,113,0.22)]">
      {faqs.map((faq) => {
        return (
          <details className="group border-b border-[rgba(114,121,113,0.22)]" key={faq.question} name="body-talk-faq">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left max-sm:gap-4 max-sm:py-4 [&::-webkit-details-marker]:hidden">
              <span className="font-serif text-[1.35rem] font-medium leading-snug text-sage transition group-hover:text-sage-light max-sm:text-lg">
                {faq.question}
              </span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#F3E6C5] text-xl font-medium leading-none text-gold-deep transition group-hover:bg-gold group-hover:text-sage group-open:hidden max-sm:size-8" aria-hidden="true">
                +
              </span>
              <span className="hidden size-9 shrink-0 place-items-center rounded-full bg-[#F3E6C5] text-xl font-medium leading-none text-gold-deep transition group-hover:bg-gold group-hover:text-sage group-open:grid max-sm:size-8" aria-hidden="true">
                -
              </span>
            </summary>
            <div className="max-w-[44rem] pb-7 text-lg leading-[1.75] text-muted max-sm:pb-5 max-sm:text-[15px] max-sm:leading-7">{faq.answer}</div>
          </details>
        );
      })}
    </div>
  );
}

import { FaqList } from "./faq-list";
import { eyebrow, heading, section, shell } from "./shared";

export function FaqSection() {
  return (
    <section className={`${section} ${shell}`} aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className={eyebrow}>Câu hỏi thường gặp</p>
        <h2 id="faq-title" className={heading}>
          Trước khi bắt đầu.
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-3xl">
        <FaqList />
      </div>
    </section>
  );
}

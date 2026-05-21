import { FaqList } from "./faq-list";
import { primaryButton, shell } from "./shared";

export function FaqSection() {
  return (
    <section className={`${shell} py-20 max-sm:py-8 md:py-[120px]`} id="faq" aria-labelledby="faq-title">
      <div className="grid items-start gap-12 max-sm:gap-8 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5 md:pr-10" data-motion="rise">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-deep">
            Hỏi đáp trước khi chọn lộ trình
          </p>
          <h2 id="faq-title" className="font-serif text-[clamp(2.25rem,4vw,3rem)] font-semibold leading-[1.08] text-sage max-sm:text-[1.9rem]">
            Bạn đang phân vân điều gì?
          </h2>
          <p className="mt-5 max-w-[31rem] text-lg leading-[1.75] text-muted max-sm:text-base">
            Chỉ giữ lại những câu hỏi giúp bạn quyết định điểm bắt đầu. Phần còn lại sẽ được Master Thu Nhanh tư vấn riêng theo tình trạng cơ thể.
          </p>

          <div className="mt-10 rounded-xl border border-[rgba(114,121,113,0.18)] bg-white/70 p-7 shadow-[0_20px_48px_rgba(32,52,35,0.06)] max-sm:mt-6 max-sm:p-5">
            <h3 className="font-serif text-2xl font-semibold leading-tight text-sage">Không cần tự chọn một mình</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Gửi tình trạng hiện tại, đội ngũ sẽ gợi ý lộ trình phù hợp trước khi giữ suất.
            </p>
            <a className={`${primaryButton} mt-7 w-full sm:w-auto`} href="#contact">
              Gửi tình trạng để nhận lộ trình
            </a>
          </div>
        </div>

        <div className="md:col-span-7" data-motion="rise" data-motion-delay="120">
          <FaqList />
        </div>
      </div>
    </section>
  );
}

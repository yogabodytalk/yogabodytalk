import { testimonials } from "@/data/landing";
import { eyebrow, heading, primaryButton, section, shell } from "./shared";

export function FeedbackSection() {
  return (
    <section className={`${section} bg-cream`} id="feedback" aria-labelledby="feedback-title">
      <div className={shell}>
        <div className="mb-12 grid gap-6 max-sm:mb-7 lg:grid-cols-[0.85fr_1fr] lg:items-end" data-motion="rise">
          <div>
            <p className={eyebrow}>Phản hồi học viên</p>
            <h2 id="feedback-title" className={heading}>
              Người học nói gì sau BODY TALK?
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted max-sm:text-[15px] max-sm:leading-7 lg:justify-self-end">
            Hai câu chuyện đã có trong feedback khách hàng: một người bận rộn với áp lực thương trường, một người học online từ Mỹ. Điểm chung là bắt đầu từ việc lắng nghe cơ thể thật.
          </p>
        </div>

        <div className="grid gap-5 max-sm:flex max-sm:snap-x max-sm:overflow-x-auto max-sm:pb-3 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden md:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure
              className="grid min-h-[280px] grid-cols-[88px_1fr] gap-5 rounded-lg border border-[rgba(113,121,113,0.24)] bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 max-sm:min-h-[260px] max-sm:w-[84vw] max-sm:shrink-0 max-sm:snap-center max-sm:grid-cols-1 max-sm:gap-4 max-sm:p-5 md:p-7 lg:grid-cols-[112px_1fr] lg:gap-6"
              key={item.name}
              data-motion="rise"
              data-motion-delay={String(index * 110)}
            >
              <div className="overflow-hidden rounded-lg border border-[rgba(113,121,113,0.2)] bg-surface max-sm:h-40">
                <img
                  className="motion-image-soft h-full w-full object-cover"
                  src={item.image}
                  alt={`Ảnh đại diện ${item.name}`}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex min-w-0 flex-col">
                <figcaption>
                  <p className="font-serif text-[1.35rem] font-medium leading-tight text-sage">{item.name}</p>
                  <p className="mt-1 text-sm font-medium leading-5 text-muted">{item.role}</p>
                </figcaption>

                <blockquote className="relative mt-7 flex-1 border-l-2 border-gold/55 pl-4 font-serif text-[clamp(1.18rem,1.55vw,1.42rem)] font-medium leading-[1.5] text-ink max-sm:mt-5 max-sm:text-[1.1rem]">
                  {item.quote}
                </blockquote>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-gold-deep">
                  Feedback thật từ học viên
                </p>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(113,121,113,0.18)] pt-8 max-sm:mt-7 max-sm:pt-6 sm:flex-row sm:items-center sm:justify-between" data-motion="rise">
          <p className="max-w-xl text-base font-medium text-muted">Bạn cũng có thể bắt đầu từ tình trạng hiện tại của cơ thể.</p>
          <a className={`${primaryButton} self-start`} href="#contact">
            Nhận lộ trình
          </a>
        </div>
      </div>
    </section>
  );
}

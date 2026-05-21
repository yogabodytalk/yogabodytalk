import { testimonials } from "@/data/landing";
import { eyebrow, heading, primaryButton, section, shell } from "./shared";

export function FeedbackSection() {
  return (
    <section className={`${section} bg-cream`} id="feedback" aria-labelledby="feedback-title">
      <div className={shell}>
        <div className="mb-12 max-w-[760px] text-center max-sm:mb-7 max-sm:text-left md:text-left" data-motion="rise">
          <p className={eyebrow}>Phản hồi học viên</p>
          <h2 id="feedback-title" className={heading}>
            Người học nói gì sau BODY TALK?
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted max-sm:mt-4 max-sm:text-[15px] max-sm:leading-7">
            Hai chia sẻ thật từ học viên, cho thấy BODY TALK phù hợp cả khi bạn bận rộn, ở xa hoặc đang chịu nhiều áp lực.
          </p>
        </div>

        <div className="grid gap-5 max-sm:flex max-sm:snap-x max-sm:overflow-x-auto max-sm:pb-3 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden md:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure
              className="flex min-h-[320px] flex-col rounded-lg border border-[rgba(113,121,113,0.24)] bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 max-sm:min-h-[300px] max-sm:w-[82vw] max-sm:shrink-0 max-sm:snap-center max-sm:p-5 md:p-8"
              key={item.name}
              data-motion="rise"
              data-motion-delay={String(index * 110)}
            >
              <div className="flex items-center gap-4">
                <div className="size-16 shrink-0 overflow-hidden rounded-full border border-[rgba(113,121,113,0.24)] bg-surface">
                  <img
                    className="motion-image-soft h-full w-full object-cover"
                    src={item.image}
                    alt={`Ảnh đại diện ${item.name}`}
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <p className="font-serif text-2xl font-semibold leading-tight text-sage">{item.name}</p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-muted">{item.role}</p>
                </figcaption>
              </div>

              <blockquote className="relative mt-8 flex-1 pl-5 font-serif text-[clamp(1.35rem,2.1vw,1.75rem)] leading-[1.35] text-ink max-sm:mt-6 max-sm:text-[1.18rem]">
                <span className="absolute -left-1 -top-3 select-none text-5xl leading-none text-gold/45" aria-hidden="true">
                  "
                </span>
                {item.quote}
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(113,121,113,0.18)] pt-8 max-sm:mt-7 max-sm:pt-6 sm:flex-row sm:items-center sm:justify-between" data-motion="rise">
          <p className="max-w-xl text-base font-semibold text-muted">Bạn cũng có thể bắt đầu từ tình trạng hiện tại của cơ thể.</p>
          <a className={primaryButton} href="#contact">
            Nhận gợi ý lộ trình theo cơ thể
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { retreatFit, retreatHighlights, retreatRhythm } from "@/data/landing";
import { primaryButton, secondaryButton, section, shell } from "./shared";

export function RetreatSection() {
  return (
    <section className={`${section} bg-[#285A38] text-white`} id="retreats" aria-labelledby="retreats-title">
      <div className={shell}>
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-motion="rise">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold">Camp, retreat & reset cơ thể</p>
            <h2 id="retreats-title" className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.18]">
              Đi để cơ thể được nghỉ, thở và bắt đầu lại.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/78 md:text-base">
              Những chuyến camp và retreat của BODY TALK dành cho người muốn tạm rời nhịp sống dày đặc, reset thói quen ăn uống - nghỉ ngơi và trở về với cảm nhận cơ thể thật.
            </p>
          </div>

          <div className="grid gap-3 rounded-xl border border-white/14 bg-white/8 p-4 max-sm:p-3 sm:grid-cols-3" data-motion="rise" data-motion-delay="120">
            <div className="rounded-lg bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">Không gian</p>
              <p className="mt-3 font-serif text-[1.35rem] leading-[1.15]">rời phố</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">Nhịp sống</p>
              <p className="mt-3 font-serif text-[1.35rem] leading-[1.15]">chậm lại</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">Cơ thể</p>
              <p className="mt-3 font-serif text-[1.35rem] leading-[1.15]">được nghe</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-3" data-motion="scale">
            <div className="relative overflow-hidden rounded-xl bg-cream/10 max-lg:min-h-[520px] max-sm:min-h-[430px]">
              <Image
                className="motion-image-soft h-full min-h-[560px] w-full object-cover object-center opacity-95 max-lg:absolute max-lg:inset-0 max-lg:min-h-full max-lg:object-top"
                src="/anh-ghep/yoga-f3.jpg"
                alt="Yoga Phong Thái BODY TALK - năng lượng thanh tao"
                width={963}
                height={1706}
                loading="eager"
              />
            </div>
            <div className="rounded-xl border border-white/18 bg-white/10 p-4 text-sm font-medium leading-6 text-white/82 shadow-[0_18px_42px_rgba(0,0,0,0.1)]">
              Thải độc ở đây được hiểu là reset nhịp sống: ăn nhẹ hơn, ngủ sâu hơn, vận động vừa sức và giảm quá tải cảm xúc.
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-4 md:grid-cols-3">
              {retreatHighlights.map((item, index) => (
                <article className="rounded-xl border border-white/14 bg-white p-5 text-ink shadow-[0_18px_46px_rgba(0,0,0,0.12)] max-sm:p-4" key={item.title} data-motion="rise" data-motion-delay={String(index * 90)}>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-deep">{item.eyebrow}</p>
                  <h3 className="mt-5 font-serif text-[1.35rem] font-medium leading-[1.22] text-sage max-sm:mt-3 max-sm:text-xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted max-sm:mt-3">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="rounded-xl border border-white/14 bg-[#F6F5EF] p-6 text-ink shadow-[0_22px_58px_rgba(0,0,0,0.16)] max-sm:p-4">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">Một ngày retreat có gì?</p>
                  <div className="mt-5 grid gap-3">
                    {retreatRhythm.map((item) => (
                      <div className="grid grid-cols-[62px_1fr] gap-3 rounded-lg border border-[rgba(114,121,113,0.18)] bg-white/76 p-3" key={item.time}>
                        <span className="font-serif text-lg font-medium leading-tight text-sage">{item.time}</span>
                        <span>
                          <strong className="block text-sm text-sage">{item.title}</strong>
                          <span className="mt-1 block text-sm leading-6 text-muted">{item.body}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">Phù hợp với ai?</p>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
                    {retreatFit.map((item) => (
                      <li className="flex gap-3 rounded-lg bg-white/76 p-3" key={item}>
                        <span className="mt-1 text-gold-deep" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a className={primaryButton} href="#contact">
                      Hỏi lịch camp/retreat
                    </a>
                    <a className={secondaryButton} href="#courses">
                      Xem lộ trình trước
                    </a>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-muted">
                    Nội dung camp/retreat được tư vấn theo tình trạng cơ thể thực tế; không thay thế chẩn đoán hoặc điều trị y khoa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

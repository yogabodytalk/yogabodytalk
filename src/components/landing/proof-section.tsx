import Image from "next/image";
import { ecosystemOfferings, lifeHousePillars, proofItems } from "@/data/landing";
import { eyebrow, heading, section, shell } from "./shared";

export function ProofSection() {
  return (
    <section className={`${section} bg-surface`} id="students" aria-labelledby="students-title">
      <div className={shell}>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end" data-motion="rise">
          <div>
            <p className={eyebrow}>Bản đồ hệ sinh thái</p>
            <h2 id="students-title" className={heading}>
              Một hệ sinh thái để cơ thể có nơi bắt đầu và nơi quay về.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted md:text-base">
              BODY TALK không đứng một mình như một khóa học. Mỗi điểm chạm giúp học viên đọc lại cơ thể, chọn đúng nhịp chăm sóc và duy trì phong thái trong đời sống.
            </p>
          </div>
          <div className="rounded-xl border border-[rgba(114,121,113,0.2)] bg-cream/70 p-5 shadow-[0_22px_60px_rgba(32,52,35,0.06)] max-sm:p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">Ngôi nhà cuộc đời</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {lifeHousePillars.map((pillar, index) => (
                <div className="rounded-lg border border-white/70 bg-white/76 p-4 text-center shadow-[0_10px_24px_rgba(40,90,56,0.04)] max-sm:p-3" key={pillar}>
                  <span className="block text-xs font-semibold text-gold-deep">0{index + 1}</span>
                  <span className="mt-1 block font-serif text-xl font-medium leading-tight text-sage max-sm:text-lg">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 max-sm:mt-7 md:grid-cols-2 lg:grid-cols-4">
          {ecosystemOfferings.map((item, index) => (
            <article className="rounded-xl border border-[rgba(114,121,113,0.2)] bg-white/78 p-5 shadow-[0_18px_46px_rgba(32,52,35,0.05)] max-sm:p-4" key={item.title} data-motion="rise" data-motion-delay={String(index * 80)}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-deep">{item.kicker}</p>
              <h3 className="mt-5 font-serif text-[1.35rem] font-medium leading-[1.22] text-sage max-sm:mt-3 max-sm:text-xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted max-sm:mt-3">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 max-w-3xl max-sm:mt-9" data-motion="rise">
          <p className={eyebrow}>Tài liệu lớp học</p>
          <h2 className={heading}>
            Lộ trình có cấu trúc để người học biết mình đang đi đến đâu.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
            Từ nền tảng hơi thở, chỉnh dáng chuyên sâu đến hành trình 90 ngày, tài liệu giúp học viên nhìn thấy nhịp tiến bộ thay vì tập rời rạc.
          </p>
          <p className="mt-4 hidden text-xs font-semibold uppercase tracking-[0.1em] text-sage max-sm:block">Vuốt ngang để xem tài liệu</p>
        </div>
        <div className="mt-8 grid gap-4 max-sm:mt-6 max-sm:flex max-sm:snap-x max-sm:gap-3 max-sm:overflow-x-auto max-sm:pb-3 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden lg:grid-cols-3">
          {proofItems.map((item, index) => (
            <figure className="rounded-xl border border-[rgba(114,121,113,0.18)] bg-white p-4 shadow-soft max-sm:w-[66vw] max-sm:shrink-0 max-sm:snap-center max-sm:p-3" key={item.src} data-motion="rise" data-motion-delay={String(index * 90)}>
              <Image
                className="motion-image-soft h-[360px] w-full rounded-lg border border-[rgba(114,121,113,0.32)] bg-white p-2 object-contain max-sm:h-[180px]"
                src={item.src}
                alt={item.alt}
                width={900}
                height={1200}
                loading="eager"
              />
              <figcaption className="mt-3 font-semibold text-muted max-sm:text-sm">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

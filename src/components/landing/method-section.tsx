import Image from "next/image";
import { methodPillars } from "@/data/landing";
import { heading, section, shell } from "./shared";

export function MethodSection() {
  return (
    <section className={`${section}`} id="method" aria-labelledby="method-title">
      <div className={`${shell} grid items-start gap-10 max-sm:gap-7 lg:grid-cols-[0.78fr_1.18fr_0.94fr] lg:gap-10`}>
        <div className="flex flex-col gap-6 max-sm:gap-4" data-motion="rise">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-gold/55" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">Phương pháp BODY TALK</p>
          </div>
          <h2 id="method-title" className={heading}>
            Từ tín hiệu cơ thể đến lộ trình phù hợp.
          </h2>
          <p className="max-w-lg text-[15px] leading-7 text-muted md:text-base">
            BODY TALK không bắt đầu bằng động tác khó. Phương pháp này đọc hơi thở, chỉnh lại bộ khung và biến cách bạn đứng, đi, thở thành một phong thái có thể duy trì.
          </p>
          <div className="grid gap-2 rounded-lg border border-gold/20 bg-cream/70 p-3 text-xs font-semibold uppercase leading-5 tracking-[0.09em] text-sage/80 max-sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-1">
            <span>01 Đọc tín hiệu</span>
            <span>02 Cân chỉnh trục</span>
            <span>03 Chọn lộ trình</span>
          </div>
        </div>

        <div className="relative flex justify-center lg:order-3 lg:justify-end" data-motion="scale" data-motion-delay="120">
          <figure className="relative w-full max-w-[360px] border border-gold/25 bg-cream p-2.5 shadow-[0_22px_56px_rgba(32,52,35,0.08)] max-sm:mx-auto max-sm:max-w-[300px] max-sm:rounded-[14px] max-sm:border-gold/30 max-sm:bg-[#f8f3e8] max-sm:p-2.5 max-sm:shadow-[0_18px_42px_rgba(32,52,35,0.1)]">
            <span className="absolute -right-3 -top-3 h-full w-full border border-[rgba(122,94,6,0.12)] max-sm:hidden" aria-hidden="true" />
            <Image
              className="motion-image-soft relative z-10 h-auto w-full max-sm:rounded-[10px] max-sm:object-contain"
              src="/anh-ghep/yoga-f3.jpg"
              alt="Yoga Phong Thái - vẻ đẹp của nội lực thanh tao"
              width={941}
              height={1672}
              sizes="(min-width: 1024px) 360px, (max-width: 640px) 300px, 320px"
              loading="eager"
              unoptimized
            />
          </figure>
        </div>

        <div className="relative mt-2 flex flex-col pl-8 pr-12 max-sm:mt-0 max-sm:gap-3 max-sm:pl-0 max-sm:pr-0 sm:pr-0 lg:order-2 lg:mt-0 lg:pl-10">
          <div className="absolute bottom-8 left-0 top-2 w-px bg-gold/40 max-sm:hidden" aria-hidden="true" />
          {methodPillars.map((item, index) => (
            <article
              className="relative mb-10 border-b border-[rgba(114,121,113,0.24)] pb-10 max-sm:mb-0 max-sm:rounded-lg max-sm:border max-sm:bg-surface/70 max-sm:p-4 max-sm:pb-4 last:mb-0 last:border-b-0 last:pb-1 max-sm:last:border lg:mb-12 lg:pb-12"
              key={item.label}
              data-motion="rise"
              data-motion-delay={String(index * 90)}
            >
              <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-cream bg-gold max-sm:hidden" aria-hidden="true" />
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.1em] text-gold-deep">
                {String(index + 1).padStart(2, "0")} / {item.title}
              </span>
              <h3 className="font-serif text-2xl leading-tight text-sage max-sm:text-xl md:text-[1.8rem]">{item.label}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted max-sm:mt-2 max-sm:text-[13px] max-sm:leading-6 md:text-[15px]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

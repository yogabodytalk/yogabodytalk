import Image from "next/image";
import { methodPillars } from "@/data/landing";
import { heading, section, shell } from "./shared";

export function MethodSection() {
  return (
    <section className={`${section}`} id="method" aria-labelledby="method-title">
      <div className={`${shell} grid items-start gap-10 max-sm:gap-7 lg:grid-cols-[0.78fr_1.18fr_0.94fr] lg:gap-10`}>
        <div className="flex flex-col gap-6 max-sm:gap-4">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-gold/55" aria-hidden="true" />
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold-deep">Phương pháp BODY TALK</p>
          </div>
          <h2 id="method-title" className={heading}>
            Ba trụ cột cho vẻ đẹp bền vững.
          </h2>
          <p className="max-w-lg text-[15px] leading-7 text-muted md:text-base">
            BODY TALK không chỉ dạy động tác. Phương pháp này giúp học viên hiểu cách cơ thể vận hành, đưa cột sống về trục thẳng và biến sự kỷ luật thành phong thái sống.
          </p>
        </div>

        <div className="relative flex justify-center lg:order-3 lg:justify-end">
          <figure className="relative w-full max-w-[360px] border border-gold/25 bg-cream p-2.5 shadow-[0_22px_56px_rgba(32,52,35,0.08)] max-sm:max-w-none max-sm:p-2">
            <span className="absolute -right-3 -top-3 h-full w-full border border-[rgba(122,94,6,0.12)]" aria-hidden="true" />
            <Image
              className="relative z-10 h-auto w-full max-sm:h-[220px] max-sm:object-cover max-sm:object-[50%_22%]"
              src="/anh-ghep/yoga-f3.jpg"
              alt="Yoga Phong Thái - vẻ đẹp của nội lực thanh tao"
              width={941}
              height={1672}
              sizes="(min-width: 1024px) 360px, 300px"
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
            >
              <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-cream bg-gold max-sm:hidden" aria-hidden="true" />
              <span className="mb-3 block text-xs font-extrabold uppercase tracking-[0.14em] text-gold-deep">
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

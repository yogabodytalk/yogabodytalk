import Image from "next/image";
import { heroStats } from "@/data/landing";
import { eyebrow, primaryButton, secondaryButton, shell } from "./shared";

export function HeroSection() {
  return (
    <section
      className={`${shell} grid items-start gap-[clamp(28px,5vw,64px)] pt-[clamp(28px,4vw,48px)] pb-[clamp(52px,7vw,88px)] max-sm:gap-6 max-sm:pt-10 max-sm:pb-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,420px)]`}
      aria-labelledby="hero-title"
    >
      <div className="flex min-h-[680px] flex-col justify-center py-[clamp(12px,2.2vw,32px)] max-lg:min-h-0 max-lg:justify-start max-lg:py-0">
        <p className={eyebrow} data-motion="fade">Yoga Phong Thái · Body Talk</p>
        <h1 id="hero-title" className="max-w-[680px] font-serif text-[clamp(2.35rem,3.8vw,3.45rem)] font-medium leading-[1.14] text-sage max-sm:text-[clamp(2rem,9vw,2.6rem)]" data-motion="rise" data-motion-delay="80">
          Đẹp từ trục cơ thể. Sang từ phong thái.
        </h1>
        <p className="mt-6 max-w-[680px] text-lg font-medium leading-relaxed text-ink/85 max-sm:mt-4 max-sm:text-[15px] max-sm:leading-7" data-motion="rise" data-motion-delay="160">
          Master Thu Nhanh dẫn bạn đọc lại tín hiệu cơ thể, mở hơi thở và chỉnh trục dáng để phong thái không còn là cố gắng, mà trở thành cảm giác tự nhiên.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 max-sm:mt-5" data-motion="rise" data-motion-delay="240">
          <a className={primaryButton} href="#contact">
            Soi dáng miễn phí qua Zalo
          </a>
          <a className={secondaryButton} href="#courses">
            Xem lộ trình phù hợp
          </a>
        </div>
        <div
          className="mt-7 grid gap-4 rounded-lg border border-[rgba(63,107,74,0.16)] bg-white/82 p-4 shadow-[0_18px_42px_rgba(32,52,35,0.08)] max-sm:mt-5 sm:grid-cols-[minmax(110px,0.32fr)_minmax(0,1fr)] sm:items-stretch"
          aria-labelledby="philosophy-title"
          data-motion="rise"
          data-motion-delay="320"
        >
          <div className="grid place-items-center rounded-md bg-cream px-4 py-5 text-center">
            <p className="font-serif text-[clamp(2.1rem,4vw,3rem)] leading-none text-gold-deep max-sm:text-[2rem]">80/20</p>
            <p className="mt-2 text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.1em] text-sage/75">trong trước<br />ngoài sau</p>
          </div>
          <div className="flex flex-col justify-center py-1">
            <h2 id="philosophy-title" className="font-serif text-[1.28rem] font-medium leading-tight text-sage max-sm:text-[1.12rem] sm:text-[1.55rem]">
              Phong thái bắt đầu từ bên trong cơ thể.
            </h2>
            <p className="mt-2 max-w-[620px] text-sm font-medium leading-relaxed text-ink/82 max-sm:text-[13px] max-sm:leading-6 sm:text-[0.98rem]">
              80% là hơi thở, tâm thái, trí tuệ và cảm giác cơ thể. 20% là dáng đi, cử chỉ, ánh nhìn và ngôn ngữ bên ngoài.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 border-t border-[rgba(63,107,74,0.12)] pt-5 max-sm:mt-5 max-sm:pt-4" aria-label="Thông tin chương trình" data-motion="rise" data-motion-delay="400">
          {heroStats.map((item, index) => (
            <div className={`${index === 0 ? "pr-4" : "border-l border-[rgba(63,107,74,0.12)] px-4"} ${index === 2 ? "pr-0" : ""}`} key={item.value}>
              <strong className="block text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-gold-deep max-sm:text-[0.68rem]">{item.value}</strong>
              <span className="mt-1 block text-xs font-semibold leading-snug text-ink/85 max-sm:text-[0.7rem] sm:text-[0.95rem]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-[520px] max-sm:max-w-[330px] lg:max-w-none" aria-label="Ảnh Master Thu Nhanh" data-motion="scale" data-motion-delay="180">
        <div className="relative rounded-t-[250px] rounded-b-[34px] border border-[rgba(63,107,74,0.12)] bg-surface p-3.5">
          <p className="absolute left-8 top-28 z-20 hidden max-w-[150px] rounded-lg border border-[rgba(122,94,6,0.22)] bg-cream/94 px-3.5 py-2.5 text-xs font-semibold uppercase leading-snug tracking-[0.09em] text-gold-deep shadow-[0_14px_30px_rgba(32,52,35,0.12)] lg:block">
            Lắng nghe cơ thể
          </p>
          <div className="motion-breath relative h-[720px] overflow-hidden rounded-t-[220px] rounded-b-3xl border border-[rgba(63,107,74,0.16)] bg-surface-low shadow-soft max-lg:h-[740px] max-sm:h-[420px]">
            <Image
              className="motion-image-soft relative z-10 h-full min-h-0 w-full object-cover object-top"
              src="/anh-ghep/yoga-phong-thai-mau1-goc2.png"
              alt="Master Thu Nhanh trong phong cách Yoga Phong Thái toàn thân"
              width={840}
              height={1200}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { heroStats } from "@/data/landing";
import { eyebrow, primaryButton, secondaryButton, shell } from "./shared";

export function HeroSection() {
  return (
    <section
      className={`${shell} grid items-start gap-[clamp(28px,5vw,64px)] pt-[clamp(28px,4vw,48px)] pb-[clamp(52px,7vw,88px)] max-sm:gap-6 max-sm:pt-10 max-sm:pb-9 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,420px)]`}
      aria-labelledby="hero-title"
    >
      <div className="flex min-h-[680px] flex-col justify-center py-[clamp(12px,2.2vw,32px)] max-lg:min-h-0 max-lg:justify-start max-lg:py-0">
        <p className={eyebrow} data-motion="fade">Yoga Phong Thái · Body Talk</p>
        <h1 id="hero-title" className="max-w-[680px] font-serif text-[clamp(2.45rem,4vw,3.625rem)] font-normal leading-[1.1] text-sage max-sm:text-[clamp(2.125rem,10vw,2.75rem)]" data-motion="rise" data-motion-delay="80">
          Đẹp từ trục cơ thể. Sang từ phong thái.
        </h1>
        <p className="mt-6 max-w-[680px] text-lg font-medium leading-relaxed text-ink/85 max-sm:mt-4 max-sm:text-[15px] max-sm:leading-7" data-motion="rise" data-motion-delay="160">
          Lộ trình cùng Master Thu Nhanh giúp phụ nữ mở hơi thở, chỉnh lại trục dáng và đưa sự thanh lịch trở thành cảm giác tự nhiên trong từng cử chỉ.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 max-sm:mt-5" data-motion="rise" data-motion-delay="240">
          <a className={primaryButton} href="#contact">
            Soi dáng miễn phí ngay
          </a>
          <a className={secondaryButton} href="#courses">
            Xem khóa phù hợp với tôi
          </a>
        </div>
        <div
          className="mt-7 rounded-lg border border-l-[3px] border-[rgba(63,107,74,0.18)] border-l-gold bg-white/76 px-5 py-5 shadow-[0_18px_42px_rgba(32,52,35,0.08)] max-sm:mt-5 max-sm:px-4 max-sm:py-4 sm:grid sm:grid-cols-[124px_minmax(0,1fr)] sm:items-center sm:gap-6"
          aria-labelledby="philosophy-title"
          data-motion="rise"
          data-motion-delay="320"
        >
          <div>
            <p className="font-serif text-[clamp(1.9rem,3.4vw,2.65rem)] leading-none text-gold-deep max-sm:text-[1.75rem]">80/20</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <h2 id="philosophy-title" className="font-serif text-[1.35rem] font-normal leading-tight text-sage max-sm:text-[1.15rem] sm:text-[1.7rem]">
              Không chỉ là tập luyện hình thể.
            </h2>
            <p className="mt-2 max-w-[620px] text-sm font-bold leading-relaxed text-ink/85 max-sm:text-[13px] max-sm:leading-6 sm:text-[1.05rem]">
              Yoga Phong Thái là sự giao thoa giữa <strong className="font-extrabold text-sage">80% yếu tố bên trong</strong> và <strong className="font-extrabold text-sage">20% yếu tố bên ngoài</strong>: từ trí tuệ, tâm thái đến cử chỉ, ứng xử và ngôn ngữ cơ thể.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 border-t border-[rgba(63,107,74,0.12)] pt-5 max-sm:mt-5 max-sm:pt-4" aria-label="Thông tin chương trình" data-motion="rise" data-motion-delay="400">
          {heroStats.map((item, index) => (
            <div className={`${index === 0 ? "pr-4" : "border-l border-[rgba(63,107,74,0.12)] px-4"} ${index === 2 ? "pr-0" : ""}`} key={item.value}>
              <strong className="block text-[0.82rem] font-extrabold uppercase tracking-[0.13em] text-gold-deep max-sm:text-[0.68rem]">{item.value}</strong>
              <span className="mt-1 block text-xs font-extrabold leading-snug text-ink/85 max-sm:text-[0.7rem] sm:text-[0.95rem]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-[520px] max-sm:max-w-[330px] lg:max-w-none" aria-label="Ảnh Master Thu Nhanh" data-motion="scale" data-motion-delay="180">
        <div className="relative overflow-hidden rounded-t-[250px] rounded-b-[34px] border border-[rgba(63,107,74,0.12)] bg-surface p-3.5">
          <p className="absolute left-6 top-24 z-20 hidden max-w-[128px] rounded-lg border border-[rgba(122,94,6,0.22)] bg-cream/92 px-3 py-2 text-xs font-extrabold uppercase leading-snug tracking-[0.12em] text-gold-deep shadow-[0_14px_30px_rgba(32,52,35,0.12)] lg:block">
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

import Image from "next/image";
import { heroStats } from "@/data/landing";
import { eyebrow, primaryButton, secondaryButton, shell } from "./shared";

export function HeroSection() {
  return (
    <section
      className={`${shell} grid items-start gap-[clamp(28px,5vw,64px)] pt-[clamp(28px,4vw,48px)] pb-[34px] lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]`}
      aria-labelledby="hero-title"
    >
      <div className="pt-[clamp(18px,3.2vw,48px)] max-sm:pt-0">
        <p className={eyebrow}>Personal transformation</p>
        <h1 id="hero-title" className="max-w-[680px] font-serif text-[clamp(2.5rem,4vw,3.625rem)] font-normal leading-[1.1] text-sage max-sm:text-[clamp(2.125rem,10vw,2.75rem)]">
          Đẹp từ trục cơ thể. Sang từ phong thái.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Lộ trình Yoga Phong Thái cùng Master Thu Nhanh giúp phụ nữ mở hơi thở, chỉnh dáng và xây dựng khí chất thanh lịch từ bên trong.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className={primaryButton} href="#contact">
            Đặt lịch tư vấn
          </a>
          <a className={secondaryButton} href="#courses">
            Xem lộ trình
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Thông tin chương trình">
          {heroStats.map((item) => (
            <div className="rounded-xl border border-[rgba(114,121,113,0.32)] bg-white/55 p-4" key={item.value}>
              <strong className="block font-serif text-2xl text-sage">{item.value}</strong>
              <span className="text-sm font-semibold text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div aria-label="Ảnh Master Thu Nhanh">
        <div className="relative overflow-hidden rounded-t-[250px] rounded-b-[34px] border border-[rgba(63,107,74,0.12)] bg-surface p-3.5">
          <div className="relative grid h-[760px] grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-t-[220px] rounded-b-3xl border border-[rgba(63,107,74,0.16)] bg-surface-low pb-[18px] shadow-soft max-lg:h-[780px] max-sm:h-[720px] max-sm:pb-3.5">
            <Image
              className="relative z-10 h-full min-h-0 w-full object-cover object-top"
              src="/anh-ghep/yoga-phong-thai-mau1-goc2.png"
              alt="Master Thu Nhanh trong phong cách Yoga Phong Thái toàn thân"
              width={840}
              height={1200}
              priority
            />
            <blockquote className="relative z-10 mx-auto w-[calc(100%_-_34px)] border-l-4 border-gold bg-cream px-4 py-3.5 text-sm font-semibold leading-normal text-sage shadow-[0_18px_40px_rgba(32,52,35,0.12)] max-sm:w-[calc(100%_-_24px)]">
              “Hơi thở là cây cầu đưa phụ nữ trở về với sự bình an và khí chất của chính mình.”
              <cite className="mt-2 block text-xs font-extrabold not-italic text-muted">Master Thu Nhanh</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

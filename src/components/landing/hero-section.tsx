import Image from "next/image";

const shell = "mx-auto w-[min(1180px,calc(100%_-_40px))]";

export function HeroSection() {
  return (
    <section
      className={`${shell} grid min-h-[690px] grid-cols-[minmax(0,0.9fr)_minmax(470px,0.92fr)] items-center gap-12 pb-12 max-lg:min-h-0 max-lg:grid-cols-1 max-lg:pt-4 max-sm:w-[min(100%_-_24px,390px)] max-sm:gap-6 max-sm:pb-8`}
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="relative z-10 pb-10 max-lg:pb-0" data-motion="rise">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#b9842c] max-sm:mb-3 max-sm:text-xs">
          Yoga Phong Thái
        </p>
        <h1
          id="hero-title"
          className="max-w-[680px] font-serif text-[clamp(3.8rem,6.4vw,6rem)] font-bold leading-[0.94] text-[#285638] max-sm:text-[2.7rem] max-sm:leading-[0.98]"
        >
          Thân khỏe.
          <br />
          Tâm an.
          <br />
          Trí sáng.
        </h1>
        <p className="mt-7 max-w-[600px] text-[19px] font-semibold leading-9 text-[#404b42] max-sm:mt-5 max-sm:text-base max-sm:leading-7">
          BODY TALK là hệ sinh thái giúp bạn đọc lại tín hiệu cơ thể, mở hơi thở,
          cân chỉnh trục dáng và chọn đúng nhịp chăm sóc để phong thái trở thành cảm giác tự nhiên.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 max-sm:mt-5">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#143f2b] px-6 text-base font-extrabold text-[#fff8e8] shadow-[0_18px_40px_rgba(20,63,43,0.18)] transition hover:-translate-y-px max-sm:w-full"
            href="#ecosystem"
          >
            Khám phá hệ sinh thái
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#143f2b]/22 bg-[#fffaf1]/74 px-6 text-base font-extrabold text-[#143f2b] transition hover:-translate-y-px max-sm:w-full"
            href="#contact"
          >
            Chọn lộ trình của tôi
          </a>
        </div>
      </div>

      <figure
        className="relative min-h-[650px] overflow-hidden rounded-bl-[118px] bg-[#e6decf] shadow-[0_22px_72px_rgba(34,61,41,0.1)] max-lg:min-h-[520px] max-lg:rounded-3xl max-sm:min-h-[338px]"
        aria-label="Ảnh minh họa phong thái BODY TALK"
        data-motion="scale"
        data-motion-delay="120"
      >
        <Image
          className="h-full w-full object-cover object-center"
          src="/bodytalk-match-assets/hero-wellness.webp"
          alt="Ảnh minh họa người phụ nữ lắng nghe nhịp thở trong không gian BODY TALK"
          width={1024}
          height={1536}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,247,238,0.48),transparent_32%),linear-gradient(180deg,transparent_72%,rgba(251,247,238,0.66))]" aria-hidden="true" />
      </figure>
    </section>
  );
}

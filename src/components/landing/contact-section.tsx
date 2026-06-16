import Image from "next/image";

export function ContactSection() {
  return (
    <section className="grid bg-[#fffaf1] lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.85fr)]" id="contact" aria-labelledby="contact-title">
      <div className="relative min-h-[500px] overflow-hidden max-lg:min-h-[360px] max-sm:min-h-[300px]" data-motion="scale">
        <Image
          className="h-full w-full object-cover object-center"
          src="/bodytalk-match-assets/consultation-1-1.webp"
          alt="Ảnh minh họa buổi tư vấn 1:1 cùng BODY TALK"
          width={1280}
          height={720}
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </div>

      <div className="flex flex-col justify-center bg-[#fffaf1] px-[clamp(24px,5.5vw,76px)] py-14 max-sm:py-9" data-motion="rise" data-motion-delay="120">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#b9842c]">Tư vấn 1:1</p>
        <h2 id="contact-title" className="max-w-xl font-serif text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.1] text-[#143f2b]">
          Tư vấn 1:1 cùng BODY TALK
        </h2>
        <p className="mt-4 max-w-xl text-[15px] font-semibold leading-7 text-[#62665e]">
          Chúng tôi lắng nghe và gợi ý lộ trình phù hợp nhất cho bạn.
        </p>

        <ul className="mt-7 grid gap-3 p-0 text-[15px] font-bold leading-6 text-[#4c554e]">
          {["Đánh giá nhu cầu & mục tiêu cá nhân", "Gợi ý nhánh chăm sóc phù hợp", "Đồng hành trong suốt hành trình"].map((item) => (
            <li className="flex items-start gap-3" key={item}>
              <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#b9842c] text-[11px] text-[#b9842c]">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#143f2b] px-7 text-sm font-extrabold text-[#fff8e8] shadow-[0_18px_40px_rgba(20,63,43,0.18)] transition hover:-translate-y-px max-sm:w-full"
            href="https://zalo.me/0962895314"
            target="_blank"
            rel="noreferrer"
          >
            Đặt lịch tư vấn
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#143f2b]/22 bg-white/70 px-7 text-sm font-extrabold text-[#143f2b] transition hover:-translate-y-px max-sm:w-full"
            href="tel:0962895314"
          >
            0962 895 314
          </a>
        </div>
      </div>
    </section>
  );
}

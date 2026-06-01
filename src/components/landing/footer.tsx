import Image from "next/image";

import { navItems } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(114,121,113,0.22)] bg-[#eef0e7] text-muted">
      <div className="mx-auto w-[min(1200px,calc(100%_-_40px))] py-8 max-sm:py-4 md:py-10">
        <div className="grid gap-5 rounded-lg bg-sage p-5 text-white max-sm:hidden md:grid-cols-[1fr_auto] md:items-center md:p-7">
          <div>
            <p className="text-xs font-semibold uppercase text-gold">BODY TALK kết nối trực tiếp</p>
            <h2 className="mt-3 font-serif text-[clamp(1.8rem,3vw,2.55rem)] font-medium leading-tight">
              Sẵn sàng soi dáng và chọn lộ trình phù hợp?
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-gold px-5 text-center text-sm font-bold leading-tight text-ink transition hover:-translate-y-px"
              href="https://zalo.me/0962895314"
              target="_blank"
              rel="noreferrer"
            >
              Nhắn Zalo ngay
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/24 px-5 text-center text-sm font-bold leading-tight text-white transition hover:-translate-y-px hover:bg-white/10"
              href="tel:0962895314"
            >
              0962 895 314
            </a>
          </div>
        </div>

        <div className="grid gap-8 border-b border-[rgba(114,121,113,0.22)] py-9 max-sm:gap-4 max-sm:py-4 md:grid-cols-[1.35fr_0.75fr_1fr] md:gap-12 md:py-12">
          <div>
            <a className="inline-flex w-fit max-w-full overflow-hidden rounded-md shadow-[0_6px_16px_rgba(32,52,35,0.05)] ring-1 ring-[rgba(114,121,113,0.1)]" href="#top" aria-label="Về đầu trang BODY TALK">
              <Image
                className="block h-auto w-[144px] max-w-full max-sm:w-[128px]"
                src="/brand-assets/body-talk-logo-lockup.svg"
                alt="BODY TALK - Understand Your Body"
                width={1200}
                height={900}
              />
            </a>
            <p className="mt-4 font-semibold text-sage max-sm:mt-3">Yoga Phong Thái by Master Thu Nhanh</p>
            <p className="mt-3 max-w-md text-[15px] leading-7 max-sm:mt-2 max-sm:text-sm max-sm:leading-6">
              Lắng nghe cơ thể, chỉnh lại trục dáng và khơi dậy phong thái tự tin từ bên trong.
            </p>
          </div>

          <nav aria-label="Liên kết cuối trang">
            <p className="text-xs font-semibold uppercase text-gold-deep">Khám phá</p>
            <ul className="mt-4 grid gap-3 text-sm font-semibold text-sage max-sm:mt-2 max-sm:grid-cols-2 max-sm:gap-x-6 max-sm:gap-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-sage-light max-sm:inline-flex max-sm:min-h-8 max-sm:items-center" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <p className="text-xs font-semibold uppercase text-gold-deep">Liên hệ</p>
            <div className="mt-4 grid gap-4 text-sm leading-6 max-sm:mt-2 max-sm:gap-2.5">
              <p>
                <span className="block font-semibold text-sage">Điện thoại / Zalo</span>
                <a className="mt-1 inline-block text-lg font-bold text-sage transition hover:text-sage-light max-sm:inline-flex max-sm:min-h-8 max-sm:items-center" href="tel:0962895314">
                  0962 895 314
                </a>
              </p>
              <p>
                <span className="block font-semibold text-sage">Địa điểm</span>
                <span className="mt-1 block">Hùng Vương Plaza, Quận 5, TP.HCM</span>
              </p>
              <a
                className="mt-1 inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-[rgba(63,107,74,0.28)] bg-cream px-5 text-center font-bold leading-tight text-sage transition hover:-translate-y-px max-sm:mt-0 max-sm:min-h-9 max-sm:px-4"
                href="#contact"
              >
                Gửi tình trạng cơ thể
              </a>
            </div>
          </address>
        </div>

        <div className="flex flex-col items-start gap-3 pt-5 text-xs font-semibold text-muted/82 max-sm:gap-1.5 max-sm:pt-3 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Yoga Phong Thái / BODY TALK. Hệ sinh thái chuyển động, hơi thở và phong thái.</p>
          <p>BODY TALK · Lắng nghe cơ thể</p>
        </div>
      </div>
    </footer>
  );
}

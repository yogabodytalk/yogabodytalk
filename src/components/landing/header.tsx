"use client";

import { useState } from "react";
import { BrandLockup } from "./brand-lockup";
import { navItems } from "@/data/landing";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[auto_1fr_auto] items-center gap-8 py-5 max-[820px]:grid-cols-[auto_auto] max-[820px]:justify-between max-sm:w-[min(100%_-_20px,390px)] max-sm:py-3">
        <a className="inline-flex min-h-10 items-center" href="#top" aria-label="BODY TALK by Yoga Phong Thái">
          <BrandLockup priority />
        </a>

        <nav className="flex items-center justify-center gap-8 text-sm font-extrabold text-[#263b2e] max-[820px]:hidden" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a className="transition hover:text-[#285638]" href={item.href} key={`${item.href}-${item.label}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#143f2b] px-5 text-sm font-extrabold leading-none text-[#fff8e8] shadow-[0_16px_36px_rgba(20,63,43,0.18)] transition hover:-translate-y-px max-[820px]:hidden"
          href="#contact"
        >
          Chọn lộ trình
        </a>

        <button
          className="hidden h-10 w-10 rounded-full border border-[#143f2b]/18 bg-[#fffaf1] text-[#143f2b] max-[820px]:grid max-[820px]:place-items-center"
          type="button"
          aria-label="Mở menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </header>

      <nav
        className={`${menuOpen ? "grid" : "hidden"} fixed left-3 right-3 top-[64px] z-50 gap-2 rounded-2xl border border-[#143f2b]/16 bg-[#fffaf1]/96 p-3 shadow-[0_18px_54px_rgba(34,61,41,0.16)] backdrop-blur-md min-[821px]:hidden`}
        aria-label="Điều hướng di động"
      >
        {navItems.map((item) => (
          <a
            className="rounded-xl bg-[#f6efdf] px-4 py-3 text-sm font-extrabold text-[#143f2b]"
            href={item.href}
            key={`${item.href}-${item.label}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          className="rounded-xl bg-[#143f2b] px-4 py-3 text-center text-sm font-extrabold text-[#fff8e8]"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Chọn lộ trình
        </a>
      </nav>
    </>
  );
}

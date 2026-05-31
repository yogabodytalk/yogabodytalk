"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/data/landing";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-4 z-50 mx-auto grid w-[min(1200px,calc(100%_-_40px))] grid-cols-[auto_1fr_auto_auto] items-center gap-6 rounded-xl border border-[rgba(114,121,113,0.22)] bg-cream/90 px-4 py-3 shadow-[0_10px_28px_rgba(32,52,35,0.07)] backdrop-blur-md max-[860px]:grid-cols-[auto_auto] max-[860px]:justify-between ${
          scrolled ? "shadow-[0_14px_34px_rgba(32,52,35,0.11)]" : ""
        }`}
      >
        <a className="flex min-h-11 min-w-0 items-center gap-2.5" href="#top" aria-label="Yoga Phong Thái">
          <Image src="/brand-assets/body-talk-symbol-dark.svg" alt="" width={34} height={34} priority />
          <span>
            <strong className="block font-serif text-lg leading-none">Yoga Phong Thái</strong>
            <small className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
              BODY TALK
            </small>
          </span>
        </a>
        <nav className="flex justify-center gap-6 text-sm font-semibold text-muted max-[860px]:hidden" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a className="hover:text-sage" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sage px-5 font-bold leading-none text-white transition hover:-translate-y-px max-[860px]:hidden"
          href="#contact"
        >
          Soi dáng
        </a>
        <button
          className="hidden h-11 w-11 rounded-lg bg-surface text-sage max-[860px]:block"
          type="button"
          aria-label="Mở menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span className="mx-auto my-[5px] block h-0.5 w-[18px] bg-current" />
          <span className="mx-auto my-[5px] block h-0.5 w-[18px] bg-current" />
        </button>
      </header>
      <nav
        className={`${menuOpen ? "grid" : "hidden"} fixed left-4 right-4 top-[78px] z-40 gap-2 rounded-xl border border-[rgba(114,121,113,0.32)] bg-cream/95 p-3.5 shadow-soft`}
        aria-label="Điều hướng di động"
      >
        {navItems.map((item) => (
          <a
            className="rounded-lg bg-surface px-3.5 py-3 font-semibold text-sage"
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}

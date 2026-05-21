"use client";

import { useEffect, useState } from "react";

export function FloatingZaloLink() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      frame = 0;
      setShowScrollTop(window.scrollY > 180);
    };

    const scheduleUpdate = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(updateVisibility);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="floating-action-stack fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 max-sm:gap-2.5" aria-label="Hành động nhanh">
      <button
        className={`floating-scroll-top inline-flex h-12 w-12 items-center justify-center rounded-full border border-sage/15 bg-cream/95 text-sage shadow-[0_14px_34px_rgba(32,52,35,0.16)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-2 focus:ring-offset-cream ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        type="button"
        onClick={scrollToTop}
        aria-label="Lên đầu trang"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a
        className="floating-zalo-action motion-zalo-pulse inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-[#005be0] focus:outline-none focus:ring-2 focus:ring-[#79b6ff] focus:ring-offset-2 focus:ring-offset-cream"
        href="https://zalo.me/0962895314"
        target="_blank"
        rel="noreferrer"
        aria-label="Liên hệ Zalo"
      >
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.27 3.27 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282a3.284 3.284 0 0 1 3.284-3.282a3.27 3.27 0 0 1 1.937.632zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a8 8 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.858 9.23H.192V7.79zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612a3.306 3.306 0 0 1-.002-6.612m-10.14 5.253a1.932 1.932 0 1 0 0-3.863a1.932 1.932 0 0 0 0 3.863m10.14-.003a1.945 1.945 0 1 0 0-3.89a1.945 1.945 0 0 0 0 3.89"
          />
        </svg>
      </a>
    </div>
  );
}

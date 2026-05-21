"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      return;
    }

    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]"));

    elements.forEach((element) => {
      const delay = element.dataset.motionDelay;
      if (delay) {
        element.style.setProperty("--motion-delay", `${delay}ms`);
      }
    });

    root.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("motion-in"));
      return () => {
        root.classList.remove("motion-ready");
      };
    }

    let frame = 0;
    const revealPassedElements = () => {
      frame = 0;
      const triggerY = window.innerHeight * 0.9;

      elements.forEach((element) => {
        if (element.classList.contains("motion-in")) {
          return;
        }

        if (element.getBoundingClientRect().top < triggerY) {
          element.classList.add("motion-in");
        }
      });
    };

    const scheduleReveal = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(revealPassedElements);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("motion-in");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));
    scheduleReveal();
    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      observer.disconnect();
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

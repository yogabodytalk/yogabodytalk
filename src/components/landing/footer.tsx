import Image from "next/image";

export function Footer() {
  return (
    <footer className="mx-auto flex w-[min(1200px,calc(100%_-_40px))] flex-wrap items-center justify-between gap-5 border-t border-[rgba(114,121,113,0.32)] py-8 text-muted">
      <div>
        <Image src="/brand-assets/body-talk-logo-lockup.svg" alt="BODY TALK" width={160} height={48} />
        <p>Yoga Phong Thái by Master Thu Nhanh</p>
      </div>
      <address className="not-italic">
        <a className="font-extrabold text-sage" href="tel:0962895314">
          0962 895 314
        </a>
        <span className="ml-4">Hùng Vương Plaza, Quận 5, TP.HCM</span>
      </address>
    </footer>
  );
}

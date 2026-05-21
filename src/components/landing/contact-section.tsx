import Image from "next/image";
import { LeadForm } from "./lead-form";
import { eyebrow, heading, section, shell } from "./shared";

export function ContactSection() {
  return (
    <section className={`${section} ${shell} grid items-center gap-10 rounded-xl bg-surface p-5 text-ink max-sm:gap-6 max-sm:p-4 sm:p-8 lg:grid-cols-[1fr_minmax(320px,430px)]`} id="contact" aria-labelledby="contact-title">
      <div>
        <p className={eyebrow}>Tư vấn lộ trình</p>
        <h2 id="contact-title" className={heading}>
          Bắt đầu bằng việc hiểu đúng cơ thể của bạn.
        </h2>
        <p className="mt-4 text-muted max-sm:text-sm max-sm:leading-6">
          Gửi thông tin để được tư vấn lộ trình phù hợp: 4 tuần nền tảng, 30 ngày chỉnh dáng hoặc 90 ngày chuyển hóa toàn diện.
        </p>
        <div className="mt-7 rounded-xl bg-white/80 p-5 text-ink shadow-soft max-sm:mt-5 max-sm:p-4">
          <LeadForm />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[430px] rounded-xl bg-cream/70 p-4 pb-7 shadow-soft max-sm:hidden">
        <Image
          className="h-auto w-full rounded-lg object-contain"
          src="/landing-assets/yoga-phong-thai-landing-03-cta.webp"
          alt="Tư vấn Yoga Phong Thái cùng Master Thu Nhanh"
          width={1080}
          height={1920}
          loading="eager"
        />
      </div>
    </section>
  );
}

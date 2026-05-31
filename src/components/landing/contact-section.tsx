import Image from "next/image";
import { LeadForm } from "./lead-form";
import { section, shell } from "./shared";

export function ContactSection() {
  return (
    <section className={`${section} ${shell}`} id="contact" aria-labelledby="contact-title">
      <div className="grid overflow-hidden rounded-xl bg-sage text-white shadow-[0_26px_80px_rgba(32,52,35,0.18)] lg:grid-cols-[1fr_minmax(320px,430px)]">
        <div className="p-6 max-sm:p-5 sm:p-8 lg:p-10" data-motion="rise">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold">Tư vấn lộ trình hệ sinh thái</p>
          <h2 id="contact-title" className="max-w-2xl font-serif text-[clamp(1.9rem,3.5vw,2.9rem)] font-medium leading-[1.16]">
            Bắt đầu bằng việc hiểu đúng cơ thể của bạn.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/78 md:text-base">
            Gửi tình trạng hiện tại để được gợi ý điểm bắt đầu: khóa học, phòng hồi phục cơ thể, camp/retreat, reset thải độc nhịp sống hoặc lộ trình 90 ngày phù hợp hơn.
          </p>

          <div className="mt-7 grid gap-3 text-sm font-semibold leading-6 text-white/82 sm:grid-cols-3">
            <span className="rounded-lg border border-white/14 bg-white/8 p-4">01. Soi tín hiệu cơ thể</span>
            <span className="rounded-lg border border-white/14 bg-white/8 p-4">02. Chọn đúng điểm bắt đầu</span>
            <span className="rounded-lg border border-white/14 bg-white/8 p-4">03. Đi theo lộ trình phù hợp</span>
          </div>

          <div className="mt-8 rounded-xl bg-white p-5 text-ink shadow-[0_22px_54px_rgba(0,0,0,0.18)] max-sm:mt-6 max-sm:p-4">
            <LeadForm />
          </div>
        </div>

        <div className="relative min-h-[520px] bg-cream/10 max-lg:hidden" data-motion="scale" data-motion-delay="120">
          <Image
            className="motion-image-soft h-full w-full object-cover"
            src="/landing-assets/yoga-phong-thai-landing-03-cta.webp"
            alt="Tư vấn Yoga Phong Thái cùng Master Thu Nhanh"
            width={1080}
            height={1920}
            loading="eager"
          />
          <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/35 bg-sage/90 p-4 text-sm font-medium leading-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
            Một tin nhắn đủ để đội ngũ biết bạn nên bắt đầu từ nền tảng, chỉnh dáng sâu, trải nghiệm hồi phục hay một chuyến camp/retreat.
          </div>
        </div>
      </div>
    </section>
  );
}

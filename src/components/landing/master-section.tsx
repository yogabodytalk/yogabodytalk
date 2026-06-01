import Image from "next/image";
import { primaryButton, section, shell } from "./shared";

export function MasterSection() {
  return (
    <section className={`${section} ${shell} grid items-center gap-8 md:grid-cols-[0.72fr_1fr] lg:grid-cols-[0.75fr_1fr] lg:gap-14`} id="master" aria-labelledby="master-title">
      <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-xl bg-surface md:max-w-none" data-motion="scale">
        <Image
          className="motion-image-soft h-[min(104vw,450px)] w-full object-cover object-top shadow-soft md:h-[430px] lg:h-[560px]"
          src="/anh-ghep/yoga-phong-thai-02.png"
          alt="Master Thu Nhanh BODY TALK"
          width={900}
          height={1100}
          loading="eager"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/45 bg-cream/92 px-4 py-3 text-xs font-semibold uppercase leading-snug tracking-[0.09em] text-sage shadow-[0_18px_36px_rgba(32,52,35,0.14)]">
          Kiến tạo BODY TALK từ trục dáng, hơi thở và phong thái sống
        </div>
      </div>
      <div data-motion="rise" data-motion-delay="120">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">Người kiến tạo hệ sinh thái</p>
        <p className="mb-3 font-sans text-[0.95rem] font-semibold uppercase leading-tight tracking-[0.09em] text-gold-deep md:text-base lg:text-[1.05rem]">
          Master Yoga
        </p>
        <h2 id="master-title" className="max-w-[680px] font-serif text-[clamp(1.9rem,7vw,2.65rem)] font-medium leading-[1.14] text-sage md:text-[clamp(2.1rem,3.6vw,3rem)] lg:text-[clamp(2.4rem,3.6vw,3.35rem)]">
          Nguyễn Thị Thu Nhanh
        </h2>
        <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-muted md:text-base lg:mt-6 lg:text-lg">
          Master Thu Nhanh đặt BODY TALK như một cách chăm sóc trọn vẹn: chỉnh lại cơ thể bằng sự hiểu biết, hơi thở và thói quen sống mới thay vì ép dáng trong thời gian ngắn.
        </p>
        <dl className="mt-7 grid grid-cols-3 gap-2 max-sm:grid-cols-1 sm:gap-3 lg:mt-8" data-motion="rise" data-motion-delay="220">
          <div className="border-t-[3px] border-gold bg-surface p-4 max-sm:grid max-sm:grid-cols-[88px_1fr] max-sm:items-start max-sm:gap-3 max-sm:p-4 md:p-3 lg:p-4">
            <dt className="font-serif text-2xl text-sage max-sm:text-2xl lg:text-3xl">Gần 20</dt>
            <dd className="mt-1 text-xs font-medium leading-snug text-muted max-sm:mt-0 max-sm:text-sm max-sm:leading-5">năm thực hành Yoga và cân chỉnh cơ thể</dd>
          </div>
          <div className="border-t-[3px] border-gold bg-surface p-4 max-sm:grid max-sm:grid-cols-[88px_1fr] max-sm:items-start max-sm:gap-3 max-sm:p-4 md:p-3 lg:p-4">
            <dt className="font-serif text-2xl text-sage max-sm:text-2xl lg:text-3xl">18+</dt>
            <dd className="mt-1 text-xs font-medium leading-snug text-muted max-sm:mt-0 max-sm:text-sm max-sm:leading-5">năm giảng dạy, huấn luyện và đồng hành học viên</dd>
          </div>
          <div className="border-t-[3px] border-gold bg-surface p-4 max-sm:grid max-sm:grid-cols-[88px_1fr] max-sm:items-start max-sm:gap-3 max-sm:p-4 md:p-3 lg:p-4">
            <dt className="font-serif text-2xl text-sage max-sm:text-2xl lg:text-3xl">80/20</dt>
            <dd className="mt-1 text-xs font-medium leading-snug text-muted max-sm:mt-0 max-sm:text-sm max-sm:leading-5">nội lực bên trong dẫn dắt vẻ đẹp bên ngoài</dd>
          </div>
        </dl>
        <div className="mt-7 grid gap-3 rounded-xl border border-[rgba(114,121,113,0.18)] bg-cream/70 p-5 text-sm leading-6 text-muted max-sm:p-4 sm:grid-cols-3">
          <span>Thân: trục dáng, hơi thở, năng lượng.</span>
          <span>Tâm: bình tĩnh, lắng nghe, phục hồi nhịp sống.</span>
          <span>Trí: chọn đúng thói quen và lộ trình dài hạn.</span>
        </div>
        <a className={`${primaryButton} mt-7`} href="#contact">
          Soi tình trạng cùng đội ngũ
        </a>
      </div>
    </section>
  );
}

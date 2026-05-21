import Image from "next/image";
import { eyebrow, section, shell } from "./shared";

export function MasterSection() {
  return (
    <section className={`${section} ${shell} grid items-center gap-8 md:grid-cols-[0.72fr_1fr] lg:grid-cols-[0.75fr_1fr] lg:gap-14`} id="master" aria-labelledby="master-title">
      <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-xl bg-surface md:max-w-none">
        <Image
          className="h-[min(72vw,320px)] w-full object-cover object-top shadow-soft md:h-[380px] lg:h-[520px]"
          src="/anh-ghep/yoga-phong-thai-02.png"
          alt="Master Thu Nhanh BODY TALK"
          width={900}
          height={1100}
          loading="eager"
        />
      </div>
      <div>
        <p className={eyebrow}>Người đồng hành</p>
        <p className="mb-3 font-sans text-[0.95rem] font-extrabold uppercase leading-tight tracking-[0.13em] text-gold-deep md:text-base lg:text-[1.125rem]">
          Master Yoga
        </p>
        <h2 id="master-title" className="max-w-[680px] font-serif text-[clamp(2rem,8vw,2.8rem)] font-bold leading-[1] text-sage md:text-[clamp(2.2rem,4vw,3.25rem)] lg:text-[clamp(2.8rem,4vw,3.85rem)]">
          Nguyễn Thị Thu Nhanh
        </h2>
        <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-muted md:text-base lg:mt-6 lg:text-lg">
          Đồng hành cùng học viên bằng tinh thần kỷ luật để tái sinh: chỉnh sửa cơ thể bằng sự hiểu biết, hơi thở và thói quen sống mới thay vì ép dáng trong thời gian ngắn.
        </p>
        <dl className="mt-7 grid grid-cols-3 gap-2 sm:gap-3 lg:mt-8">
          <div className="border-t-[3px] border-gold bg-surface p-4 max-sm:p-3 md:p-3 lg:p-4">
            <dt className="font-serif text-2xl text-sage max-sm:text-xl lg:text-3xl">5</dt>
            <dd className="mt-1 text-xs font-bold leading-snug text-muted">học viên tối đa trong lớp offline</dd>
          </div>
          <div className="border-t-[3px] border-gold bg-surface p-4 max-sm:p-3 md:p-3 lg:p-4">
            <dt className="font-serif text-2xl text-sage max-sm:text-xl lg:text-3xl">20</dt>
            <dd className="mt-1 text-xs font-bold leading-snug text-muted">buổi chỉnh sửa trong lộ trình 30 ngày</dd>
          </div>
          <div className="border-t-[3px] border-gold bg-surface p-4 max-sm:p-3 md:p-3 lg:p-4">
            <dt className="font-serif text-2xl text-sage max-sm:text-xl lg:text-3xl">12</dt>
            <dd className="mt-1 text-xs font-bold leading-snug text-muted">tuần cho chương trình thân - tâm - trí</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

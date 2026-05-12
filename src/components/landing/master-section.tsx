import Image from "next/image";
import { eyebrow, section, shell } from "./shared";

export function MasterSection() {
  return (
    <section className={`${section} ${shell} grid items-center gap-10 lg:grid-cols-[0.8fr_1fr]`} id="master" aria-labelledby="master-title">
      <div className="overflow-hidden rounded-xl bg-surface">
        <Image
          className="aspect-[4/5] h-full w-full object-cover object-top shadow-soft"
          src="/anh-ghep/yoga-phong-thai-02.png"
          alt="Master Thu Nhanh BODY TALK"
          width={900}
          height={1100}
          loading="eager"
        />
      </div>
      <div>
        <p className={eyebrow}>Người đồng hành</p>
        <p className="mb-3 font-sans text-[clamp(1.125rem,1.6vw,1.5rem)] font-extrabold uppercase leading-tight tracking-[0.13em] text-gold-deep max-sm:text-[0.9375rem]">
          Master Yoga
        </p>
        <h2 id="master-title" className="max-w-[820px] font-serif text-[clamp(3.125rem,5.8vw,5.125rem)] font-bold leading-[0.98] text-sage max-sm:text-[clamp(2.625rem,13vw,3.5rem)]">
          Nguyễn Thị Thu Nhanh
        </h2>
        <p className="mt-6 text-lg text-muted">
          Đồng hành cùng học viên bằng tinh thần kỷ luật để tái sinh: chỉnh sửa cơ thể bằng sự hiểu biết, hơi thở và thói quen sống mới thay vì ép dáng trong thời gian ngắn.
        </p>
        <dl className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="border-t-[3px] border-gold bg-surface p-4">
            <dt className="font-serif text-3xl text-sage">5</dt>
            <dd className="mt-1 text-xs font-bold text-muted">học viên tối đa trong lớp offline</dd>
          </div>
          <div className="border-t-[3px] border-gold bg-surface p-4">
            <dt className="font-serif text-3xl text-sage">20</dt>
            <dd className="mt-1 text-xs font-bold text-muted">buổi chỉnh sửa trong lộ trình 30 ngày</dd>
          </div>
          <div className="border-t-[3px] border-gold bg-surface p-4">
            <dt className="font-serif text-3xl text-sage">12</dt>
            <dd className="mt-1 text-xs font-bold text-muted">tuần cho chương trình thân - tâm - trí</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

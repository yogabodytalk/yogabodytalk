import {
  BookOpen,
  Heart,
  House,
  Leaf,
  RefreshCw,
  Sprout,
  TentTree,
  type LucideIcon,
} from "lucide-react";
import { ecosystemMapItems } from "@/data/landing";

const shell = "mx-auto w-[min(1180px,calc(100%_-_40px))]";

const ecosystemIconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  heart: Heart,
  camp: TentTree,
  refresh: RefreshCw,
};

export function EcosystemSection() {
  const leftItems = [ecosystemMapItems[0], ecosystemMapItems[2]];
  const rightItems = [ecosystemMapItems[1], ecosystemMapItems[3]];

  return (
    <section
      className="relative overflow-hidden border-y border-[rgba(120,94,44,0.12)] bg-[#f6efdf] py-16 text-center max-sm:py-10"
      id="ecosystem"
      aria-labelledby="ecosystem-title"
    >
      <Sprout className="pointer-events-none absolute left-6 top-[46%] hidden h-28 w-28 -rotate-12 text-[#9faf83]/40 lg:block" aria-hidden="true" strokeWidth={1.1} />
      <Leaf className="pointer-events-none absolute bottom-12 right-8 hidden h-24 w-24 rotate-12 text-[#9faf83]/38 lg:block" aria-hidden="true" strokeWidth={1.1} />
      <div className={shell}>
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[#b9842c]" data-motion="fade">
          Bản đồ hệ sinh thái BODY TALK
        </p>
        <h2
          id="ecosystem-title"
          className="mx-auto max-w-3xl font-serif text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-[1.12] text-[#285638]"
          data-motion="rise"
        >
          Một hệ sinh thái, không phải một khóa học đơn lẻ.
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-[17px] font-semibold leading-8 text-[#62665e] max-sm:text-left max-sm:text-base max-sm:leading-7" data-motion="rise" data-motion-delay="80">
          Người xem có thể bắt đầu từ học nền tảng, chỉnh dáng chuyên sâu, phục hồi,
          video duy trì hoặc camp/retreat tùy tình trạng hiện tại.
        </p>

        <div className="relative mt-11 grid items-center gap-8 md:grid-cols-[1fr_220px_1fr] lg:grid-cols-[1fr_260px_1fr]" data-motion="rise" data-motion-delay="150">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9ad70]/42 md:block" aria-hidden="true" />
          <div className="grid gap-5 max-sm:gap-3 sm:grid-cols-2 md:grid-cols-1">
            {leftItems.map((item) => (
              <EcosystemCard body={item.body} icon={item.icon} label={item.label} key={item.label} />
            ))}
          </div>

          <article className="relative z-10 mx-auto grid min-h-[230px] w-full max-w-[270px] place-items-center rounded-[18px] bg-[#285638] px-6 py-8 text-[#fff8e8] shadow-[0_28px_80px_rgba(34,61,41,0.14)] max-sm:min-h-[178px]">
            <div>
              <span className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-full border border-[#e8c266]/48 text-[#e8c266]">
                <House aria-hidden="true" size={22} strokeWidth={1.7} />
              </span>
              <h3 className="mx-auto max-w-[12rem] font-serif text-[clamp(1.8rem,3vw,2.1rem)] font-semibold leading-[1.08]">
                Ngôi nhà cuộc đời
              </h3>
              <p className="mt-4 text-sm font-bold leading-6 text-[#fff8e8]/80">
                Sức khỏe · Nội tâm
                <br />
                Mối quan hệ · Tài chính
              </p>
            </div>
          </article>

          <div className="grid gap-5 max-sm:gap-3 sm:grid-cols-2 md:grid-cols-1">
            {rightItems.map((item) => (
              <EcosystemCard body={item.body} icon={item.icon} label={item.label} key={item.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemCard({ body, icon, label }: { body: string; icon: string; label: string }) {
  const Icon = ecosystemIconMap[icon] ?? Leaf;

  return (
    <article className="relative z-10 min-h-[146px] rounded-[18px] border border-[rgba(120,94,44,0.2)] bg-[#fffaf1]/88 px-6 py-6 text-center shadow-[0_16px_44px_rgba(34,61,41,0.06)] max-sm:min-h-0 max-sm:px-5 max-sm:py-5 max-sm:text-left">
      <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-[#285638] text-[#e8c266] max-sm:mx-0">
        <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
      </span>
      <h3 className="font-serif text-2xl font-semibold leading-tight text-[#285638]">{label}</h3>
      <p className="mt-2 text-[15px] font-semibold leading-7 text-[#62665e] max-sm:text-base">{body}</p>
    </article>
  );
}

import { painPoints } from "@/data/landing";
import { eyebrow, heading, section, shell } from "./shared";

const cellBorders = [
  "md:border-r md:border-b",
  "border-t md:border-t-0 md:border-b",
  "border-t md:border-r",
  "border-t",
] as const;

export function PainSection() {
  return (
    <section className={`relative overflow-hidden ${section}`} aria-labelledby="pain-title">
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-[min(720px,90vw)] -translate-x-1/2 opacity-[0.16]" aria-hidden="true">
        <svg className="h-full w-full text-sage-light" viewBox="0 0 720 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M88 176C174 68 292 43 360 128C428 213 546 188 632 80" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M134 196C218 110 310 94 360 154C410 214 502 198 586 112" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M286 218C296 176 320 148 360 128C400 148 424 176 434 218" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M360 70V128" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className={shell}>
        <div className="mx-auto max-w-3xl text-center max-sm:text-left" data-motion="rise">
          <p className={eyebrow}>Nhận diện vấn đề</p>
          <h2 id="pain-title" className={heading}>
            Cơ thể đã nói trước khi bạn thấy dáng mình đổi khác.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted md:text-base">
            Vai khép, cổ căng, hơi thở ngắn hay dáng đứng thiếu lực đều là tín hiệu. BODY TALK bắt đầu từ việc đọc đúng tín hiệu, rồi mới chọn bài tập và lộ trình phù hợp.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-lg border border-[rgba(122,94,6,0.22)] bg-white/70 shadow-[0_24px_70px_rgba(32,52,35,0.06)] max-sm:mt-7" data-motion="scale">
          <div className="absolute inset-x-8 top-0 h-px bg-gold/70" aria-hidden="true" />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {painPoints.map((item, index) => (
              <article className={`border-[rgba(122,94,6,0.18)] p-5 max-sm:p-4 sm:p-6 md:min-h-64 md:border-r ${index === 3 ? "md:border-r-0" : ""} ${cellBorders[index]}`} key={item.number}>
                <div className="flex h-full flex-col">
                  <span className="font-serif text-[2.4rem] leading-none text-gold-deep/38 max-sm:text-3xl md:text-[3.2rem]">{item.number}</span>
                  <div className="mt-5 max-sm:mt-3">
                    <h3 className="font-serif text-xl leading-tight text-sage max-sm:text-[1.05rem] md:text-[1.35rem]">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-muted max-sm:text-[12.5px] max-sm:leading-5">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

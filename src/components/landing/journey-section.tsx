import { bodyMachinePrinciples, journeySteps } from "@/data/landing";

type PrincipleIconName = (typeof bodyMachinePrinciples)[number]["icon"];

function PrincipleIcon({ name }: { name: PrincipleIconName }) {
  if (name === "fuel") {
    return (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 48 48">
        <path d="M24 7c6.2 5.8 9.4 11.6 9.4 17.2 0 6-3.8 10.2-9.4 10.2s-9.4-4.2-9.4-10.2C14.6 18.6 17.8 12.8 24 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="M19 25.5c3.1 1.1 6.9 1.1 10 0M24 19v22M17 41h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </svg>
    );
  }

  if (name === "driver") {
    return (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.4" />
        <path d="m24 14-4.2 12.4L32 22l-12.2 4.4L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="M24 5v4M24 39v4M5 24h4M39 24h4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 48 48">
      <path d="M24 7v34M15 11c6.4 3.5 11.6 3.5 18 0M14 37c7-3.4 13-3.4 20 0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      <path d="M24 14.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM24 39.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor" />
    </svg>
  );
}

function BodyMachineDiagram() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[rgba(193,201,191,0.45)] bg-white/55 p-6 shadow-[0_24px_70px_rgba(40,90,56,0.06)] max-sm:hidden">
      <svg className="h-auto w-full" fill="none" viewBox="0 0 560 312" aria-label="Sơ đồ cỗ máy cơ thể">
        <path d="M40 54c92-62 191-52 296 30 69 54 128 54 184 0" stroke="#285A38" strokeOpacity="0.42" strokeWidth="2" />
        <path d="M520 226c-92 62-191 52-296-30-69-54-128-54-184 0" stroke="#E8C266" strokeOpacity="0.82" strokeWidth="2" />
        <path d="M98 162c86-44 160-44 222 0 60 42 108 42 144 0" stroke="#285A38" strokeOpacity="0.48" strokeWidth="2" />
        <path d="M154 226V94M116 226h76M126 94h56M136 112h36v96h-36z" stroke="#285A38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M376 107a50 50 0 0 0-100 0M292 82l34 34 34-34" stroke="#285A38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M406 172c31-42 80-43 110-5-31 42-80 43-110 5Z" stroke="#285A38" strokeWidth="3" />
        <path d="M431 169c18-22 42-22 60 0M431 178c18 22 42 22 60 0" stroke="#E8C266" strokeLinecap="round" strokeWidth="3" />
        <circle cx="389" cy="39" r="8" fill="#E8C266" />
        <text fill="#285A38" fontFamily="serif" fontSize="22" fontWeight="600" x="276" y="151">Người cầm lái</text>
        <text fill="#285A38" fontFamily="serif" fontSize="22" fontWeight="600" x="104" y="272">Bộ khung</text>
        <text fill="#285A38" fontFamily="serif" fontSize="22" fontWeight="600" x="400" y="272">Nhiên liệu</text>
      </svg>
    </div>
  );
}

export function JourneySection() {
  return (
    <section className="bg-[#F6F5EF] pt-10 pb-20 max-sm:py-8 md:pt-12 md:pb-[120px]" id="journey" aria-labelledby="journey-title">
      <div className="mx-auto w-[min(1200px,calc(100%_-_40px))]">
        <div className="grid items-center gap-12 max-sm:gap-6 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#b08a1c]">
              Triết lý BODY TALK
            </p>
            <h2 id="journey-title" className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.08] text-[#285A38] max-sm:text-[2rem]">
              Cơ thể là cỗ máy sống, phong thái là cách bạn cầm lái.
            </h2>
            <p className="mt-6 max-w-xl text-[clamp(1rem,1.4vw,1.125rem)] leading-[1.75] text-[#414941] max-sm:mt-4 max-sm:text-[15px] max-sm:leading-7">
              Khi bộ khung được nắn chỉnh, nhiên liệu được nạp đúng và người cầm lái đủ vững vàng, cơ thể bắt đầu vận hành nhẹ hơn, sâu hơn và có hướng đi rõ ràng.
            </p>
          </div>
          <BodyMachineDiagram />
        </div>

        <div className="mt-20 grid gap-6 max-sm:mt-8 max-sm:gap-3 md:grid-cols-3" aria-label="Ba yếu tố của cỗ máy cơ thể">
          {bodyMachinePrinciples.map((item) => (
            <article className="rounded-xl border border-[rgba(193,201,191,0.45)] bg-white/35 p-8 transition hover:bg-white/60 max-sm:grid max-sm:grid-cols-[42px_minmax(0,1fr)] max-sm:gap-x-3 max-sm:p-4" key={item.title}>
              <div className="mb-7 text-[#E8C266] max-sm:mb-0 max-sm:[&_svg]:h-7 max-sm:[&_svg]:w-7">
                <PrincipleIcon name={item.icon} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#285A38] max-sm:text-xl">{item.title}</h3>
              <p className="mt-4 text-base leading-[1.7] text-[#414941] max-sm:col-start-2 max-sm:mt-1 max-sm:text-[13px] max-sm:leading-6">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="relative mx-auto mt-24 max-w-5xl max-sm:mt-8">
          <div className="absolute left-16 right-16 top-6 hidden h-px bg-[rgba(193,201,191,0.75)] md:block" aria-hidden="true" />
          <div className="grid gap-8 max-sm:gap-4 md:grid-cols-4" aria-label="Hành trình chuyển hóa 4 bước">
            {journeySteps.map((item) => (
              <article className="relative z-10 text-left max-sm:grid max-sm:grid-cols-[44px_minmax(0,1fr)] max-sm:gap-x-3 md:text-center" key={item.number}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8C266] bg-[#F6F5EF] text-xs font-extrabold text-[#b08a1c] shadow-[0_0_0_8px_#F6F5EF] max-sm:h-10 max-sm:w-10 md:mx-auto">
                  {item.number}
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-[#285A38] max-sm:mt-0 max-sm:text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-[#414941] max-sm:col-start-2 max-sm:mt-1 max-sm:text-[13px] max-sm:leading-6">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center max-sm:mt-8 max-sm:justify-start">
          <a className="inline-flex items-center gap-2 border-b border-[#E8C266] pb-1 text-sm font-extrabold uppercase tracking-[0.08em] text-[#285A38] transition hover:text-[#b08a1c] max-sm:min-h-11" href="#contact">
            Nhận gợi ý lộ trình theo cơ thể
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

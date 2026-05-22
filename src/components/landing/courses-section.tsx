import { courses } from "@/data/landing";

type CourseIconName = (typeof courses)[number]["icon"];

function CourseIcon({ className = "h-5 w-5", name }: { className?: string; name: CourseIconName }) {
  if (name === "breath") {
    return (
      <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48">
        <path d="M25 7c-7.8 6.2-11.8 12.4-11.8 18.5 0 6.4 4.5 11 10.8 11s10.8-4.6 10.8-11C34.8 19.4 31.5 13.2 25 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
        <path d="M18 26c3.8 1.3 8 1.3 12 0M23.9 19v22M14 40h20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
      </svg>
    );
  }

  if (name === "alignment") {
    return (
      <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48">
        <path d="M24 6v36M16 11c5.8 3.3 10.2 3.3 16 0M15 37c6-3 11.7-3 18 0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
        <path d="M24 14.5a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6ZM24 26.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6ZM24 39.1a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "balance") {
    return (
      <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48">
        <path d="M24 10c5.8 4.2 8.7 8.7 8.7 13.4 0 4.9-3.6 8.4-8.7 8.4s-8.7-3.5-8.7-8.4C15.3 18.7 18.2 14.2 24 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
        <path d="M12 27.5c3.4 0 6.4 1.7 8.2 4.2M36 27.5c-3.4 0-6.4 1.7-8.2 4.2M15 38h18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48">
      <path d="M17 9h14l-2 9H19L17 9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
      <path d="M24 18v22M16 40h16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
      <path d="M15 14c-3.2.5-5 2.2-5 4.7 0 3.1 2.8 5.1 7.7 5.4M33 14c3.2.5 5 2.2 5 4.7 0 3.1-2.8 5.1-7.7 5.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
    </svg>
  );
}

export function CoursesSection() {
  const mentorCourse = courses.find((course) => course.meta === "Truyền nhân") ?? courses[courses.length - 1];
  const coreCourses = courses.filter((course) => course.title !== mentorCourse.title);

  return (
    <section className="bg-[#F6F5EF] pt-20 pb-10 max-sm:pt-12 max-sm:pb-8 md:pt-20 md:pb-12 lg:pt-[120px]" id="courses" aria-labelledby="courses-title">
      <div className="mx-auto w-[min(1200px,calc(100%_-_40px))]">
        <header className="mx-auto max-w-3xl text-center max-sm:text-left" data-motion="rise">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#b08a1c]">
            Lộ trình Body Talk
          </p>
          <h2 id="courses-title" className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-bold leading-[1.1] text-[#285A38] max-sm:text-[1.85rem]">
            Cơ thể bạn đang ở đâu, hãy bắt đầu từ đó.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#414941] max-sm:mt-4 max-sm:text-sm max-sm:leading-6 lg:mt-6 lg:text-[clamp(1rem,1.4vw,1.125rem)] lg:leading-[1.7]">
            Chọn khóa phù hợp với nhịp thở, trục dáng và mức độ sẵn sàng của bạn. Mỗi lộ trình là một bước tiến rõ ràng hơn về sự cân bằng, khí chất và phong thái.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5 max-sm:mt-5 max-sm:justify-start max-sm:gap-2" aria-label="Định hướng lộ trình">
            {["Mới bắt đầu", "Chỉnh dáng sâu", "Truyền nhân"].map((label) => (
              <span className="rounded-full border border-[#285A38]/18 bg-white/65 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#285A38] shadow-[0_10px_24px_rgba(40,90,56,0.05)] max-sm:px-3 max-sm:py-1.5 max-sm:text-[0.65rem]" key={label}>
                {label}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-6 hidden items-center justify-between gap-3 rounded-full border border-[#285A38]/16 bg-white/78 px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#285A38] shadow-[0_14px_34px_rgba(40,90,56,0.07)] backdrop-blur max-sm:flex" aria-label="Gợi ý vuốt ngang để xem nhiều khóa học" data-motion="fade">
          <span className="inline-flex min-w-0 items-center gap-2">
            <span className="flex h-6 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8c266]/28 text-[#775a01]" aria-hidden="true">
              <svg className="course-swipe-cue-arrow h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
              </svg>
            </span>
            <span className="truncate">Vuốt ngang để xem 3 khóa</span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-5 rounded-full bg-[#285A38]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#285A38]/28" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#285A38]/28" />
          </span>
        </div>

        <div className="relative mt-12 max-sm:mt-4 max-sm:after:pointer-events-none max-sm:after:absolute max-sm:after:bottom-4 max-sm:after:right-0 max-sm:after:top-0 max-sm:after:w-14 max-sm:after:bg-gradient-to-l max-sm:after:from-[#F6F5EF] max-sm:after:via-[#F6F5EF]/78 max-sm:after:to-transparent max-sm:after:content-[''] lg:mt-16">
          <div className="grid grid-cols-1 gap-5 max-sm:flex max-sm:snap-x max-sm:gap-4 max-sm:overflow-x-auto max-sm:pt-3 max-sm:pb-4 max-sm:pr-14 max-sm:scroll-px-0 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden md:grid-cols-3 md:items-stretch md:gap-3 lg:gap-6" aria-label="Các khóa học chính, có thể vuốt ngang trên mobile">
            {coreCourses.map((course, index) => {
              const isFeatured = index === 1;

              return (
                <article
                  className={`relative flex h-full flex-col rounded-xl bg-[#faf9f9] p-6 text-[#1a1c1c] transition-all duration-300 max-sm:w-[74vw] max-sm:shrink-0 max-sm:snap-start max-sm:p-5 md:min-h-[540px] md:p-4 lg:min-h-[615px] lg:p-8 ${
                    isFeatured
                      ? "featured-course border border-[#e8c266] shadow-[0_24px_64px_rgba(119,90,1,0.08)] lg:-translate-y-2"
                      : "border border-[rgba(193,201,191,0.42)] hover:shadow-[0_24px_54px_rgba(40,90,56,0.07)]"
                  }`}
                  key={course.title}
                  data-motion="rise"
                  data-motion-delay={String(index * 90)}
                >
                  {isFeatured ? (
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#e8c266] px-3 py-1 text-[0.625rem] font-extrabold uppercase tracking-[0.12em] text-[#251a00]">
                      Phổ biến nhất
                    </span>
                  ) : null}

                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full md:h-9 md:w-9 lg:h-10 lg:w-10 ${isFeatured ? "bg-[#775a01]/10 text-[#775a01]" : "bg-[#eeeeed] text-[#285A38]"}`}>
                    <CourseIcon name={course.icon} className="h-5 w-5 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                  </div>
                  <span className={`text-xs font-extrabold uppercase tracking-[0.14em] md:text-[0.68rem] md:tracking-[0.12em] lg:text-xs lg:tracking-[0.14em] ${isFeatured ? "text-[#775a01]" : "text-[#414941]"}`}>
                    {course.meta}
                  </span>
                </div>

                <h3 className="mt-5 max-w-[20rem] font-serif text-[1.65rem] font-semibold leading-[1.18] text-[#285A38] max-sm:text-[1.38rem] md:text-[1.32rem] md:leading-[1.16] lg:mt-6 lg:text-[2rem] lg:leading-[1.3]">
                  {course.title}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-[#414941] md:text-[13px] md:leading-5 lg:text-base lg:leading-relaxed">{course.time}</p>
                {course.badge ? (
                  <span className="mt-4 inline-flex w-fit rounded bg-[#eeeeed] px-2 py-1 text-[0.625rem] font-extrabold uppercase tracking-[0.12em] text-[#414941] md:text-[0.56rem] lg:text-[0.625rem]">
                    {course.badge}
                  </span>
                ) : null}

                <div className="mt-6 md:mt-5 lg:mt-6">
                  <strong className="block whitespace-nowrap font-serif text-[1.35rem] font-semibold leading-tight text-[#1a1c1c] md:text-[1.1rem] lg:text-2xl">
                    {course.price}
                  </strong>
                </div>

                <hr className="mt-6 w-full border-[rgba(193,201,191,0.42)] md:mt-5 lg:mt-8" />

                <ul className="mt-6 grid content-start gap-3 text-[15px] leading-6 text-[#1a1c1c] max-sm:mt-5 max-sm:gap-2.5 max-sm:text-[13.5px] max-sm:leading-5 md:mt-5 md:gap-2.5 md:text-[13px] md:leading-5 lg:mt-8 lg:flex-1 lg:gap-4 lg:text-base lg:leading-relaxed">
                  {course.items.map((item) => (
                    <li className="flex items-start gap-3 md:gap-2.5 lg:gap-3" key={item}>
                      <span className="mt-1.5 h-5 w-5 shrink-0 rounded-full text-[#e8c266] md:h-4 md:w-4 lg:h-5 lg:w-5" aria-hidden="true">
                        <svg className="h-full w-full" fill="none" viewBox="0 0 24 24">
                          <path d="m7 12 3 3 7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {course.offer ? (
                  <p className="mt-6 rounded-lg border border-[#e8c266]/50 bg-[#ffdf97]/20 p-4 text-sm font-bold leading-relaxed text-[#775a01] md:mt-5 md:p-3 md:text-[12px] md:leading-5 lg:mt-6 lg:p-4 lg:text-sm lg:leading-relaxed">
                    {course.offer.replace("Tặng ngay ", "Tặng ").replace(", giãn cơ, đả thông kinh lạc", "")}
                  </p>
                ) : null}

                <div className="mt-auto pt-6 max-sm:pt-5 lg:pt-8">
                  <a
                    className={`motion-cta inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 text-center text-[13px] font-extrabold uppercase transition md:min-h-11 md:px-3 md:text-[11px] md:leading-4 lg:min-h-12 lg:px-5 lg:text-sm ${
                      isFeatured
                        ? "bg-[#e8c266] text-[#251a00] hover:bg-[#ffdf97]"
                        : "border border-[#285A38] text-[#285A38] hover:bg-[#285A38]/5"
                    }`}
                    href="#contact"
                  >
                    {course.cta}
                  </a>
                </div>
                </article>
              );
            })}
          </div>
        </div>

        <article className="relative mt-12 overflow-hidden rounded-xl bg-[#285A38] p-7 text-white max-sm:mt-7 max-sm:p-5 md:mt-14 md:p-10 lg:p-16" data-motion="scale">
          <div className="absolute inset-0 bg-[#285A38]" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="max-w-[760px]">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#e8c266]">
                Lộ trình Truyền nhân riêng
              </p>
              <h3 className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-bold leading-[1.1] max-sm:text-[1.7rem]">
                Truyền Nhân BODY TALK
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#b8f0c3] max-sm:mt-3 max-sm:text-sm max-sm:leading-6 lg:text-[clamp(1rem,1.4vw,1.125rem)] lg:leading-[1.7]">
                {mentorCourse.time} · {mentorCourse.priceNote}
              </p>
              <div className="mt-6 flex flex-col gap-5 max-sm:mt-4 max-sm:gap-4 sm:flex-row sm:items-center">
                <strong className="whitespace-nowrap font-serif text-[1.5rem] font-semibold text-[#e8c266] lg:text-[clamp(1.5rem,2.4vw,2rem)]">
                  {mentorCourse.price}
                </strong>
                <div className="hidden h-6 w-px bg-white/24 sm:block" aria-hidden="true" />
                <ul className="flex flex-col gap-3 text-sm font-bold text-[#b8f0c3] max-sm:gap-2.5 sm:flex-row sm:gap-5">
                  {mentorCourse.items.map((item) => (
                    <li className="flex items-center gap-2" key={item}>
                      <svg className="h-4 w-4 shrink-0 text-[#e8c266]" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m7 12 3 3 7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a className="motion-cta inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-xl bg-[#e8c266] px-8 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-[#251a00] transition hover:bg-[#ffdf97] lg:w-auto" href="#contact">
              {mentorCourse.cta}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

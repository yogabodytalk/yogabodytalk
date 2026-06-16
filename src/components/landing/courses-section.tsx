import { courses } from "@/data/landing";

const shell = "mx-auto w-[min(1180px,calc(100%_-_40px))]";

export function CoursesSection() {
  return (
    <section className="bg-[#f6efdf] py-20 text-center max-sm:py-12" id="courses" aria-labelledby="courses-title">
      <div className={shell}>
        <header data-motion="rise">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#b9842c]">Lộ trình học</p>
          <h2 id="courses-title" className="mx-auto max-w-3xl font-serif text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-[1.12] text-[#285638]">
            Học theo lộ trình, không xem rời rạc.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] font-semibold leading-7 text-[#62665e] max-sm:text-left max-sm:text-sm max-sm:leading-6">
            Các khóa học được đặt trong cùng một bản đồ: bắt đầu nhẹ, chỉnh sâu,
            duy trì dài hạn hoặc đào tạo chuyên nghiệp.
          </p>
        </header>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <article
              className="rounded-2xl border border-[rgba(120,94,44,0.2)] bg-[#fffaf1]/86 p-6 text-left shadow-[0_15px_42px_rgba(34,61,41,0.055)] max-sm:p-5"
              key={course.title}
              data-motion="rise"
              data-motion-delay={String(index * 80)}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#285638] text-sm font-extrabold text-[#fff8e8]">
                {course.meta === "Truyền nhân" ? "HLV" : course.title.split(" ")[0]}
              </span>
              <h3 className="mt-5 font-serif text-[1.35rem] font-semibold leading-[1.16] text-[#143f2b]">
                {course.title}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#62665e]">{course.time}</p>
              <strong className="mt-5 block text-[15px] font-extrabold text-[#7d3f29]">{course.price}</strong>
              <a
                className="mt-5 inline-flex min-h-9 items-center justify-center rounded-full border border-[#143f2b]/26 px-4 text-xs font-extrabold text-[#143f2b] transition hover:bg-[#143f2b] hover:text-[#fff8e8]"
                href="#contact"
              >
                {course.meta === "Truyền nhân" ? "Tìm hiểu chương trình" : "Tìm hiểu khóa học"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

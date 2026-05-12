import { courses } from "@/data/landing";
import { eyebrow, heading, section, shell } from "./shared";

export function CoursesSection() {
  return (
    <section className={`${section} bg-surface`} id="courses" aria-labelledby="courses-title">
      <div className={shell}>
        <div className="max-w-4xl">
          <p className={eyebrow}>Các khóa học nổi bật</p>
          <h2 id="courses-title" className={heading}>
            Chọn lộ trình phù hợp với mục tiêu hiện tại.
          </h2>
          <p className="mt-4 text-muted">
            Thiết kế khóa học theo tầng: nền tảng cho người mới, chỉnh dáng cho người cần cải thiện rõ rệt, và chương trình 90 ngày cho học viên muốn chuyển hóa sâu hơn.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {courses.map((course) => (
            <article className={`rounded-xl border p-6 ${course.featured ? "border-sage bg-sage text-white" : "border-[rgba(114,121,113,0.32)] bg-white/70 text-ink"}`} key={course.title}>
              <p className="text-sm font-extrabold uppercase tracking-[0.12em]">{course.meta}</p>
              <h3 className="mt-3 font-serif text-3xl">{course.title}</h3>
              <p className="mt-2 font-bold">{course.time}</p>
              <p className="mt-4">{course.body}</p>
              <ul className="mt-5 grid gap-2 text-sm">
                {course.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="mt-6 inline-flex font-extrabold" href="#contact">
                Tư vấn khóa này
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

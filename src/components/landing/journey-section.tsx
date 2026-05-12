import { journeySteps } from "@/data/landing";
import { eyebrow, heading, section, shell } from "./shared";

export function JourneySection() {
  return (
    <section className={`${section} ${shell}`} id="journey" aria-labelledby="journey-title">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <p className={eyebrow}>Quy trình</p>
          <h2 id="journey-title" className={heading}>
            Hành trình chuyển hóa 4 bước.
          </h2>
        </div>
        <p className="text-muted">
          Mỗi giai đoạn được thiết kế để thay đổi diễn ra tự nhiên: nhận diện vấn đề, xây nền tảng, chỉnh sửa chuyên sâu và duy trì phong thái mới.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" aria-label="Hành trình học Yoga Phong Thái">
        {journeySteps.map((item) => (
          <article className="rounded-xl border border-[rgba(114,121,113,0.32)] bg-white/60 p-5" key={item.number}>
            <span className="font-extrabold text-gold-deep">{item.number}</span>
            <h3 className="mt-3 font-serif text-2xl text-sage">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

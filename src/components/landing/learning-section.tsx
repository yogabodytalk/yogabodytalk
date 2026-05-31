import Image from "next/image";
import { learningTracks } from "@/data/landing";
import { eyebrow, heading, primaryButton, section, shell } from "./shared";

export function LearningSection() {
  return (
    <section className={`${section} ${shell}`} id="videos" aria-labelledby="videos-title">
      <div className="mx-auto max-w-[820px] text-center max-sm:text-left">
        <p className={eyebrow}>Thư viện BODY TALK</p>
        <h2 id="videos-title" className={heading}>
          Học theo lộ trình, không xem rời rạc.
        </h2>
        <p className="mt-4 text-muted">
          Các bài học được nhóm theo từng vấn đề cơ thể và từng giai đoạn luyện tập để học viên đi qua một hành trình rõ ràng: thở đúng, chỉnh đúng, rồi đưa phong thái mới vào đời sống.
        </p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="overflow-hidden rounded-xl bg-surface">
          <div className="relative bg-surface-low">
            <Image
              className="h-[420px] w-full object-contain"
              src="/anh-ghep/yoga-phong-thai-goc-moi-context.png"
              alt="Bài học mẫu Hơi thở mở ngực trong thư viện BODY TALK"
              width={1200}
              height={900}
              loading="eager"
            />
            <span className="absolute left-4 top-4 rounded-lg bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-ink">
              Bài học mẫu
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.09em] text-gold-deep">Module mở đầu</p>
            <h3 className="mt-2 font-serif text-3xl text-sage">Bài học mẫu: Hơi thở mở ngực</h3>
            <ul className="mt-4 grid gap-2 text-muted">
              <li>Giải phóng căng thẳng vùng vai gáy và ngực trên.</li>
              <li>Đưa hơi thở sâu xuống khoang bụng để cơ thể dịu lại.</li>
              <li>Thiết lập cảm nhận đầu tiên giữa hơi thở, trục dáng và cảm xúc.</li>
            </ul>
          </div>
        </article>
        <div className="grid gap-4" aria-label="Các lộ trình học BODY TALK">
          {learningTracks.map((track) => (
            <article className={`rounded-xl border p-5 ${track.muted ? "border-dashed border-[rgba(114,121,113,0.32)] bg-white/50" : "border-[rgba(114,121,113,0.32)] bg-white/70"}`} key={track.title}>
              <span className="font-semibold text-gold-deep">{track.count}</span>
              <h3 className="mt-2 font-serif text-2xl text-sage">{track.title}</h3>
              <p className="mt-2 text-muted">{track.body}</p>
              <small className="mt-4 block font-semibold text-sage">{track.status}</small>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-xl border border-[rgba(114,121,113,0.32)] bg-white/70 p-6 text-ink">
        <div>
          <h3 className="font-serif text-3xl text-sage">Muốn học đúng lộ trình?</h3>
          <p className="mt-2 text-muted">Gửi tình trạng cơ thể hiện tại để được gợi ý khóa học phù hợp trước khi bắt đầu.</p>
        </div>
        <a className={primaryButton} href="#contact">
          Nhận tư vấn cá nhân
        </a>
      </div>
    </section>
  );
}

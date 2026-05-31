import { videoCoursePlaceholders, videoCoursePreview } from "@/data/landing";
import { primaryButton, secondaryButton } from "./shared";

function PlayMark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`${compact ? "h-12 w-12" : "h-16 w-16"} grid place-items-center rounded-full border border-white/60 bg-white/88 text-[#285A38] shadow-[0_18px_42px_rgba(19,38,24,0.18)] backdrop-blur`}
      aria-hidden="true"
      data-play-mark
    >
      <svg className={compact ? "h-5 w-5 translate-x-0.5" : "h-7 w-7 translate-x-0.5"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5.8v12.4c0 .86.94 1.4 1.68.95l9.72-6.2a1.12 1.12 0 0 0 0-1.9l-9.72-6.2A1.1 1.1 0 0 0 8 5.8Z" />
      </svg>
    </span>
  );
}

function VideoFrame({
  title,
  status,
  duration,
  featured = false,
}: {
  title: string;
  status: string;
  duration: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-xl border border-[#e1d8c3] bg-[#d8d2c2] ${featured ? "shadow-[0_24px_70px_rgba(40,90,56,0.16)]" : "shadow-[0_18px_45px_rgba(40,90,56,0.1)]"} group-hover:border-[#d5b85b]`}
      data-video-placeholder
      aria-label={`Video sẽ cập nhật: ${title}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.62),transparent_28%),linear-gradient(135deg,rgba(40,90,56,0.92),rgba(91,116,77,0.72)_48%,rgba(232,194,102,0.36))]" />
      <div className="absolute inset-x-6 top-6 h-px bg-white/35" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 right-6 h-px bg-white/25" aria-hidden="true" />
      <div className={`${featured ? "left-5 right-5 top-5" : "left-4 right-4 top-4"} absolute flex items-start justify-between gap-2`}>
        <div className="whitespace-nowrap rounded-full bg-[#F6F5EF]/92 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.11em] text-[#775a01]">
          {status}
        </div>
        <div className="shrink-0 whitespace-nowrap rounded-full bg-[#203423]/74 px-3 py-1.5 text-[0.7rem] font-semibold text-white">
          {duration}
        </div>
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <PlayMark compact={!featured} />
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/34" aria-hidden="true">
          <span className="block h-full w-[28%] rounded-full bg-[#e8c266]/88" />
        </div>
      </div>
    </div>
  );
}

export function VideoCoursesSection() {
  return (
    <section className="bg-[#F6F5EF] py-14 max-sm:py-9 md:py-20" id="videos" aria-labelledby="videos-title">
      <div className="mx-auto w-[min(1200px,calc(100%_-_40px))]">
        <div className="mx-auto max-w-3xl text-center max-sm:text-left" data-motion="rise">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#b08a1c]">Video khóa học</p>
          <h2 id="videos-title" className="font-serif text-[clamp(1.95rem,3.2vw,2.85rem)] font-medium leading-[1.14] text-[#285A38]">
            Video khóa học đang chuẩn bị.
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[15px] leading-7 text-[#414941] max-sm:mx-0 lg:text-[1.05rem] lg:leading-[1.75]">
            BODY TALK sẽ có các video đồng hành theo từng lộ trình. Hiện phần này là khung xem trước để bạn hình dung nhóm bài sắp có, chưa có nội dung để mở.
          </p>
        </div>

        <article className="group mt-11 overflow-hidden rounded-[22px] border border-[#285A38]/14 bg-white/78 p-4 shadow-[0_28px_78px_rgba(40,90,56,0.1)] max-sm:mt-8" data-motion="rise">
          <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
            <VideoFrame title={videoCoursePreview.title} status={videoCoursePreview.status} duration={videoCoursePreview.duration} featured />
            <div className="px-2 pb-2 lg:py-3 lg:pr-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b08a1c]">{videoCoursePreview.eyebrow}</p>
              <h3 className="mt-2 font-serif text-[clamp(1.6rem,2.4vw,2.25rem)] font-medium leading-tight text-[#285A38]">{videoCoursePreview.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#414941]">{videoCoursePreview.body}</p>
              <div className="mt-6 rounded-xl border border-[#285A38]/12 bg-[#F6F5EF]/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#775a01]">Tài nguyên đồng hành</p>
                <p className="mt-2 text-sm leading-6 text-[#5d655d]">
                  Mỗi bài sẽ được gắn vào đúng giai đoạn: nền tảng hơi thở, chỉnh dáng và hành trình Thân - Tâm - Trí.
                </p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1" aria-label="Nhịp học video dự kiến">
                {["Thở đúng", "Chỉnh trục", "Duy trì"].map((item, index) => (
                  <div className="rounded-lg bg-[#F6F5EF] px-4 py-3 lg:flex lg:items-center lg:gap-3" key={item}>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#b08a1c]">0{index + 1}</span>
                    <p className="mt-1 font-semibold text-[#285A38] lg:mt-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 min-w-0">
          <div className="mb-4 hidden items-center justify-between rounded-full border border-[#285A38]/16 bg-white/78 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-[#285A38] shadow-[0_14px_34px_rgba(40,90,56,0.07)] max-sm:flex" aria-label="Gợi ý vuốt ngang để xem video sắp mở" data-motion="fade">
            <span>Vuốt để xem 3 video sắp mở</span>
            <span className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-5 rounded-full bg-[#285A38]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#285A38]/28" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#285A38]/28" />
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3 max-sm:flex max-sm:snap-x max-sm:overflow-x-auto max-sm:pb-4 max-sm:pr-12 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden" aria-label="Các video khóa học sắp mở">
            {videoCoursePlaceholders.map((item) => (
              <article className="group rounded-[16px] border border-[#285A38]/14 bg-white/72 p-3.5 shadow-[0_18px_50px_rgba(40,90,56,0.08)] transition hover:-translate-y-0.5 hover:border-[#d5b85b] max-sm:w-[82%] max-sm:min-w-[82%] max-sm:snap-start" key={item.title}>
                <VideoFrame title={item.title} status={item.status} duration={item.duration} />
                <div className="px-1 pt-4">
                  <h3 className="font-serif text-2xl font-medium leading-tight text-[#285A38] max-sm:text-[1.45rem]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5d655d]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#285A38]/16 bg-white/72 p-5 text-[#203423] shadow-[0_18px_50px_rgba(40,90,56,0.07)]">
          <p className="max-w-2xl text-[15px] leading-7 text-[#414941]">
            Bạn chưa cần chờ video để bắt đầu. Gửi tình trạng hiện tại để đội ngũ gợi ý lộ trình phù hợp trước.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className={primaryButton} href="#contact">
              Gửi tình trạng để được gợi ý
            </a>
            <a className={secondaryButton} href="#contact">
              Nhận thông báo khi mở video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

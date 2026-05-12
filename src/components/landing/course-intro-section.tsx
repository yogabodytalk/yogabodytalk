import Image from "next/image";
import { eyebrow, heading, primaryButton, shell } from "./shared";

export function CourseIntroSection() {
  return (
    <section className="bg-surface py-12" aria-labelledby="course-hero-title">
      <div className={`${shell} grid items-center gap-10 lg:grid-cols-[minmax(280px,440px)_1fr]`}>
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[440px] overflow-hidden rounded-xl border border-[rgba(114,121,113,0.32)] bg-white shadow-soft max-lg:max-w-none">
          <Image
            className="h-full w-full object-cover"
            src="/landing-assets/yoga-phong-thai-landing-02-body-talk.webp"
            alt="Không gian học Yoga Phong Thái BODY TALK"
            width={1080}
            height={1920}
            loading="eager"
          />
          <button
            className="absolute left-1/2 top-1/2 grid h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-sage/90"
            type="button"
            aria-label="Video giới thiệu sẽ cập nhật"
          >
            <span className="ml-1 block h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-white" />
          </button>
        </div>
        <div>
          <p className={eyebrow}>Học cùng BODY TALK</p>
          <h2 id="course-hero-title" className={heading}>
            Một hệ sinh thái học dáng, hơi thở và phong thái.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Trang học được xây dựng theo hướng bán khóa học, video luyện tập và tư vấn cá nhân: học viên có thể bắt đầu từ lớp cơ bản, đi sâu vào chỉnh dáng 30 ngày hoặc theo đuổi lộ trình 90 ngày để tái thiết thân - tâm - trí.
          </p>
          <ul className="mt-5 grid gap-2 text-muted">
            <li>Video luyện tập theo từng nhóm vấn đề cơ thể.</li>
            <li>Mentor chỉnh lỗi tư thế trong lớp nhỏ hoặc cá nhân.</li>
            <li>Tài liệu học tập được hệ thống từ BODY TALK Ecosystem.</li>
          </ul>
          <a className={`${primaryButton} mt-7`} href="#videos">
            Xem thư viện học
          </a>
        </div>
      </div>
    </section>
  );
}

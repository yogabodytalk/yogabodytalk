import Image from "next/image";
import { eyebrow, heading, primaryButton, shell } from "./shared";

export function CourseIntroSection() {
  return (
    <section className="bg-surface py-12 max-sm:py-8" aria-labelledby="course-hero-title">
      <div className={`${shell} grid items-center gap-8 max-sm:gap-6 md:grid-cols-[minmax(220px,340px)_1fr] md:gap-10 lg:grid-cols-[minmax(280px,440px)_1fr]`}>
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[440px] overflow-hidden rounded-xl border border-[rgba(114,121,113,0.32)] bg-white shadow-soft max-sm:aspect-[16/10] max-sm:max-w-none md:max-w-[340px] lg:max-w-[440px]">
          <Image
            className="h-full w-full object-cover max-sm:object-top"
            src="/landing-assets/yoga-phong-thai-landing-02-body-talk.webp"
            alt="Không gian học Yoga Phong Thái BODY TALK"
            width={1080}
            height={1920}
            loading="eager"
          />
          <button
            className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-sage/90 max-sm:h-11 max-sm:w-11 lg:h-[74px] lg:w-[74px]"
            type="button"
            aria-label="Video giới thiệu sẽ cập nhật"
          >
            <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white lg:border-y-[12px] lg:border-l-[18px]" />
          </button>
        </div>
        <div>
          <p className={eyebrow}>Học cùng BODY TALK</p>
          <h2 id="course-hero-title" className={heading}>
            Một hệ sinh thái học dáng, hơi thở và phong thái.
          </h2>
          <p className="mt-5 text-lg text-muted max-sm:mt-4 max-sm:text-[15px] max-sm:leading-7">
            Trang học được xây dựng theo hướng bán khóa học, video luyện tập và tư vấn cá nhân: học viên có thể bắt đầu từ lớp cơ bản, đi sâu vào chỉnh dáng 30 ngày hoặc theo đuổi lộ trình 90 ngày để tái thiết thân - tâm - trí.
          </p>
          <ul className="mt-5 grid gap-2 text-muted max-sm:mt-4 max-sm:text-sm max-sm:leading-6">
            <li>Video luyện tập theo từng nhóm vấn đề cơ thể.</li>
            <li>Mentor chỉnh lỗi tư thế trong lớp nhỏ hoặc cá nhân.</li>
            <li>Tài liệu học tập được hệ thống từ BODY TALK Ecosystem.</li>
          </ul>
          <a className={`${primaryButton} mt-7 max-sm:mt-5`} href="#courses">
            Chọn lộ trình học
          </a>
        </div>
      </div>
    </section>
  );
}

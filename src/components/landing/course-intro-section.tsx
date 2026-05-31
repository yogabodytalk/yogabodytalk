import Image from "next/image";
import { eyebrow, heading, primaryButton, shell } from "./shared";

export function CourseIntroSection() {
  return (
    <section className="bg-surface py-12 max-sm:py-8" aria-labelledby="course-hero-title">
      <div className={`${shell} grid items-center gap-8 max-sm:gap-6 md:grid-cols-[minmax(220px,340px)_1fr] md:gap-10 lg:grid-cols-[minmax(280px,440px)_1fr]`}>
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[440px] overflow-hidden rounded-xl border border-[rgba(114,121,113,0.32)] bg-white shadow-soft max-sm:aspect-[16/10] max-sm:max-w-none md:max-w-[340px] lg:max-w-[440px]" data-motion="scale">
          <Image
            className="motion-image-soft h-full w-full object-cover max-sm:object-top"
            src="/landing-assets/yoga-phong-thai-landing-02-body-talk.webp"
            alt="Không gian học Yoga Phong Thái BODY TALK"
            width={1080}
            height={1920}
            loading="eager"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/50 bg-cream/92 px-4 py-3 text-xs font-semibold uppercase leading-snug tracking-[0.09em] text-sage shadow-[0_18px_36px_rgba(32,52,35,0.14)]">
            Học bằng cơ thể thật, vấn đề thật
          </div>
        </div>
        <div data-motion="rise" data-motion-delay="120">
          <p className={eyebrow}>Học cùng BODY TALK</p>
          <h2 id="course-hero-title" className={heading}>
            Một lộ trình để hiểu cơ thể, không chỉ học động tác.
          </h2>
          <p className="mt-5 text-lg text-muted max-sm:mt-4 max-sm:text-[15px] max-sm:leading-7">
            BODY TALK giúp bạn nhìn lại hơi thở, trục dáng, năng lượng và thói quen sống như một hệ thống. Từ đó, bạn chọn đúng điểm bắt đầu thay vì tập rời rạc theo cảm hứng.
          </p>
          <ul className="mt-5 grid gap-2 text-muted max-sm:mt-4 max-sm:text-sm max-sm:leading-6">
            <li>Lớp nền tảng để mở hơi thở và nhận diện lệch trục.</li>
            <li>Lớp nhỏ hoặc cá nhân để mentor chỉnh lỗi tư thế sát hơn.</li>
            <li>Lộ trình 90 ngày kết nối thân, tâm, trí và phong thái sống.</li>
          </ul>
          <a className={`${primaryButton} mt-7 max-sm:mt-5`} href="#courses">
            Xem lộ trình phù hợp
          </a>
        </div>
      </div>
    </section>
  );
}

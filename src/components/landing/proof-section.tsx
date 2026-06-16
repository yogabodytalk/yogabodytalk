import Image from "next/image";
import { proofGallery } from "@/data/landing";

const shell = "mx-auto w-[min(1180px,calc(100%_-_40px))]";

export function ProofSection() {
  return (
    <section
      className="border-y border-[rgba(120,94,44,0.14)] bg-[#fffaf1]/62 py-16 max-sm:py-11"
      id="proof"
      aria-labelledby="proof-title"
    >
      <div className={shell}>
        <header className="max-w-3xl" data-motion="rise">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#b9842c]">
            Chứng nhận & minh chứng
          </p>
          <h2 id="proof-title" className="font-serif text-[clamp(1.95rem,3vw,2.75rem)] font-semibold leading-[1.12] text-[#285638]">
            Minh bạch. Đàng hoàng. Có chứng nhận.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] font-semibold leading-7 text-[#62665e] max-sm:text-sm max-sm:leading-6">
            Chương trình được xây dựng bài bản và kiểm chứng qua thực hành.
          </p>
        </header>

        <div className="mt-7 grid items-end gap-6 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {proofGallery.map((item, index) => (
              <figure
                className="overflow-hidden rounded-xl border border-[rgba(120,94,44,0.18)] bg-white shadow-[0_12px_34px_rgba(34,61,41,0.07)]"
                key={item.src}
                data-motion="rise"
                data-motion-delay={String(index * 70)}
              >
                <Image
                  className="h-[132px] w-full object-cover max-sm:h-[116px]"
                  src={item.src}
                  alt={item.alt}
                  width={420}
                  height={240}
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </figure>
            ))}
          </div>

          <div
            className="grid min-h-[132px] place-items-center rounded-xl border border-[rgba(120,94,44,0.18)] bg-[#285638] bg-[linear-gradient(rgba(20,63,43,0.36),rgba(20,63,43,0.5)),url('/bodytalk-match-assets/branch-course.webp')] bg-cover bg-center px-6 text-center text-base font-extrabold leading-6 text-[#fff8e8] shadow-[0_12px_34px_rgba(34,61,41,0.07)] max-sm:min-h-[116px]"
            data-motion="scale"
            data-motion-delay="220"
          >
            Video khóa học
            <br />
            đang cập nhật
          </div>
        </div>
      </div>
    </section>
  );
}

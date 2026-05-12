import Image from "next/image";
import { proofItems } from "@/data/landing";
import { eyebrow, heading, section, shell } from "./shared";

export function ProofSection() {
  return (
    <section className={`${section} bg-surface`} id="students" aria-labelledby="students-title">
      <div className={shell}>
        <div className="max-w-4xl">
          <p className={eyebrow}>Bằng chứng học tập</p>
          <h2 id="students-title" className={heading}>
            Tài liệu, lớp học và tiến trình được hệ thống rõ ràng.
          </h2>
          <p className="mt-4 text-muted">
            Thay vì chỉ dùng hình ảnh đẹp, landing page cần cho khách thấy chương trình có cấu trúc học tập: khóa cơ bản, 30 ngày chỉnh dáng, 90 ngày chuyển hóa.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {proofItems.map((item) => (
            <figure className="rounded-xl bg-white p-4 shadow-soft" key={item.src}>
              <Image
                className="h-[360px] w-full rounded-lg border border-[rgba(114,121,113,0.32)] bg-white p-2 object-contain max-sm:h-[320px]"
                src={item.src}
                alt={item.alt}
                width={900}
                height={1200}
                loading="eager"
              />
              <figcaption className="mt-3 font-extrabold text-muted">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

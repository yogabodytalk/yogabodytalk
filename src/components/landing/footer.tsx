import { BrandLockup } from "./brand-lockup";

export function Footer() {
  return (
    <footer className="bg-[#143f2b] py-10 text-[#fff8e8]/78 max-sm:py-8">
      <div className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] gap-8 md:grid-cols-[1.35fr_0.8fr_0.95fr_1fr]">
        <div>
          <a className="inline-flex" href="#top" aria-label="Về đầu trang BODY TALK">
            <BrandLockup size="footer" />
          </a>
          <p className="mt-4 max-w-sm text-sm font-semibold leading-7">
            Hệ sinh thái chăm sóc thân - tâm - trí dành cho người Việt hiện đại.
          </p>
        </div>

        <FooterColumn title="Khám phá" lines={["Hệ sinh thái", "Thân", "Tâm", "Khóa học"]} />
        <FooterColumn title="Hỗ trợ" lines={["Câu hỏi thường gặp", "Chính sách & điều khoản", "Liên hệ"]} />
        <address className="not-italic">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#e7c981]">Liên hệ</p>
          <p className="text-sm font-semibold leading-7">
            Zalo:{" "}
            <a className="text-[#fff8e8]" href="tel:0962895314">
              0962 895 314
            </a>
            <br />
            Email: support@bodytalk.vn
            <br />
            Thời gian hỗ trợ: 08:30 - 20:30
          </p>
        </address>
      </div>
    </footer>
  );
}

function FooterColumn({ lines, title }: { lines: string[]; title: string }) {
  return (
    <nav aria-label={title}>
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#e7c981]">{title}</p>
      <ul className="grid gap-2 p-0 text-sm font-semibold leading-6">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </nav>
  );
}

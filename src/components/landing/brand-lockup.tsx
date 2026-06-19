import Image from "next/image";

export function BrandLockup({ priority = false, size = "header" }: { priority?: boolean; size?: "header" | "footer" }) {
  if (size === "footer") {
    return (
      <span className="inline-flex overflow-hidden rounded-xl bg-[#fffaf1] p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.16)] ring-1 ring-[#fff8e8]/24">
        <Image
          className="block h-auto w-[118px] md:w-[140px]"
          src="/brand-assets/body-talk-logo-full.png"
          alt="BODY TALK - Understand Your Body"
          width={487}
          height={560}
          loading="eager"
          sizes="(max-width: 767px) 118px, 140px"
        />
      </span>
    );
  }

  return (
    <span className="inline-flex overflow-hidden rounded-xl bg-[#003930] shadow-[0_10px_24px_rgba(20,63,43,0.14)] ring-1 ring-[#143f2b]/10">
      <Image
        className="block h-12 w-12 object-cover max-sm:h-10 max-sm:w-10"
        src="/brand-assets/body-talk-logo-mark.png"
        alt="BODY TALK - Understand Your Body"
        width={512}
        height={512}
        priority={priority}
        sizes="48px"
      />
    </span>
  );
}

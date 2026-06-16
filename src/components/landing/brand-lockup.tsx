import Image from "next/image";

export function BrandLockup({ priority = false, size = "header" }: { priority?: boolean; size?: "header" | "footer" }) {
  const widthClass = size === "footer" ? "w-[128px] md:w-[150px]" : "w-[88px] max-sm:w-[78px]";

  return (
    <span className="inline-flex overflow-hidden rounded-md bg-white shadow-[0_8px_20px_rgba(34,61,41,0.06)] ring-1 ring-[#143f2b]/8">
      <Image
        className={`block h-auto ${widthClass}`}
        src="/brand-assets/body-talk-logo-lockup.svg"
        alt="BODY TALK - Understand Your Body"
        width={1200}
        height={900}
        priority={priority}
      />
    </span>
  );
}

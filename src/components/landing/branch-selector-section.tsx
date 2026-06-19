"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BookOpen,
  Brain,
  ChefHat,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CirclePlay,
  ClipboardList,
  Heart,
  HeartPulse,
  Leaf,
  PersonStanding,
  RefreshCw,
  Route,
  SearchCheck,
  Sparkles,
  Soup,
  Target,
  TentTree,
  Trees,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { careBranches } from "@/data/landing";

const shell = "mx-auto w-[min(1180px,calc(100%_-_40px))]";

type BranchId = (typeof careBranches)[number]["id"];

const initialOpenBranches: BranchId[] = ["than", "tam"];

const branchIconMap: Record<string, LucideIcon> = {
  body: PersonStanding,
  heart: Heart,
  sparkles: Sparkles,
};

const itemIconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  play: CirclePlay,
  nutrition: Soup,
  clipboard: ClipboardList,
  recovery: HeartPulse,
  release: UserRound,
  leaf: Leaf,
  kitchen: ChefHat,
  trees: Trees,
  camp: TentTree,
  target: Target,
  scan: SearchCheck,
  route: Route,
  refresh: RefreshCw,
};

export function BranchSelectorSection() {
  const [openBranches, setOpenBranches] = useState<BranchId[]>(initialOpenBranches);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleBranch = (id: BranchId) => {
    setOpenBranches((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const toggleItem = (id: string) => {
    setOpenItems((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  return (
    <section className="bg-[#fbf7ee] py-16 max-sm:py-10" id="branches" aria-labelledby="branches-title">
      <div className={shell}>
        <header className="text-center" data-motion="rise">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[#b9842c]">
            Hệ sinh thái BODY TALK
          </p>
          <h2 id="branches-title" className="font-serif text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.1] text-[#143f2b]">
            Chọn nhánh chăm sóc
          </h2>
        </header>

        <div className="mt-8 grid gap-4" data-motion="rise" data-motion-delay="100">
          {careBranches.map((branch) => {
            const isOpen = openBranches.includes(branch.id);
            const isPrimary = branch.tone === "dark";
            const isSoft = branch.tone === "soft";

            return (
              <article
                className="overflow-hidden rounded-[18px] border border-[rgba(120,94,44,0.2)] bg-[#fffaf1]/88 shadow-[0_18px_54px_rgba(34,61,41,0.07)]"
                key={branch.id}
              >
                <button
                  className={`grid min-h-[86px] w-full grid-cols-[64px_minmax(0,1fr)_42px] items-center gap-4 px-5 py-4 text-left transition max-sm:min-h-[70px] max-sm:grid-cols-[44px_minmax(0,1fr)_34px] max-sm:gap-3 max-sm:px-3 ${
                    isPrimary
                      ? "bg-[#143f2b] text-[#fff8e8]"
                      : isSoft
                        ? "bg-[#e7eedf] text-[#143f2b]"
                        : "bg-[#fffaf1] text-[#143f2b]"
                  }`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`branch-panel-${branch.id}`}
                  onClick={() => toggleBranch(branch.id)}
                >
                  <IconBadge
                    className="h-12 w-12 max-sm:h-9 max-sm:w-9"
                    icon={branchIconMap[branch.icon]}
                    primary={isPrimary}
                  />
                  <span className="min-w-0">
                    <span className="flex items-baseline gap-3">
                      <span className="font-serif text-[clamp(1.4rem,3vw,2.2rem)] font-semibold leading-none">{branch.title}</span>
                      <span className="font-serif text-base font-semibold opacity-55 max-sm:hidden">{branch.number}</span>
                    </span>
                    <span className="mt-1 block text-[15px] font-bold leading-6 opacity-78 max-sm:text-[13px] max-sm:leading-5">{branch.summary}</span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/92 text-[#143f2b] shadow-[0_8px_20px_rgba(20,63,43,0.08)] max-sm:h-8 max-sm:w-8">
                    {isOpen ? <ChevronUp aria-hidden="true" size={18} strokeWidth={2.4} /> : <ChevronDown aria-hidden="true" size={18} strokeWidth={2.4} />}
                  </span>
                </button>

                {isOpen ? (
                  <div className="grid px-5 pb-5 max-sm:px-3 max-sm:pb-3" id={`branch-panel-${branch.id}`}>
                    {branch.items.map((item) => {
                      const itemId = `${branch.id}-${slugify(item.title)}`;
                      const isItemOpen = openItems.includes(itemId);
                      const detailItems = getDetailItems(branch.title, item.title, item.body);

                      return (
                        <article
                          className="border-b border-[rgba(120,94,44,0.18)] last:border-b-0"
                          key={item.title}
                        >
                          <button
                            className="grid min-h-[98px] w-full grid-cols-[148px_38px_minmax(0,1fr)_24px] items-center gap-4 py-3.5 text-left transition hover:bg-[#f6efdf]/70 max-md:grid-cols-[118px_34px_minmax(0,1fr)_20px] max-sm:min-h-[76px] max-sm:grid-cols-[76px_minmax(0,1fr)_16px] max-sm:gap-3 max-sm:py-2.5"
                            type="button"
                            aria-expanded={isItemOpen}
                            aria-controls={`branch-item-panel-${itemId}`}
                            onClick={() => toggleItem(itemId)}
                          >
                            <Image
                              className="h-[76px] w-[148px] rounded-lg object-cover max-md:h-[66px] max-md:w-[118px] max-sm:h-[54px] max-sm:w-[76px]"
                              src={item.image}
                              alt={`Minh họa ${item.title}`}
                              width={280}
                              height={160}
                              sizes="(max-width: 640px) 76px, (max-width: 1024px) 118px, 148px"
                            />
                            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#285638]/18 bg-[#f5f1e6] text-[#285638] max-sm:hidden">
                              <RowIcon name={item.icon} />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-lg font-extrabold leading-tight text-[#143f2b] max-sm:text-[15px]">{item.title}</span>
                              <span className="mt-1 block text-base font-semibold leading-6 text-[#62665e] max-sm:line-clamp-2 max-sm:text-[13.5px] max-sm:leading-5">
                                {item.body}
                              </span>
                            </span>
                            {isItemOpen ? (
                              <ChevronUp className="text-[#285638]" aria-hidden="true" size={20} strokeWidth={2} />
                            ) : (
                              <ChevronRight className="text-[#285638]" aria-hidden="true" size={22} strokeWidth={2} />
                            )}
                          </button>

                          {isItemOpen ? (
                            <div
                              className="mb-4 rounded-xl border border-[#d7bd84]/40 bg-[#f8f1e4] p-4 shadow-[0_14px_36px_rgba(34,61,41,0.055)] max-sm:p-3"
                              id={`branch-item-panel-${itemId}`}
                            >
                              <div className="grid gap-3 md:grid-cols-3">
                                {detailItems.map((detail) => (
                                  <div className="rounded-lg bg-[#fffaf1]/82 p-3" key={detail.label}>
                                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#b9842c]">{detail.label}</p>
                                    <p className="mt-2 text-[15px] font-semibold leading-7 text-[#4f594f] max-sm:text-[13.5px] max-sm:leading-6">
                                      {detail.body}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#d7bd84]/35 pt-3">
                                <p className="text-sm font-bold leading-6 text-[#62665e]">
                                  Khu vực này đã sẵn sàng để bổ sung module, tài liệu, lịch mở hoặc quyền lợi đi kèm.
                                </p>
                                <a
                                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#143f2b] px-4 text-sm font-extrabold text-[#fff8e8] transition hover:-translate-y-px"
                                  href="#contact"
                                >
                                  Trao đổi lộ trình
                                </a>
                              </div>
                            </div>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getDetailItems(branchTitle: string, itemTitle: string, itemBody: string) {
  return [
    {
      label: "Mục tiêu",
      body: itemBody,
    },
    {
      label: "Nội dung kèm theo",
      body: `Có thể bổ sung bài học, tài liệu, lịch mở hoặc quyền lợi riêng cho ${itemTitle}.`,
    },
    {
      label: "Bước tiếp theo",
      body: `Đặt trong nhánh ${branchTitle} để người xem hiểu vai trò trước khi chọn tư vấn.`,
    },
  ];
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function IconBadge({
  className = "",
  icon: Icon,
  primary,
}: {
  className?: string;
  icon: LucideIcon;
  primary?: boolean;
}) {
  return (
    <span
      className={`grid place-items-center rounded-full border ${
        primary ? "border-[#e8c266]/55 text-[#fff8e8]" : "border-[#285638]/24 bg-[#fffaf1]/70 text-[#285638]"
      } ${className}`}
      aria-hidden="true"
    >
      <Icon size={24} strokeWidth={1.7} />
    </span>
  );
}

function RowIcon({ name }: { name: string }) {
  const Icon = itemIconMap[name] ?? Brain;

  return <Icon aria-hidden="true" size={18} strokeWidth={1.8} />;
}

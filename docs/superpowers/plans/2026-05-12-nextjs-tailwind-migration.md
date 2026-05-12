# Next.js Tailwind Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the current Yoga Phong Thái static landing page into a Next.js App Router project styled with Tailwind CSS while preserving the approved content, assets, responsive behavior, and lead form flow.

**Architecture:** Keep the current single-page landing experience, but split it into focused React components under `src/components/landing/`. Use Next.js App Router for metadata and page rendering, `public/` for the current local assets, Tailwind CSS v4 theme tokens for the Calm Sage visual system, and small client components only where interaction is required.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS v4, `next/image`, Playwright for browser verification.

---

## Current Source Map

The current source is a static page:
- Source HTML: `/Users/hafa/Documents/yoga_phong_thai/index.html`
- Source CSS: `/Users/hafa/Documents/yoga_phong_thai/styles.css`
- Source JS: `/Users/hafa/Documents/yoga_phong_thai/script.js`
- Continuity ledger: `/Users/hafa/Documents/yoga_phong_thai/http:/CONTINUITY.md`

The current workspace is not a git repository. Commit steps below are optional and only apply after a git repo is initialized or this folder is moved into one.

Keep these asset paths stable under `public/` so migrated JSX can reference them with root-relative URLs:
- `/brand-assets/body-talk-symbol-dark.svg`
- `/brand-assets/body-talk-logo-lockup.svg`
- `/anh-ghep/yoga-phong-thai-mau1-goc2.png`
- `/anh-ghep/yoga-phong-thai-goc-moi-context.png`
- `/anh-ghep/yoga-phong-thai-02.png`
- `/landing-assets/yoga-phong-thai-landing-02-body-talk.webp`
- `/landing-assets/yoga-phong-thai-landing-03-cta.webp`
- `/docs/z7710226061539_d0a5964d9f9d45a445fc3abe02c65b0f.jpg`
- `/docs/z7710226763217_e07956752ad176247bc2f37c4ea2c518.jpg`
- `/docs/z7710226376419_97422f5a7095c35533f071f5eedcd439.jpg`

Current markup issues to fix during migration, without changing the design:
- Remove the duplicated opening `<section class="section method-section shell" id="method"...>`.
- Remove the duplicated `<p>` in the `Bằng chứng học tập` section.

## File Structure

Create:
- `/Users/hafa/Documents/yoga_phong_thai/package.json` - scripts and dependencies.
- `/Users/hafa/Documents/yoga_phong_thai/next.config.ts` - Next config.
- `/Users/hafa/Documents/yoga_phong_thai/postcss.config.mjs` - Tailwind v4 PostCSS plugin.
- `/Users/hafa/Documents/yoga_phong_thai/tsconfig.json` - TypeScript config.
- `/Users/hafa/Documents/yoga_phong_thai/src/app/layout.tsx` - root layout and metadata.
- `/Users/hafa/Documents/yoga_phong_thai/src/app/page.tsx` - page composition.
- `/Users/hafa/Documents/yoga_phong_thai/src/app/globals.css` - Tailwind import, theme tokens, base styles.
- `/Users/hafa/Documents/yoga_phong_thai/src/data/landing.ts` - all visible copy and asset references.
- `/Users/hafa/Documents/yoga_phong_thai/src/components/landing/header.tsx` - sticky header and mobile menu interaction.
- `/Users/hafa/Documents/yoga_phong_thai/src/components/landing/sections.tsx` - presentational landing sections.
- `/Users/hafa/Documents/yoga_phong_thai/src/components/landing/faq-list.tsx` - FAQ accordion.
- `/Users/hafa/Documents/yoga_phong_thai/src/components/landing/lead-form.tsx` - lead form validation and Zalo handoff.
- `/Users/hafa/Documents/yoga_phong_thai/tests/landing.spec.ts` - Playwright migration checks.

Copy:
- `/Users/hafa/Documents/yoga_phong_thai/anh-ghep/` to `/Users/hafa/Documents/yoga_phong_thai/public/anh-ghep/`
- `/Users/hafa/Documents/yoga_phong_thai/brand-assets/` to `/Users/hafa/Documents/yoga_phong_thai/public/brand-assets/`
- `/Users/hafa/Documents/yoga_phong_thai/landing-assets/` to `/Users/hafa/Documents/yoga_phong_thai/public/landing-assets/`
- `/Users/hafa/Documents/yoga_phong_thai/docs/*.jpg` to `/Users/hafa/Documents/yoga_phong_thai/public/docs/`

Keep until verification passes:
- `/Users/hafa/Documents/yoga_phong_thai/index.html`
- `/Users/hafa/Documents/yoga_phong_thai/styles.css`
- `/Users/hafa/Documents/yoga_phong_thai/script.js`

Remove only after the user approves the migrated Next.js version:
- The three static runtime files above, if the user wants the repo to contain only Next.js code.

---

### Task 1: Scaffold Next.js, Tailwind, and Verification Tooling

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `tsconfig.json`
- Create: `src/app/globals.css`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "yoga-phong-thai",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "@tailwindcss/postcss": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "latest"
  },
  "devDependencies": {
    "@playwright/test": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "typescript": "latest"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run:

```bash
npm install
npx playwright install chromium
```

Expected:
- `node_modules/` is created.
- `package-lock.json` is created.
- Playwright Chromium installs without errors.

- [ ] **Step 3: Create `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
```

- [ ] **Step 4: Create `postcss.config.mjs`**

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 5: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 6: Create initial `src/app/globals.css`**

```css
@import "tailwindcss";

@theme {
  --font-serif: "Noto Serif", Georgia, "Times New Roman", serif;
  --font-sans: "Manrope", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --color-cream: #f9faf5;
  --color-surface: #edeee9;
  --color-surface-low: #f3f4ef;
  --color-surface-strong: #e2e3de;
  --color-sage: #275334;
  --color-sage-light: #3f6b4a;
  --color-leaf: #456643;
  --color-gold: #e8c266;
  --color-gold-deep: #7a5e06;
  --color-ink: #1a1c19;
  --color-muted: #414941;
  --shadow-soft: 0 18px 48px rgba(32, 52, 35, 0.08);
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  margin: 0;
  overflow-x: hidden;
  background: var(--color-cream);
  color: var(--color-ink);
  font-family: var(--font-sans);
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
select {
  font: inherit;
}
```

- [ ] **Step 7: Run a dependency sanity check**

Run:

```bash
npm run build
```

Expected:
- Fails because `src/app/layout.tsx` and `src/app/page.tsx` do not exist yet.
- This confirms the package scripts are wired and the next task has a clear failing state.

- [ ] **Step 8: Optional commit**

Run only if this folder is inside a git repo:

```bash
git add package.json package-lock.json next.config.ts postcss.config.mjs tsconfig.json src/app/globals.css
git commit -m "chore: scaffold nextjs tailwind app"
```

Expected:
- Commit succeeds if git exists.
- If `git status` reports this is not a git repository, skip this step.

---

### Task 2: Move Assets Into Next Public Directory

**Files:**
- Create: `public/anh-ghep/*`
- Create: `public/brand-assets/*`
- Create: `public/landing-assets/*`
- Create: `public/docs/*.jpg`

- [ ] **Step 1: Copy current runtime assets**

Run:

```bash
mkdir -p public/anh-ghep public/brand-assets public/landing-assets public/docs
cp anh-ghep/yoga-phong-thai-mau1-goc2.png public/anh-ghep/
cp anh-ghep/yoga-phong-thai-goc-moi-context.png public/anh-ghep/
cp anh-ghep/yoga-phong-thai-02.png public/anh-ghep/
cp brand-assets/body-talk-symbol-dark.svg public/brand-assets/
cp brand-assets/body-talk-logo-lockup.svg public/brand-assets/
cp landing-assets/yoga-phong-thai-landing-02-body-talk.webp public/landing-assets/
cp landing-assets/yoga-phong-thai-landing-03-cta.webp public/landing-assets/
cp docs/z7710226061539_d0a5964d9f9d45a445fc3abe02c65b0f.jpg public/docs/
cp docs/z7710226763217_e07956752ad176247bc2f37c4ea2c518.jpg public/docs/
cp docs/z7710226376419_97422f5a7095c35533f071f5eedcd439.jpg public/docs/
```

- [ ] **Step 2: Verify copied asset set**

Run:

```bash
find public -type f | sort
```

Expected output contains exactly these runtime assets:

```text
public/anh-ghep/yoga-phong-thai-02.png
public/anh-ghep/yoga-phong-thai-goc-moi-context.png
public/anh-ghep/yoga-phong-thai-mau1-goc2.png
public/brand-assets/body-talk-logo-lockup.svg
public/brand-assets/body-talk-symbol-dark.svg
public/docs/z7710226061539_d0a5964d9f9d45a445fc3abe02c65b0f.jpg
public/docs/z7710226376419_97422f5a7095c35533f071f5eedcd439.jpg
public/docs/z7710226763217_e07956752ad176247bc2f37c4ea2c518.jpg
public/landing-assets/yoga-phong-thai-landing-02-body-talk.webp
public/landing-assets/yoga-phong-thai-landing-03-cta.webp
```

- [ ] **Step 3: Optional commit**

Run only if this folder is inside a git repo:

```bash
git add public
git commit -m "chore: add public landing assets"
```

Expected:
- Commit succeeds if git exists.
- If this workspace remains non-git, skip.

---

### Task 3: Write Failing Playwright Migration Tests

**Files:**
- Create: `tests/landing.spec.ts`

- [ ] **Step 1: Create `tests/landing.spec.ts`**

```ts
import { expect, test } from "@playwright/test";

test.describe("Yoga Phong Thai landing page", () => {
  test("renders the migrated landing content", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Đẹp từ trục cơ thể. Sang từ phong thái." })).toBeVisible();
    await expect(page.getByRole("link", { name: "Đặt lịch tư vấn" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ba trụ cột cho vẻ đẹp bền vững." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Học theo lộ trình, không xem rời rạc." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Nguyễn Thị Thu Nhanh" })).toBeVisible();
    await expect(page.getByAltText("Master Thu Nhanh trong phong cách Yoga Phong Thái toàn thân")).toBeVisible();
  });

  test("opens and closes mobile navigation", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Mở menu" });
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("navigation", { name: "Điều hướng di động" }).getByRole("link", { name: "Tư vấn" })).toBeVisible();

    await page.getByRole("navigation", { name: "Điều hướng di động" }).getByRole("link", { name: "Tư vấn" }).click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  test("validates lead form and builds the Zalo message", async ({ page, context }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Gửi thông tin tư vấn" }).click();
    await expect(page.getByText("Vui lòng điền đủ thông tin để được tư vấn đúng lộ trình.")).toBeVisible();

    await page.getByLabel("Họ tên").fill("Nguyễn An");
    await page.getByLabel("Số điện thoại").fill("0901234567");
    await page.getByLabel("Lộ trình quan tâm").selectOption("30 Ngày Chỉnh Dáng");

    const popupPromise = context.waitForEvent("page");
    await page.getByRole("button", { name: "Gửi thông tin tư vấn" }).click();
    const popup = await popupPromise;

    await expect(page.getByText("Đã ghi nhận thông tin.")).toBeVisible();
    expect(decodeURIComponent(popup.url())).toContain("Tôi muốn được tư vấn 30 Ngày Chỉnh Dáng");
  });

  test("does not create horizontal overflow on desktop or mobile", async ({ page }) => {
    for (const viewport of [
      { width: 1280, height: 900 },
      { width: 390, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(hasOverflow).toBe(false);
    }
  });
});
```

- [ ] **Step 2: Run tests to verify they fail before the page exists**

Run:

```bash
npm run test:e2e -- --config=playwright.config.ts
```

Expected:
- Fails because `playwright.config.ts` does not exist yet.
- This is acceptable in this task; the next step creates the config and the app.

- [ ] **Step 3: Create `playwright.config.ts`**

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
```

- [ ] **Step 4: Run tests again to verify the intended content failure**

Run:

```bash
npm run test:e2e
```

Expected:
- Fails because `src/app/page.tsx` does not exist or the landing content is not implemented yet.

- [ ] **Step 5: Optional commit**

Run only if this folder is inside a git repo:

```bash
git add playwright.config.ts tests/landing.spec.ts
git commit -m "test: cover landing migration behavior"
```

---

### Task 4: Add App Router Metadata and Landing Data

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/data/landing.ts`

- [ ] **Step 1: Create `src/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoga Phong Thái | BODY TALK by Master Thu Nhanh",
  description:
    "Khóa học Yoga Phong Thái giúp phụ nữ chỉnh dáng, mở hơi thở, định tuyến trục cơ thể và xây dựng phong thái tự tin từ bên trong.",
  openGraph: {
    title: "Yoga Phong Thái | BODY TALK",
    description:
      "Đẹp từ trục cơ thể. Sang từ phong thái. Lộ trình yoga chỉnh dáng, video học tập và tư vấn cá nhân cùng Master Thu Nhanh.",
    images: ["/anh-ghep/yoga-phong-thai-mau1-goc2.png"],
  },
  icons: {
    icon: "/brand-assets/body-talk-symbol-dark.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Create `src/data/landing.ts`**

```ts
export const navItems = [
  { label: "Phương pháp", href: "#method" },
  { label: "Lộ trình", href: "#courses" },
  { label: "Hành trình", href: "#journey" },
  { label: "Master", href: "#master" },
  { label: "Tư vấn", href: "#contact" },
] as const;

export const heroStats = [
  { value: "4 tuần", label: "Nền tảng hơi thở" },
  { value: "30 ngày", label: "Chỉnh dáng chuyên sâu" },
  { value: "90 ngày", label: "Thân - Tâm - Trí" },
] as const;

export const painPoints = [
  { number: "01", title: "Vai gù, cổ rùa", body: "Vùng cổ vai gáy bị kéo căng khiến dáng đứng khép lại và thiếu tự tin khi xuất hiện." },
  { number: "02", title: "Hơi thở nông", body: "Nhịp thở ngắn làm cơ thể nhanh mệt, ngực không mở và năng lượng khó duy trì." },
  { number: "03", title: "Cơ thể cứng", body: "Khớp hông, vai, lưng thiếu linh hoạt làm chuyển động kém mềm mại và nặng nề." },
  { number: "04", title: "Thiếu khí chất", body: "Dáng đi, dáng ngồi và biểu cảm cơ thể chưa tạo được cảm giác thanh lịch tự nhiên." },
] as const;

export const methodPillars = [
  { label: "Hơi thở", title: "Làm chủ nguồn năng lượng", body: "Đưa nhịp thở sâu trở lại để mở ngực, định tâm và giải phóng căng thẳng." },
  { label: "Trục dáng", title: "Cân chỉnh cấu trúc cơ thể", body: "Định tuyến cổ, vai, cột sống, hông để vóc dáng cân đối và chuyển động nhẹ hơn." },
  { label: "Phong thái", title: "Tỏa sáng từ sự tự tin bên trong", body: "Rèn dáng đi, dáng đứng, ánh nhìn và khí chất thanh lịch trong đời sống hằng ngày." },
] as const;

export const courses = [
  {
    meta: "Nền tảng",
    title: "12 Ngày Nền Tảng",
    time: "Cho người mới bắt đầu",
    body: "Học cách thở chuẩn, làm mềm cơ thể và đặt lại nền tảng dáng đứng.",
    items: ["Hơi thở và mở ngực", "Linh hoạt vai, cổ, hông", "Dáng đứng và dáng ngồi"],
    featured: false,
  },
  {
    meta: "Chuyên sâu",
    title: "30 Ngày Chỉnh Dáng",
    time: "Lớp nhỏ hoặc cá nhân",
    body: "Mentor chỉnh từng điểm sai lệch để cải thiện vai, cổ, lưng và trục cơ thể.",
    items: ["Tối đa 5 học viên offline", "20 buổi chỉnh sửa chuyên sâu", "Theo dõi tiến trình từng tuần"],
    featured: true,
  },
  {
    meta: "Chuyển hóa",
    title: "90 Ngày Thân Tâm Trí",
    time: "12 tuần hybrid",
    body: "Kết hợp chỉnh dáng, nội lực, thói quen sống và tư duy chăm sóc cơ thể.",
    items: ["Định tuyến bộ khung", "Nhận thức nội tâm", "Lối sống và dinh dưỡng"],
    featured: false,
  },
] as const;

export const journeySteps = [
  { number: "01", title: "Lắng nghe", body: "Đọc tín hiệu cơ thể, xác định vùng căng và mục tiêu thay đổi của từng học viên." },
  { number: "02", title: "Nền tảng", body: "Xây lại hơi thở, sự linh hoạt và ý thức trục cơ thể trong từng chuyển động." },
  { number: "03", title: "Chỉnh sửa", body: "Căn chỉnh vai, cổ, cột sống, hông và các thói quen làm sai lệch vóc dáng." },
  { number: "04", title: "Chuyển hóa", body: "Biến kỹ thuật thành phong thái: đi, đứng, ngồi, thở và hiện diện tự tin hơn." },
] as const;

export const learningTracks = [
  { count: "12 bài", title: "Nền tảng hơi thở", body: "Làm chủ nhịp thở, mở ngực và xây lại nhận thức cơ thể cho người mới.", status: "Thư viện học", muted: false },
  { count: "20 buổi", title: "Chỉnh dáng 30 ngày", body: "Điều chỉnh vai, cổ, cột sống và các thói quen làm sai lệch vóc dáng.", status: "Thư viện học", muted: false },
  { count: "12 tuần", title: "Thân - Tâm - Trí 90 ngày", body: "Hành trình chuyên sâu kết nối luyện tập, thói quen sống và nội lực.", status: "Sắp mở", muted: true },
] as const;

export const proofItems = [
  {
    src: "/docs/z7710226061539_d0a5964d9f9d45a445fc3abe02c65b0f.jpg",
    alt: "Tài liệu khóa Yoga Phong Thái cơ bản",
    caption: "Tài liệu khóa cơ bản",
  },
  {
    src: "/docs/z7710226763217_e07956752ad176247bc2f37c4ea2c518.jpg",
    alt: "Tài liệu lộ trình 30 ngày chỉnh dáng",
    caption: "Lộ trình 30 ngày",
  },
  {
    src: "/docs/z7710226376419_97422f5a7095c35533f071f5eedcd439.jpg",
    alt: "Tài liệu chương trình 90 ngày Thân Tâm Trí",
    caption: "Chương trình 90 ngày",
  },
] as const;

export const faqs = [
  { question: "Ai phù hợp với Yoga Phong Thái?", answer: "Phù hợp với phụ nữ muốn cải thiện dáng, vai cổ gáy, hơi thở, sự linh hoạt và phong thái khi xuất hiện." },
  { question: "30 ngày khác gì 90 ngày?", answer: "30 ngày tập trung chỉnh dáng chuyên sâu. 90 ngày mở rộng sang thân - tâm - trí, thói quen sống và duy trì kết quả." },
  { question: "Có cần nền tảng yoga trước không?", answer: "Không bắt buộc. Lớp cơ bản được thiết kế để học viên bắt đầu từ hơi thở, trục dáng và chuyển động an toàn." },
  { question: "Học online hay offline?", answer: "Có thể tư vấn theo nhu cầu. Lớp offline phù hợp người cần chỉnh lỗi trực tiếp, còn online phù hợp duy trì luyện tập linh hoạt." },
] as const;

export const programs = ["Yoga Phong Thái Cơ Bản", "30 Ngày Chỉnh Dáng", "90 Ngày Thân Tâm Trí"] as const;
```

- [ ] **Step 3: Run type check through build**

Run:

```bash
npm run build
```

Expected:
- Still fails because `src/app/page.tsx` is missing.
- No TypeScript errors should point to `src/data/landing.ts` or `src/app/layout.tsx`.

- [ ] **Step 4: Optional commit**

Run only if this folder is inside a git repo:

```bash
git add src/app/layout.tsx src/data/landing.ts
git commit -m "feat: add app metadata and landing data"
```

---

### Task 5: Implement Header, Static Sections, FAQ, and Lead Form

**Files:**
- Create: `src/components/landing/header.tsx`
- Create: `src/components/landing/sections.tsx`
- Create: `src/components/landing/faq-list.tsx`
- Create: `src/components/landing/lead-form.tsx`
- Create: `src/app/page.tsx`

- [ ] **Step 1: Create `src/components/landing/header.tsx`**

```tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/data/landing";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-4 z-50 mx-auto grid w-[min(1200px,calc(100%_-_40px))] grid-cols-[auto_1fr_auto_auto] items-center gap-6 rounded-xl border border-[rgba(114,121,113,0.22)] bg-cream/90 px-4 py-3 shadow-[0_10px_28px_rgba(32,52,35,0.07)] backdrop-blur-md max-[860px]:grid-cols-[auto_auto] max-[860px]:justify-between ${scrolled ? "shadow-[0_14px_34px_rgba(32,52,35,0.11)]" : ""}`}>
        <a className="flex min-w-0 items-center gap-2.5" href="#top" aria-label="Yoga Phong Thái">
          <Image src="/brand-assets/body-talk-symbol-dark.svg" alt="" width={34} height={34} priority />
          <span>
            <strong className="block font-serif text-lg leading-none">Yoga Phong Thái</strong>
            <small className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.14em] text-muted">BODY TALK</small>
          </span>
        </a>
        <nav className="flex justify-center gap-6 text-sm font-bold text-muted max-[860px]:hidden" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a className="hover:text-sage" href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sage px-5 font-extrabold leading-none text-white transition hover:-translate-y-px max-[860px]:hidden" href="#contact">Đặt lịch</a>
        <button className="hidden h-11 w-11 rounded-lg bg-surface text-sage max-[860px]:block" type="button" aria-label="Mở menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          <span className="mx-auto my-[5px] block h-0.5 w-[18px] bg-current" />
          <span className="mx-auto my-[5px] block h-0.5 w-[18px] bg-current" />
        </button>
      </header>
      <nav className={`${menuOpen ? "grid" : "hidden"} fixed left-4 right-4 top-[78px] z-40 gap-2 rounded-xl border border-[rgba(114,121,113,0.32)] bg-cream/95 p-3.5 shadow-soft`} aria-label="Điều hướng di động">
        {navItems.map((item) => (
          <a className="rounded-lg bg-surface px-3.5 py-3 font-extrabold text-sage" href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
      </nav>
    </>
  );
}
```

- [ ] **Step 2: Create `src/components/landing/faq-list.tsx`**

```tsx
"use client";

import { useState } from "react";
import { faqs } from "@/data/landing";

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <article className="rounded-xl border border-[rgba(114,121,113,0.32)] bg-white/60" key={faq.question}>
            <button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-extrabold text-sage" type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}>
              {faq.question}
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <div className="px-5 pb-5 text-muted">{faq.answer}</div> : null}
          </article>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 3: Create `src/components/landing/lead-form.tsx`**

```tsx
"use client";

import { FormEvent, useState } from "react";
import { programs } from "@/data/landing";

export function LeadForm() {
  const [note, setNote] = useState("Hoặc liên hệ trực tiếp qua Zalo: 0962 895 314");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const program = String(data.get("program") || "").trim();

    if (!name || !phone || !program) {
      setSuccess(false);
      setNote("Vui lòng điền đủ thông tin để được tư vấn đúng lộ trình.");
      return;
    }

    const message = `Chào Master Thu Nhanh, tôi là ${name}. Tôi muốn được tư vấn ${program}. SĐT của tôi: ${phone}.`;
    setSuccess(true);
    setNote("Đã ghi nhận thông tin. Mở Zalo để gửi nhanh.");
    window.open(`https://zalo.me/0962895314?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-bold text-sage">
        Họ tên
        <input className="min-h-12 rounded-lg border border-[rgba(114,121,113,0.32)] bg-white px-4 text-base font-medium text-ink" name="name" type="text" autoComplete="name" required placeholder="Tên của bạn" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-sage">
        Số điện thoại
        <input className="min-h-12 rounded-lg border border-[rgba(114,121,113,0.32)] bg-white px-4 text-base font-medium text-ink" name="phone" type="tel" autoComplete="tel" required placeholder="09xx xxx xxx" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-sage">
        Lộ trình quan tâm
        <select className="min-h-12 rounded-lg border border-[rgba(114,121,113,0.32)] bg-white px-4 text-base font-medium text-ink" name="program" required defaultValue="">
          <option value="">Chọn một lộ trình</option>
          {programs.map((program) => (
            <option key={program}>{program}</option>
          ))}
        </select>
      </label>
      <button className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sage px-6 font-extrabold leading-none text-white shadow-[0_14px_28px_rgba(63,107,74,0.18)] transition hover:-translate-y-px" type="submit">Gửi thông tin tư vấn</button>
      <p className={success ? "text-sm font-bold text-sage" : "text-sm text-muted"}>{note}</p>
    </form>
  );
}
```

- [ ] **Step 4: Create `src/components/landing/sections.tsx`**

Implement all non-header sections from the current static source using the arrays in `src/data/landing.ts`. Keep these exact component names and exported functions:

```tsx
import Image from "next/image";
import { courses, heroStats, journeySteps, learningTracks, methodPillars, painPoints, proofItems } from "@/data/landing";
import { FaqList } from "./faq-list";
import { LeadForm } from "./lead-form";

const shell = "mx-auto w-[min(1200px,calc(100%_-_40px))]";
const section = "py-16 max-sm:py-11";
const eyebrow = "mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-gold-deep";
const heading = "font-serif text-[clamp(2rem,4vw,4rem)] font-semibold leading-tight text-ink";
const primaryButton = "inline-flex min-h-11 items-center justify-center rounded-lg bg-sage px-6 font-extrabold leading-none text-white shadow-[0_14px_28px_rgba(63,107,74,0.18)] transition hover:-translate-y-px";
const secondaryButton = "inline-flex min-h-11 items-center justify-center rounded-lg border border-[rgba(63,107,74,0.28)] bg-white/70 px-6 font-extrabold leading-none text-sage transition hover:-translate-y-px";

export function HeroSection() {
  return (
    <section className={`${shell} grid items-start gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]`} aria-labelledby="hero-title">
      <div>
        <p className={eyebrow}>Personal transformation</p>
        <h1 id="hero-title" className="font-serif text-[clamp(3rem,8vw,6.7rem)] font-semibold leading-[0.98] text-ink">Đẹp từ trục cơ thể. Sang từ phong thái.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">Lộ trình Yoga Phong Thái cùng Master Thu Nhanh giúp phụ nữ mở hơi thở, chỉnh dáng và xây dựng khí chất thanh lịch từ bên trong.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className={primaryButton} href="#contact">Đặt lịch tư vấn</a>
          <a className={secondaryButton} href="#courses">Xem lộ trình</a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Thông tin chương trình">
          {heroStats.map((item) => (
            <div className="rounded-xl border border-[rgba(114,121,113,0.32)] bg-white/55 p-4" key={item.value}>
              <strong className="block font-serif text-2xl text-sage">{item.value}</strong>
              <span className="text-sm font-semibold text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div aria-label="Ảnh Master Thu Nhanh">
        <div className="relative overflow-hidden rounded-t-[999px] rounded-b-xl bg-surface p-3 shadow-soft">
          <Image className="relative z-10 mx-auto h-[420px] w-full object-contain max-sm:h-[390px]" src="/anh-ghep/yoga-phong-thai-mau1-goc2.png" alt="Master Thu Nhanh trong phong cách Yoga Phong Thái toàn thân" width={840} height={1200} priority />
          <blockquote className="relative z-10 mt-3 rounded-lg bg-cream px-4 py-3 text-sm font-semibold text-sage">“Hơi thở là cây cầu đưa phụ nữ trở về với sự bình an và khí chất của chính mình.”<cite className="mt-1 block font-extrabold not-italic">Master Thu Nhanh</cite></blockquote>
        </div>
      </div>
    </section>
  );
}

export function CourseIntroSection() {
  return (
    <section className="bg-surface py-12" aria-labelledby="course-hero-title">
      <div className={`${shell} grid items-center gap-10 lg:grid-cols-[minmax(280px,440px)_1fr]`}>
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[440px] overflow-hidden rounded-xl border border-[rgba(114,121,113,0.32)] bg-white shadow-soft max-lg:max-w-none">
          <Image className="h-full w-full object-cover" src="/landing-assets/yoga-phong-thai-landing-02-body-talk.webp" alt="Không gian học Yoga Phong Thái BODY TALK" width={1080} height={1920} />
          <button className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/90" type="button" aria-label="Video giới thiệu sẽ cập nhật"><span className="ml-1 block h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-sage" /></button>
        </div>
        <div>
          <p className={eyebrow}>Học cùng BODY TALK</p>
          <h2 id="course-hero-title" className={heading}>Một hệ sinh thái học dáng, hơi thở và phong thái.</h2>
          <p className="mt-5 text-lg text-muted">Trang học được xây dựng theo hướng bán khóa học, video luyện tập và tư vấn cá nhân: học viên có thể bắt đầu từ lớp cơ bản, đi sâu vào chỉnh dáng 30 ngày hoặc theo đuổi lộ trình 90 ngày để tái thiết thân - tâm - trí.</p>
          <ul className="mt-5 grid gap-2 text-muted">
            <li>Video luyện tập theo từng nhóm vấn đề cơ thể.</li>
            <li>Mentor chỉnh lỗi tư thế trong lớp nhỏ hoặc cá nhân.</li>
            <li>Tài liệu học tập được hệ thống từ BODY TALK Ecosystem.</li>
          </ul>
          <a className={`${primaryButton} mt-7`} href="#videos">Xem thư viện học</a>
        </div>
      </div>
    </section>
  );
}

export function RemainingSections() {
  return (
    <>
      <section className={`${section} ${shell}`} aria-labelledby="pain-title">
        <div className="mx-auto max-w-3xl text-center">
          <p className={eyebrow}>Nhận diện vấn đề</p>
          <h2 id="pain-title" className={heading}>Dấu hiệu cơ thể đang lên tiếng.</h2>
          <p className="mt-4 text-muted">Khi trục dáng lệch, hơi thở nông và cơ thể thiếu linh hoạt, phong thái bên ngoài cũng mất đi sự nhẹ nhàng. Yoga Phong Thái bắt đầu bằng việc đọc lại những tín hiệu đó.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item) => (
            <article className="rounded-xl border border-[rgba(114,121,113,0.32)] bg-white/60 p-5" key={item.number}>
              <span className="text-sm font-extrabold text-gold-deep">{item.number}</span>
              <h3 className="mt-4 font-serif text-2xl text-sage">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${section} ${shell} grid gap-10 lg:grid-cols-[0.85fr_1.15fr]`} id="method" aria-labelledby="method-title">
        <div>
          <p className={eyebrow}>Phương pháp BODY TALK</p>
          <h2 id="method-title" className={heading}>Ba trụ cột cho vẻ đẹp bền vững.</h2>
          <p className="mt-4 text-muted">BODY TALK không chỉ dạy động tác. Phương pháp này giúp học viên hiểu cách cơ thể vận hành, đưa cột sống về trục thẳng và biến sự kỷ luật thành phong thái sống.</p>
        </div>
        <div className="grid gap-4">
          {methodPillars.map((item) => (
            <article className="rounded-xl bg-surface p-5" key={item.label}>
              <strong className="text-gold-deep">{item.label}</strong>
              <h3 className="mt-2 font-serif text-2xl text-sage">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${section} bg-surface`} id="courses" aria-labelledby="courses-title">
        <div className={shell}>
          <div className="max-w-4xl">
            <p className={eyebrow}>Các khóa học nổi bật</p>
            <h2 id="courses-title" className={heading}>Chọn lộ trình phù hợp với mục tiêu hiện tại.</h2>
            <p className="mt-4 text-muted">Thiết kế khóa học theo tầng: nền tảng cho người mới, chỉnh dáng cho người cần cải thiện rõ rệt, và chương trình 90 ngày cho học viên muốn chuyển hóa sâu hơn.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {courses.map((course) => (
              <article className={`rounded-xl border p-6 ${course.featured ? "border-sage bg-sage text-white" : "border-[rgba(114,121,113,0.32)] bg-white/70 text-ink"}`} key={course.title}>
                <p className="text-sm font-extrabold uppercase tracking-[0.12em]">{course.meta}</p>
                <h3 className="mt-3 font-serif text-3xl">{course.title}</h3>
                <p className="mt-2 font-bold">{course.time}</p>
                <p className="mt-4">{course.body}</p>
                <ul className="mt-5 grid gap-2 text-sm">{course.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className="mt-6 inline-flex font-extrabold" href="#contact">Tư vấn khóa này</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={`${section} ${shell}`} id="journey" aria-labelledby="journey-title">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className={eyebrow}>Quy trình</p>
            <h2 id="journey-title" className={heading}>Hành trình chuyển hóa 4 bước.</h2>
          </div>
          <p className="text-muted">Mỗi giai đoạn được thiết kế để thay đổi diễn ra tự nhiên: nhận diện vấn đề, xây nền tảng, chỉnh sửa chuyên sâu và duy trì phong thái mới.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" aria-label="Hành trình học Yoga Phong Thái">
          {journeySteps.map((item) => (
            <article className="rounded-xl border border-[rgba(114,121,113,0.32)] bg-white/60 p-5" key={item.number}>
              <span className="font-extrabold text-gold-deep">{item.number}</span>
              <h3 className="mt-3 font-serif text-2xl text-sage">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`${section} ${shell}`} id="videos" aria-labelledby="videos-title">
        <div className="max-w-4xl">
          <p className={eyebrow}>Thư viện BODY TALK</p>
          <h2 id="videos-title" className={heading}>Học theo lộ trình, không xem rời rạc.</h2>
          <p className="mt-4 text-muted">Các bài học được nhóm theo từng vấn đề cơ thể và từng giai đoạn luyện tập để học viên đi qua một hành trình rõ ràng: thở đúng, chỉnh đúng, rồi đưa phong thái mới vào đời sống.</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-xl bg-surface">
            <div className="relative bg-surface-low">
              <Image className="h-[420px] w-full object-contain" src="/anh-ghep/yoga-phong-thai-goc-moi-context.png" alt="Bài học mẫu Hơi thở mở ngực trong thư viện BODY TALK" width={1200} height={900} />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-extrabold text-sage">Bài học mẫu</span>
            </div>
            <div className="p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-deep">Module mở đầu</p>
              <h3 className="mt-2 font-serif text-3xl text-sage">Bài học mẫu: Hơi thở mở ngực</h3>
              <ul className="mt-4 grid gap-2 text-muted">
                <li>Giải phóng căng thẳng vùng vai gáy và ngực trên.</li>
                <li>Đưa hơi thở sâu xuống khoang bụng để cơ thể dịu lại.</li>
                <li>Thiết lập cảm nhận đầu tiên giữa hơi thở, trục dáng và cảm xúc.</li>
              </ul>
            </div>
          </article>
          <div className="grid gap-4" aria-label="Các lộ trình học BODY TALK">
            {learningTracks.map((track) => (
              <article className={`rounded-xl border p-5 ${track.muted ? "border-dashed border-[rgba(114,121,113,0.32)] bg-white/50" : "border-[rgba(114,121,113,0.32)] bg-white/70"}`} key={track.title}>
                <span className="font-extrabold text-gold-deep">{track.count}</span>
                <h3 className="mt-2 font-serif text-2xl text-sage">{track.title}</h3>
                <p className="mt-2 text-muted">{track.body}</p>
                <small className="mt-4 block font-extrabold text-sage">{track.status}</small>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-sage p-6 text-white">
          <div>
            <h3 className="font-serif text-3xl">Muốn học đúng lộ trình?</h3>
            <p className="mt-2 text-white/85">Gửi tình trạng cơ thể hiện tại để được gợi ý khóa học phù hợp trước khi bắt đầu.</p>
          </div>
          <a className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-6 font-extrabold text-sage" href="#contact">Nhận tư vấn cá nhân</a>
        </div>
      </section>
      <section className={`${section} bg-surface`} id="students" aria-labelledby="students-title">
        <div className={shell}>
          <div className="max-w-4xl">
            <p className={eyebrow}>Bằng chứng học tập</p>
            <h2 id="students-title" className={heading}>Tài liệu, lớp học và tiến trình được hệ thống rõ ràng.</h2>
            <p className="mt-4 text-muted">Thay vì chỉ dùng hình ảnh đẹp, landing page cần cho khách thấy chương trình có cấu trúc học tập: khóa cơ bản, 30 ngày chỉnh dáng, 90 ngày chuyển hóa.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {proofItems.map((item) => (
              <figure className="rounded-xl bg-white p-4 shadow-soft" key={item.src}>
                <Image className="h-[360px] w-full object-contain" src={item.src} alt={item.alt} width={900} height={1200} />
                <figcaption className="mt-3 text-center font-extrabold text-sage">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className={`${section} ${shell} grid items-center gap-10 lg:grid-cols-[0.8fr_1fr]`} id="master" aria-labelledby="master-title">
        <div className="overflow-hidden rounded-xl bg-surface">
          <Image className="h-full w-full object-cover" src="/anh-ghep/yoga-phong-thai-02.png" alt="Master Thu Nhanh BODY TALK" width={900} height={1100} />
        </div>
        <div>
          <p className={eyebrow}>Người đồng hành</p>
          <h2 id="master-title" className="font-serif leading-none text-sage"><span className="block text-2xl uppercase tracking-[0.12em]">Master Yoga</span><span className="mt-3 block text-[clamp(3rem,7vw,5.125rem)]">Nguyễn Thị Thu Nhanh</span></h2>
          <p className="mt-6 text-lg text-muted">Đồng hành cùng học viên bằng tinh thần kỷ luật để tái sinh: chỉnh sửa cơ thể bằng sự hiểu biết, hơi thở và thói quen sống mới thay vì ép dáng trong thời gian ngắn.</p>
        </div>
      </section>
      <section className={`${section} ${shell}`} aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl text-center">
          <p className={eyebrow}>Câu hỏi thường gặp</p>
          <h2 id="faq-title" className={heading}>Trước khi bắt đầu.</h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl"><FaqList /></div>
      </section>
      <section className={`${section} ${shell} grid items-center gap-10 rounded-xl bg-sage p-8 text-white lg:grid-cols-[1fr_0.8fr]`} id="contact" aria-labelledby="contact-title">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Tư vấn lộ trình</p>
          <h2 id="contact-title" className="font-serif text-[clamp(2rem,4vw,4rem)] leading-tight">Bắt đầu bằng việc hiểu đúng cơ thể của bạn.</h2>
          <p className="mt-4 text-white/85">Gửi thông tin để được tư vấn lộ trình phù hợp: 4 tuần nền tảng, 30 ngày chỉnh dáng hoặc 90 ngày chuyển hóa toàn diện.</p>
          <div className="mt-7 rounded-xl bg-cream p-5 text-ink"><LeadForm /></div>
        </div>
        <Image className="rounded-xl object-cover" src="/landing-assets/yoga-phong-thai-landing-03-cta.webp" alt="Tư vấn Yoga Phong Thái cùng Master Thu Nhanh" width={1080} height={1920} />
      </section>
    </>
  );
}
```

- [ ] **Step 5: Create `src/app/page.tsx`**

```tsx
import Image from "next/image";
import { Header } from "@/components/landing/header";
import { CourseIntroSection, HeroSection, RemainingSections } from "@/components/landing/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <CourseIntroSection />
        <RemainingSections />
      </main>
      <footer className="mx-auto flex w-[min(1200px,calc(100%_-_40px))] flex-wrap items-center justify-between gap-5 border-t border-[rgba(114,121,113,0.32)] py-8 text-muted">
        <div>
          <Image src="/brand-assets/body-talk-logo-lockup.svg" alt="BODY TALK" width={160} height={48} />
          <p>Yoga Phong Thái by Master Thu Nhanh</p>
        </div>
        <address className="not-italic">
          <a className="font-extrabold text-sage" href="tel:0962895314">0962 895 314</a>
          <span className="ml-4">Hùng Vương Plaza, Quận 5, TP.HCM</span>
        </address>
      </footer>
      <a className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage font-extrabold text-white shadow-soft" href="https://zalo.me/0962895314" target="_blank" rel="noreferrer" aria-label="Liên hệ Zalo">Zalo</a>
    </>
  );
}
```

- [ ] **Step 6: Run build**

Run:

```bash
npm run build
```

Expected:
- Build passes, or fails only on concrete Tailwind class syntax issues that can be fixed in this task.
- If Tailwind rejects arbitrary classes containing commas or `%`, move those specific values into a small semantic class in `src/app/globals.css`.

- [ ] **Step 7: Run Playwright tests**

Run:

```bash
npm run test:e2e
```

Expected:
- Tests pass for content, mobile menu, form validation, Zalo URL message, and overflow.

- [ ] **Step 8: Optional commit**

Run only if this folder is inside a git repo:

```bash
git add src/app/page.tsx src/components/landing src/data/landing.ts
git commit -m "feat: migrate landing page to nextjs components"
```

---

### Task 6: Visual Tailwind Parity Pass

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/landing/*.tsx`
- Test: `tests/landing.spec.ts`

- [ ] **Step 1: Run local dev server**

Run:

```bash
npm run dev
```

Expected:
- Local app opens at `http://127.0.0.1:3000`.

- [ ] **Step 2: Capture desktop and mobile screenshots**

Run in another terminal:

```bash
npx playwright screenshot --viewport-size=1280,900 http://127.0.0.1:3000 /tmp/yoga-next-desktop.png
npx playwright screenshot --viewport-size=390,900 http://127.0.0.1:3000 /tmp/yoga-next-mobile.png
```

Expected:
- Both screenshots render the full migrated page.
- No horizontal overflow appears.
- Hero image, course intro image, proof document images, and CTA image are visible.

- [ ] **Step 3: Compare against current static page**

Serve current static page on a separate port:

```bash
python3 -m http.server 4173
```

Then capture:

```bash
npx playwright screenshot --viewport-size=1280,900 http://127.0.0.1:4173 /tmp/yoga-static-desktop.png
npx playwright screenshot --viewport-size=390,900 http://127.0.0.1:4173 /tmp/yoga-static-mobile.png
```

Expected:
- Next screenshots keep the same section order, copy, core imagery, mobile menu placement, proof image containment, and Zalo CTA.
- Minor spacing differences are acceptable only if they improve Tailwind implementation without changing the approved design direction.

- [ ] **Step 4: Fix visible drift**

Use these exact acceptance checks:
- Header remains sticky, menu icon is on the right on mobile/tablet.
- Hero uses the full-body `yoga-phong-thai-mau1-goc2.png` image and keeps the quote inside the frame area.
- Course intro image uses the 9:16 BODY TALK WebP and fills the stacked mobile width.
- `Nội dung học & video` remains a learning-library section, not a fake playable video gallery.
- Proof images use `object-contain` behavior so document borders are visible.
- Master title visually emphasizes `Nguyễn Thị Thu Nhanh`.
- Lead form still opens Zalo with a prefilled text message.

- [ ] **Step 5: Re-run checks**

Run:

```bash
npm run build
npm run test:e2e
```

Expected:
- Both commands pass.

- [ ] **Step 6: Optional commit**

Run only if this folder is inside a git repo:

```bash
git add src/app/globals.css src/components/landing tests/landing.spec.ts
git commit -m "style: match migrated landing visuals"
```

---

### Task 7: Cleanup Static Runtime After Approval

**Files:**
- Delete after user approval only: `index.html`
- Delete after user approval only: `styles.css`
- Delete after user approval only: `script.js`
- Keep: `http:/CONTINUITY.md`

- [ ] **Step 1: Ask for approval**

Ask:

```text
Next.js version is verified. Do you want me to remove the old static files now: index.html, styles.css, script.js?
```

Expected:
- Continue only if the user explicitly approves removal.

- [ ] **Step 2: Remove old static files**

Run after approval:

```bash
rm index.html styles.css script.js
```

- [ ] **Step 3: Verify runtime references**

Run:

```bash
npm run build
npm run test:e2e
find public -type f | sort
```

Expected:
- Build passes.
- E2E tests pass.
- `public/` still contains all referenced images and SVG files.

- [ ] **Step 4: Optional commit**

Run only if this folder is inside a git repo:

```bash
git add -A
git commit -m "chore: remove legacy static runtime"
```

---

## Self-Review

Spec coverage:
- Next.js migration: covered by Tasks 1, 4, and 5.
- Tailwind CSS migration: covered by Tasks 1, 5, and 6 using Tailwind v4 `@import "tailwindcss"` plus `@theme`.
- Existing assets and copy preservation: covered by Tasks 2, 4, 5, and 6.
- Current interactions from `script.js`: covered by Header, FAQ, LeadForm, and Playwright tests.
- Static cleanup: covered only after explicit user approval in Task 7.

Placeholder scan:
- No open-ended implementation steps remain.
- Real video URLs and client-approved logo are not assumed; current non-playable status and current BODY TALK assets are preserved.

Type consistency:
- `src/data/landing.ts` exports are consumed by the component names in Task 5.
- Playwright selectors match the visible Vietnamese copy used in the data and components.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-12-nextjs-tailwind-migration.md`. Two execution options:

**1. Subagent-Driven (recommended)** - Dispatch a fresh subagent per task, review between tasks, fast iteration.

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints.

Which approach?

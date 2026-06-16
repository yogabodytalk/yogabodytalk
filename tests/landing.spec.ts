import { expect, test } from "@playwright/test";

test.describe("BODY TALK approved landing page", () => {
  test("renders the approved ecosystem flow", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: /Thân khỏe\.\s*Tâm an\.\s*Trí sáng\./ })).toBeVisible();
    await expect(page.getByRole("link", { name: "Khám phá hệ sinh thái" })).toHaveAttribute("href", "#ecosystem");
    await expect(page.locator("header img[alt='BODY TALK - Understand Your Body']")).toHaveAttribute("src", /body-talk-logo-lockup\.svg/);
    await expect(page.locator("footer img[alt='BODY TALK - Understand Your Body']")).toHaveAttribute("src", /body-talk-logo-lockup\.svg/);
    await expect(page.getByRole("heading", { name: "Một hệ sinh thái, không phải một khóa học đơn lẻ." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Chọn nhánh chăm sóc" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Học theo lộ trình, không xem rời rạc." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Minh bạch. Đàng hoàng. Có chứng nhận." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Tư vấn 1:1 cùng BODY TALK" })).toBeVisible();

    await expect(page.locator("#branches").getByText("Khóa học BODY TALK")).toBeVisible();
    await expect(page.locator("#branches").getByText("Chuyến bếp chữa lành: Hạnh phúc tới từ nhà bếp")).toBeVisible();
    await expect(page.locator("#courses").getByText("150.000.000 VNĐ")).toBeVisible();
    await expect(page.locator("#proof").getByText("Video khóa học")).toBeVisible();
    await expect(page.locator("video, iframe, embed")).toHaveCount(0);
  });

  test("renders branch icons and unique thumbnail assets", async ({ page }) => {
    await page.goto("/#branches");

    await expect(page.locator("#branches [id^='branch-panel-'] button svg")).toHaveCount(20);
    await expect(page.locator("#branches [id^='branch-panel-'] img")).toHaveCount(10);

    const thumbnailSources = await page.locator("#branches [id^='branch-panel-'] img").evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement).currentSrc || (image as HTMLImageElement).src),
    );

    expect(thumbnailSources.every((src) => src.includes("bodytalk-match-assets"))).toBe(true);
    expect(new Set(thumbnailSources).size).toBe(thumbnailSources.length);
  });

  test("expands branch rows into detail panels", async ({ page }) => {
    await page.goto("/#branches");

    const courseRow = page.locator("#branch-panel-than").getByRole("button", { name: /Khóa học BODY TALK/ });
    await expect(courseRow).toHaveAttribute("aria-expanded", "false");

    await courseRow.click();
    await expect(courseRow).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#branch-panel-than").getByText("Nội dung kèm theo")).toBeVisible();
    await expect(page.locator("#branch-panel-than").getByRole("link", { name: "Trao đổi lộ trình" })).toHaveAttribute("href", "#contact");

    await courseRow.click();
    await expect(courseRow).toHaveAttribute("aria-expanded", "false");
  });

  test("toggles care branch accordion without losing content", async ({ page }) => {
    await page.goto("/#branches");

    const thanButton = page.getByRole("button", { name: /Thân/ });
    const triButton = page.getByRole("button", { name: /Trí sáng/ });

    await expect(thanButton).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByText("Rã cơ / thả lỏng cơ thể")).toBeVisible();

    await triButton.click();
    await expect(triButton).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#branches").getByRole("button", { name: /Mục tiêu/ })).toBeVisible();
    await expect(page.locator("#branches").getByRole("button", { name: /Duy trì/ })).toBeVisible();

    await thanButton.click();
    await expect(thanButton).toHaveAttribute("aria-expanded", "false");
    await expect(page.getByText("Rã cơ / thả lỏng cơ thể")).toHaveCount(0);
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

  test("keeps contact actions and real image assets available", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Đặt lịch tư vấn" })).toHaveAttribute("href", /zalo\.me\/0962895314/);
    await expect(page.locator("#contact").getByRole("link", { name: "0962 895 314" })).toHaveAttribute("href", "tel:0962895314");

    await expect.poll(async () =>
      page.locator("main img").evaluateAll((images) =>
        images.every((image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0),
      ),
    ).toBe(true);
  });

  test("does not create horizontal overflow on desktop, tablet, or mobile", async ({ page }) => {
    for (const viewport of [
      { width: 1440, height: 900 },
      { width: 820, height: 1180 },
      { width: 390, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(hasOverflow).toBe(false);
    }
  });
});

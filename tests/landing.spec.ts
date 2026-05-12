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
    const decodedPopupUrl = decodeURIComponent(decodeURIComponent(popup.url()));
    expect(decodedPopupUrl).toContain("Tôi muốn được tư vấn 30 Ngày Chỉnh Dáng");
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

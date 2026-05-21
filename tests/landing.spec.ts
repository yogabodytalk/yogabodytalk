import { expect, test } from "@playwright/test";

test.describe("Yoga Phong Thai landing page", () => {
  test("renders the migrated landing content", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Đẹp từ trục cơ thể. Sang từ phong thái." })).toBeVisible();
    await expect(page.getByRole("link", { name: "Soi dáng miễn phí ngay" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ba trụ cột cho vẻ đẹp bền vững." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Cơ thể bạn đang ở đâu, hãy bắt đầu từ đó." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Chọn khóa và bắt đầu đúng điểm cơ thể đang cần." })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Cơ thể là cỗ máy sống, phong thái là cách bạn cầm lái." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Nguyễn Thị Thu Nhanh" })).toBeVisible();
    await expect(page.getByAltText("Master Thu Nhanh trong phong cách Yoga Phong Thái toàn thân")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Người học nói gì sau BODY TALK?" })).toBeVisible();
    await expect(page.getByText("Doanh nhân Mai Son")).toBeVisible();
    await expect(page.getByText("Katherine Trinh")).toBeVisible();
    await expect(page.locator("#feedback img")).toHaveCount(2);
    await expect.poll(async () =>
      page.locator("#feedback img").evaluateAll((images) =>
        images.every((image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0),
      ),
    ).toBe(true);
    await expect(page.getByText("Ảnh minh họa")).toHaveCount(0);
    await expect(page.getByText("Từ file feedback")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Bạn đang phân vân điều gì?" })).toBeVisible();
    await expect(page.locator("#faq summary").filter({ hasText: "Tôi nên bắt đầu từ lộ trình nào?" })).toBeVisible();
    await expect(page.getByText("Nhận tư vấn cá nhân")).toHaveCount(0);

    const footer = page.getByRole("contentinfo");
    await expect(footer.getByText("Sẵn sàng soi dáng và chọn lộ trình phù hợp?")).toBeVisible();
    await expect(footer.getByRole("link", { name: "Nhắn Zalo ngay" })).toHaveAttribute("href", /zalo\.me\/0962895314/);
    await expect(footer.getByText("Hùng Vương Plaza, Quận 5, TP.HCM")).toBeVisible();
  });

  test("toggles FAQ answers with native controls", async ({ browser, page }) => {
    await page.goto("/#faq");

    const secondFaq = page.locator("#faq details").nth(1);
    await expect(secondFaq).not.toHaveAttribute("open", "");

    await secondFaq.locator("summary").click();
    await expect(secondFaq).toHaveAttribute("open", "");
    await expect(page.getByText("BODY TALK bắt đầu từ lắng nghe cơ thể")).toBeVisible();

    const noJsContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 900 } });
    const noJsPage = await noJsContext.newPage();
    await noJsPage.goto("http://127.0.0.1:3000/#faq", { waitUntil: "domcontentloaded" });
    const noJsSecondFaq = noJsPage.locator("#faq details").nth(1);

    await expect(noJsSecondFaq).not.toHaveAttribute("open", "");
    await noJsSecondFaq.locator("summary").click({ force: true });
    await expect(noJsSecondFaq).toHaveAttribute("open", "");
    await noJsContext.close();
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

    await page.getByRole("button", { name: "Gửi thông tin & mở Zalo" }).click();
    await expect(page.getByText("Vui lòng điền đủ thông tin để nhận lộ trình phù hợp.")).toBeVisible();

    await page.getByLabel("Họ tên").fill("Nguyễn An");
    await page.getByLabel("Số điện thoại").fill("0901234567");
    await page.getByLabel("Lộ trình quan tâm").selectOption("30 Ngày Chỉnh Dáng");

    const popupPromise = context.waitForEvent("page");
    await page.getByRole("button", { name: "Gửi thông tin & mở Zalo" }).click();
    const popup = await popupPromise;

    await expect(page.getByText("Đã ghi nhận. Đang mở Zalo để gửi nhanh.")).toBeVisible();
    const decodedPopupUrl = decodeURIComponent(decodeURIComponent(popup.url()));
    expect(decodedPopupUrl).toContain("Tôi muốn nhận gợi ý lộ trình 30 Ngày Chỉnh Dáng");
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

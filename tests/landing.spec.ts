import { expect, test } from "@playwright/test";

test.describe("Yoga Phong Thai landing page", () => {
  test("renders the migrated landing content", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Đẹp từ trục cơ thể. Sang từ phong thái." })).toBeVisible();
    await expect(page.getByRole("link", { name: "Soi dáng miễn phí qua Zalo" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Một lộ trình để hiểu cơ thể, không chỉ học động tác." })).toBeVisible();
    await expect(page.getByText("Video giới thiệu sẽ cập nhật")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Cơ thể đã nói trước khi bạn thấy dáng mình đổi khác." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Từ tín hiệu cơ thể đến lộ trình phù hợp." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Chọn khóa theo điểm cơ thể đang cần." })).toBeVisible();
    await expect(page.locator("#courses").getByRole("link", { name: "Gửi tình trạng cơ thể" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Chọn khóa và bắt đầu đúng điểm cơ thể đang cần." })).toHaveCount(0);
    await expect(page.locator("#videos").getByRole("heading", { name: "Video khóa học đang chuẩn bị." })).toBeVisible();
    await expect(page.locator("#videos").getByText("Module mở đầu: Hơi thở mở ngực")).toBeVisible();
    await expect(page.locator("#videos [data-video-placeholder]")).toHaveCount(4);
    await expect(page.locator("#videos video")).toHaveCount(0);
    await expect(page.locator("#videos iframe")).toHaveCount(0);
    await expect(page.locator("#videos embed")).toHaveCount(0);
    await expect(page.locator("#videos").getByRole("link", { name: "Gửi tình trạng để được gợi ý" })).toHaveAttribute("href", "#contact");
    await expect(page.locator("#videos").getByRole("link", { name: "Nhận thông báo khi mở video" })).toHaveAttribute("href", "#contact");
    await expect(page.locator("#videos").getByText(/Xem ngay|Phát video|Play|Watch now|Học thử miễn phí|Vào học|Mở bài học|Đăng nhập để xem/i)).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Cơ thể là cỗ máy sống, phong thái là cách bạn cầm lái." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Đi để cơ thể được nghỉ, thở và bắt đầu lại." })).toBeVisible();
    await expect(page.locator("#retreats").getByText("Thải độc nhịp sống", { exact: true })).toBeVisible();
    await expect(page.locator("#retreats").getByRole("link", { name: "Hỏi lịch camp/retreat" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Một hệ sinh thái để cơ thể có nơi bắt đầu và nơi quay về." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Phòng hồi phục cơ thể" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Camp, Retreat & thải độc nhịp sống" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Nguyễn Thị Thu Nhanh" })).toBeVisible();
    await expect(page.getByText("Người kiến tạo hệ sinh thái")).toBeVisible();
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
    await expect(page.locator("#faq summary").filter({ hasText: "Camp, retreat hoặc thải độc nhịp sống dành cho ai?" })).toBeVisible();
    await expect(page.getByText("Nhận tư vấn cá nhân")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Bắt đầu bằng việc hiểu đúng cơ thể của bạn." })).toBeVisible();
    await expect(page.getByText("Tư vấn lộ trình hệ sinh thái")).toBeVisible();

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

  test("shows floating quick actions and scrolls back to top", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/");

    const zaloButton = page.getByRole("link", { name: "Liên hệ Zalo" });
    await expect(zaloButton).toBeVisible();
    await expect(zaloButton).toHaveAttribute("href", /zalo\.me\/0962895314/);
    await expect(zaloButton.locator("svg")).toBeVisible();

    const scrollTopButton = page.getByRole("button", { name: "Lên đầu trang" });
    await expect(scrollTopButton).toHaveCSS("opacity", "0");

    await page.evaluate(() => window.scrollTo(0, 240));
    await expect.poll(async () => scrollTopButton.evaluate((element) => getComputedStyle(element).opacity)).toBe("1");

    await scrollTopButton.click();
    await expect.poll(async () => page.evaluate(() => window.scrollY)).toBeLessThan(30);
  });

  test("makes the mobile course carousel discoverable", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/#courses");

    await expect(page.getByText("Vuốt ngang để xem 3 khóa")).toBeVisible();

    const courseScroller = page.locator("#courses [aria-label='Các khóa học chính, có thể vuốt ngang trên mobile']");
    await expect(courseScroller).toBeVisible();

    const metrics = await courseScroller.evaluate((element) => {
      const cards = Array.from(element.children).map((child) => {
        const rect = child.getBoundingClientRect();
        const parentRect = element.getBoundingClientRect();

        return {
          left: rect.left - parentRect.left,
          width: rect.width,
        };
      });
      const badge = Array.from(element.querySelectorAll("span")).find((node) => node.textContent?.trim() === "Phổ biến nhất");
      const badgeRect = badge?.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      return {
        cardCount: cards.length,
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        secondCardLeft: cards[1]?.left ?? 0,
        badgeTop: badgeRect?.top ?? 0,
        scrollerTop: elementRect.top,
      };
    });

    expect(metrics.cardCount).toBe(3);
    expect(metrics.scrollWidth).toBeGreaterThan(metrics.clientWidth + 40);
    expect(metrics.secondCardLeft).toBeLessThan(metrics.clientWidth);
    expect(metrics.badgeTop).toBeGreaterThanOrEqual(metrics.scrollerTop);
  });

  test("shows video placeholders without real playable media", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/#videos");

    await expect(page.getByText("Vuốt để xem 3 video sắp mở")).toBeVisible();

    const order = await page.evaluate(() => {
      const courses = document.querySelector("#courses")?.getBoundingClientRect().top ?? 0;
      const videos = document.querySelector("#videos")?.getBoundingClientRect().top ?? 0;
      const journey = document.querySelector("#journey")?.getBoundingClientRect().top ?? 0;

      return { courses, videos, journey };
    });

    expect(order.courses).toBeLessThan(order.videos);
    expect(order.videos).toBeLessThan(order.journey);

    const videoSection = page.locator("#videos");
    await expect(videoSection.locator("[data-video-placeholder]")).toHaveCount(4);
    await expect(videoSection.locator("[data-play-mark] svg")).toHaveCount(4);
    await expect(videoSection.locator("video, iframe, embed")).toHaveCount(0);
    await expect(videoSection.getByText(/youtube|vimeo/i)).toHaveCount(0);
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

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const leadForm = document.querySelector("[data-lead-form]");
const formNote = document.querySelector("[data-form-note]");
const faqItems = document.querySelectorAll(".faq-item");

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
});

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileNav?.classList.toggle("is-open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mobileNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

faqItems.forEach((item) => {
  const button = item.querySelector("button");

  button?.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(leadForm);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const program = String(data.get("program") || data.get("course") || "").trim();

  if (!name || !phone || !program) {
    formNote.textContent = "Vui lòng điền đủ thông tin để được tư vấn đúng lộ trình.";
    formNote.classList.remove("success");
    return;
  }

  const message = `Chào Master Thu Nhanh, tôi là ${name}. Tôi muốn được tư vấn ${program}. SĐT của tôi: ${phone}.`;
  formNote.innerHTML = `Đã ghi nhận thông tin. <a href="https://zalo.me/0962895314" target="_blank" rel="noreferrer">Mở Zalo để gửi nhanh</a>.`;
  formNote.classList.add("success");

  const encoded = encodeURIComponent(message);
  const zaloLink = `https://zalo.me/0962895314?text=${encoded}`;
  window.open(zaloLink, "_blank", "noopener,noreferrer");
});

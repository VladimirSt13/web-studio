(() => {
  const menuBtn = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-menu]");
  const body = document.querySelector("body");

  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;

    menuBtn.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", !expanded);

    mobileMenu.classList.toggle("is-open");

    body.classList.toggle("lock");
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    menuBtn.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", false);
    body.classList.remove("lock");
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const navs = document.querySelectorAll("[data-mobile-nav-container]");

  navs.forEach((nav) => {
    const toggle = nav.querySelector("[data-mobile-nav-toggle]");
    const menu = nav.querySelector("[data-mobile-nav]");
    if (!toggle || !menu) return;

    const closeMenu = () => {
      menu.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isClosed = menu.classList.contains("hidden");
      menu.classList.toggle("hidden");
      toggle.setAttribute("aria-expanded", String(isClosed));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) closeMenu();
    });
  });
});

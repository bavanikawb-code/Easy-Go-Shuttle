document.addEventListener("DOMContentLoaded", () => {
  const externalNavLinks = document.querySelectorAll("[data-nav-loader]");
  if (!externalNavLinks.length) return;

  const overlay = document.createElement("div");
  overlay.id = "nav-loader-overlay";
  overlay.className =
    "fixed inset-0 z-[100] hidden items-center justify-center bg-primary/70 backdrop-blur-sm";
  overlay.innerHTML = `
    <div class="flex flex-col items-center gap-4 rounded-2xl bg-white px-8 py-6 shadow-2xl">
      <div class="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-primary"></div>
      <p class="text-sm font-semibold tracking-wide text-primary">Opening page...</p>
    </div>
  `;
  document.body.appendChild(overlay);

  externalNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetUrl = link.href;
      overlay.classList.remove("hidden");
      overlay.classList.add("flex");

      window.setTimeout(() => {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
        overlay.classList.add("hidden");
        overlay.classList.remove("flex");
      }, 1200);
    });
  });
});

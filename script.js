(() => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }));
  }

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add("is-visible"));

  const glow = document.querySelector(".cursor-glow");
  if (glow && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("pointermove", event => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, { passive: true });
  }

  const stage = document.querySelector("[data-parallax]");
  if (stage && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stage.addEventListener("pointermove", event => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stage.style.transform = `perspective(1100px) rotateY(${x * 3}deg) rotateX(${-y * 2}deg)`;
    });
    stage.addEventListener("pointerleave", () => {
      stage.style.transform = "perspective(1100px) rotateY(0) rotateX(0)";
    });
  }

  const header = document.querySelector("[data-header]");
  let previous = window.scrollY;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (window.innerWidth > 720 && current > previous && current > 160) header.classList.add("header-hidden");
    else header.classList.remove("header-hidden");
    previous = current;
  }, { passive: true });
})();
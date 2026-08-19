(function () {
  "use strict";

  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  // Navbar com sombra ao rolar a página
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 12) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  if (navToggle && navMenu) {
    const setOpen = (open) => {
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      navMenu.classList.toggle("open", open);
    };

    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    // Fechar menu ao clicar em um link
    navMenu.querySelectorAll("a[href^='#']").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    // Fechar ao clicar fora
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("open") &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        setOpen(false);
      }
    });

    // Fechar ao redimensionar para desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) setOpen(false);
    });
  }

  // =========================================================
  // Carousel de screenshots (automático lento, vai e volta)
  // =========================================================
  const carousel = document.getElementById("screenshots-carousel");
  const track = document.getElementById("carousel-track");
  const dotsWrap = document.getElementById("carousel-dots");
  const btnPrev = carousel ? carousel.querySelector(".carousel-prev") : null;
  const btnNext = carousel ? carousel.querySelector(".carousel-next") : null;

  if (carousel && track && dotsWrap && btnPrev && btnNext) {
    const slides = Array.from(track.querySelectorAll(".carousel-slide"));
    const slideGap = 24;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ===== Cálculo de largura de cada slide (incluindo gap) =====
    const getSlideOuterWidth = () => {
      const one = slides[0];
      if (!one) return 0;
      return one.getBoundingClientRect().width + slideGap;
    };

    // ===== Cria bolinhas =====
    slides.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Ir para a screenshot ${idx + 1}`);
      dot.addEventListener("click", () => goTo(idx, true));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.querySelectorAll(".carousel-dot"));

    // ===== Estado =====
    let currentIndex = 0;
    let direction = 1; // 1 = avança, -1 = volta (bounce back and forth)
    let timer = null;
    const AUTOPLAY_MS = reducedMotion ? 0 : 3600; // 3,6s bem lento
    const TRANSITION_MS = reducedMotion ? 0 : 800;

    const setActive = (idx) => {
      dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      dots.forEach((d, i) => d.setAttribute("aria-selected", i === idx ? "true" : "false"));
    };

    const translate = (idx, userInitiated) => {
      const slideWidth = getSlideOuterWidth();
      const viewportWidth = carousel.querySelector(".carousel-viewport").clientWidth;
      const maxLeft = Math.max(0, slides.length * slideWidth - viewportWidth + slideGap / 2);
      const raw = idx * slideWidth;
      const left = Math.min(Math.max(0, raw), maxLeft);
      track.style.transform = `translateX(${-left}px)`;
      if (userInitiated) carousel.classList.add("is-paused");
      setActive(idx);
    };

    const goTo = (idx, userInitiated) => {
      if (!slides.length) return;
      const last = slides.length - 1;
      currentIndex = Math.max(0, Math.min(last, idx));
      translate(currentIndex, !!userInitiated);
    };

    const step = () => {
      if (!slides.length) return;
      const last = slides.length - 1;

      // Bounce: chegou na última → volta; chegou na primeira → avança.
      if (currentIndex >= last) direction = -1;
      else if (currentIndex <= 0) direction = 1;

      goTo(currentIndex + direction, false);
    };

    const play = () => {
      if (!AUTOPLAY_MS) return;
      stop();
      timer = window.setInterval(step, AUTOPLAY_MS + TRANSITION_MS);
    };

    const stop = () => {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    // Controles manuais
    btnNext.addEventListener("click", () => {
      goTo(currentIndex + 1, true);
      stop();
      window.setTimeout(play, 4000);
    });
    btnPrev.addEventListener("click", () => {
      goTo(currentIndex - 1, true);
      stop();
      window.setTimeout(play, 4000);
    });

    // Pausa automática no hover / foco (acessibilidade + toque)
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", play);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", play);
    carousel.addEventListener("touchstart", stop, { passive: true });
    carousel.addEventListener("touchend", () => window.setTimeout(play, 3000), { passive: true });

    // Pausa quando a aba não está visível
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else play();
    });

    // Inicializa
    const init = () => {
      // Ajusta para a primeira slide completamente visível em viewport pequena
      const sw = getSlideOuterWidth();
      if (sw) {
        const viewportWidth = carousel.querySelector(".carousel-viewport").clientWidth;
        if (currentIndex * sw + viewportWidth > slides.length * sw) {
          currentIndex = Math.max(0, Math.floor((slides.length * sw - viewportWidth) / sw));
        }
      }
      goTo(currentIndex, false);
      play();
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      window.setTimeout(init, 50);
    } else {
      window.addEventListener("DOMContentLoaded", init);
    }
    window.addEventListener("resize", () => translate(currentIndex, false));
  }
})();

document.addEventListener("DOMContentLoaded", () => {

  // NAVBAR EFFECT

  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

      nav.style.background = "rgba(5,5,5,.92)";
      nav.style.borderBottom = "1px solid rgba(255,255,255,.06)";

    } else {

      nav.style.background = "rgba(7,7,7,.78)";
      nav.style.borderBottom = "1px solid rgba(255,255,255,.04)";

    }

  });

  // REVEAL ANIMATION

  const reveals = document.querySelectorAll(
    ".card, .method-item, .hero-panel, .section-head"
  );

  const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.88;

    reveals.forEach((el) => {

      const top = el.getBoundingClientRect().top;

      if(top < trigger){

        el.classList.add("active");

      }

    });

  };

  window.addEventListener("scroll", revealOnScroll);

  revealOnScroll();

});
gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav__list__item__link");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    gsap.to(links, { color: "#252525" });

    if (document.activeElement === link) {
      gsap.to(link, { color: "#385ae0" });
    }
    // move the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1, 0.5)",
    });
  });
});

// cards
const cards = document.querySelectorAll(".card__item");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const state = Flip.getState(cards);

    const isCardActive = card.classList.contains("active");

    cards.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("inactive");

      if (!isCardActive && index !== otherIndex) {
        otherCard.classList.add("inactive");
      }
    });

    if (!isCardActive) {
      card.classList.add("active");
    }

    Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: "expo.out",
    });
  });
});

(() => {
  const filter = document.querySelector(".filter");
  const buttons = filter.querySelectorAll("input");
  const cards = document.querySelectorAll(".portfolio__item");

  buttons.forEach((input) => {
    input.addEventListener("change", (event) => {
      const cardType = event.target.value;

      buttons.forEach((el) => {
        el.parentElement.classList.toggle("selected", el === event.target);
      });

      cards.forEach((card) => {
        if (cardType === "all") {
          card.classList.contains("visually-hidden") && card.classList.remove("visually-hidden");
          return;
        }

        card.classList.toggle("visually-hidden", card.dataset.type !== cardType);
      });
    });
  });
})();

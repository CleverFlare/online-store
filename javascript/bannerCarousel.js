window.onload = () => {
  const carousel = document.querySelector(".new-products-carousel");
  const carouselFigure = document.querySelector(
    ".new-products-carousel-figure"
  );
  const carouselImages = document.querySelectorAll(
    ".new-products-carousel-img"
  );
  const carouselButtonsContainer = document.querySelector(
    ".new-products-carousel-button-group"
  );
  const carouselWidth = parseInt(window.getComputedStyle(carousel).width);

  console.log(carouselWidth);

  carouselImages.forEach((img) => {
    img.style.width = carouselWidth + "px";
  });

  const carouselImgNum = carouselImages.length;

  for (
    let carouselButton = 0;
    carouselButton < carouselImgNum;
    carouselButton++
  ) {
    const input = document.createElement("input");

    input.type = "radio";

    input.name = "carousel";

    input.classList.add("new-products-carousel-button");

    input.setAttribute("data-pres", carouselButton);

    if (carouselButton === 0) input.setAttribute("checked", "");

    input.addEventListener("click", (event) => {
      carouselFigure.style.transform = `translateX(${
        -carouselButton * carouselWidth
      }px)`;
    });
    carouselButtonsContainer.appendChild(input);
  }
};

const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  carousel.style.overflow = "hidden";

  const pushLeft = carousel.querySelector(".left-list-button");
  const pushRight = carousel.querySelector(".right-list-button");
  const figure = carousel.querySelector(".carousel-figure");
  const figureItems = figure.querySelectorAll(".figure-item");
  const carouselCanvas = carousel.querySelector(".carousel-canvas");

  const carouselWidth = carousel.getBoundingClientRect().width;
  carouselCanvas.style.width = "380px";

  function handleFigureItems(item) {
    item.style.width = carouselWidth - 20 + "px";
    item.style.height = "380px";
  }

  figureItems.forEach(handleFigureItems);

  let counter = 0;

  function pushLeftFunc(event) {
    if (counter === 0) {
      counter = -figureItems.length + 1;
      figure.style.setProperty("left", `${carouselWidth * counter}px`);
      return;
    }
    const countingExp = carouselWidth * (counter + 1);
    figure.style.setProperty("left", `${countingExp}px`);
    counter++;
  }

  function pushRightFunc(event) {
    if (counter === (figureItems.length - 1) * -1) {
      counter = 0;
      figure.style.setProperty("left", "0px");
      return;
    }
    const countingExp = carouselWidth * (counter - 1);
    figure.style.setProperty("left", `${countingExp}px`);
    counter--;
  }

  pushLeft.addEventListener("click", pushLeftFunc);
  pushRight.addEventListener("click", pushRightFunc);
});

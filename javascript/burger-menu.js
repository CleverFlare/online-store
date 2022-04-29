const burgerMenu = document.querySelector(".icon-menu-burger");
const pageBody = document.querySelector(".page-body");
burgerMenu.addEventListener("click", (event) => {
  pageBody.classList.toggle("hidden");
});

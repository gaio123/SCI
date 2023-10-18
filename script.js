
const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndexx = 0;
let time = 2000; //Tempo padrão para apresentação de slides automática

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function () {
  currentIndexx <= 0 ? currentIndexx = imgs.length - 1 : currentIndexx--;
  defClass(0, currentIndexx);
});

rightArrow.addEventListener("click", function () {
  currentIndexx >= imgs.length - 1 ? currentIndexx = 0 : currentIndexx++;
  defClass(0, currentIndexx);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndexx >= imgs.length - 1 ? currentIndexx = 0 : currentIndexx++;
    defClass(0, currentIndexx);
  }, time);
};

startAutoSlide(); //Inicia o slideshow
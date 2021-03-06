//Customers
const DELAY = 3000;

const numOfSlide = document.querySelector(".drive__customers-slider-cover")
  .children.length;
document.querySelector(".drive__customers-slider-cover").style.width = `${
  numOfSlide * 100
}%`;
document.querySelectorAll(".drive__customers-slider").forEach((element) => {
  element.style.width = `${100 / numOfSlide}%`;
});
document.querySelector(".drive__customers-dot");

let currentSlide = 0;
let mouseActive = false;

const slideTo = (index) => {
  if (index > numOfSlide - 1) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = numOfSlide - 1;
  } else {
    currentSlide = index;
  }
  document.querySelector(
    ".drive__customers-slider-cover"
  ).style.transform = `translateX(-${(currentSlide * 100) / numOfSlide}%)`;
  listDot.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const slide = () => {
  currentSlide++;
  if (currentSlide === numOfSlide) {
    currentSlide = 0;
  }
  slideTo(currentSlide);
};

let interval = setInterval(slide, DELAY);
const cover = document.querySelector(".drive__customers-slider-cover");

const listDot = [];

for (let i = 0; i < numOfSlide; i++) {
  const dot = document.createElement("span");
  listDot.push(dot);
  dot.addEventListener("click", () => {
    slideTo(i);
    clearInterval(interval);
    interval = setInterval(slide, DELAY);
  });
  if (i === currentSlide) {
    dot.classList.add("active");
  }
  document.querySelector(".drive__customers-dot").appendChild(dot);
}
let offsetX = 0;
cover.addEventListener("mousedown", (e) => {
  offsetX = e.offsetX;
  mouseActive = true;
  clearInterval(interval);
});

cover.addEventListener("mouseup", (e) => {
  mouseActive = false;
  interval = setInterval(slide, DELAY);
});

document.querySelector(".btn-prev-slider").addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = numOfSlide - 1;
  }
  document.querySelector(".btn-next-slider").style =
    "background-color: rgba(255, 255, 255,0.5)";
  slideTo(currentSlide);
});

document.querySelector(".btn-next-slider").addEventListener("click", () => {
  currentSlide++;
  if (currentSlide === numOfSlide) {
    currentSlide = 0;
  }
  document.querySelector(".btn-prev-slider").style =
    "background-color: rgba(255, 255, 255,0.5)";
  slideTo(currentSlide);
});

//Resources
const cover_scroll = document.querySelector(".cover_scroll");
const scroll = document.querySelector(".scroll");
const total = scroll.children.length;
const CART_WIDTH = 398;
const MARGIN = 20;
const prev = document.querySelector(".resources_dri.btn-prev-slider");
const next = document.querySelector(".resources_dri.btn-next-slider");

let current = 0;

prev.addEventListener("click", (e) => {
  if (current === 0) {
    current = (total - 3) * (CART_WIDTH + MARGIN);
  } else {
    current -= CART_WIDTH + MARGIN;
  }
  scroll.style.transform = `translateX(${-current}px)`;
});

next.addEventListener("click", (e) => {
  current += CART_WIDTH + MARGIN;
  if (current > (total - 3) * (CART_WIDTH + MARGIN)) {
    current = 0;
  }
  scroll.style.transform = `translateX(-${current}px)`;
});

scroll.style.width = `${total * CART_WIDTH + MARGIN * (total - 1)}px`;

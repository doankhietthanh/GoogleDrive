const DELAY = 3000000;

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

document.body.addEventListener("mouseover", (e) => {
  console.log(e);
  if (mouseActive) {
    const deltaX = e.offsetX - offsetX;
    offsetX = e.offsetX;
    const width = cover.getBoundingClientRect().width;
    const translateX =
      parseInt(
        getComputedStyle(cover).getPropertyValue("transform").split(",")[4]
      ) || 0;
    console.log(e.offsetX);
    cover.style.transform = `translateX(${translateX + deltaX}px)`;
    const currentX = translateX + deltaX;
    if (currentX < -width * (numOfSlide - 1)) {
      cover.style.transform = `translateX(${-width * (numOfSlide - 1)}px)`;
    }
    if (currentX > 0) {
      cover.style.transform = `translateX(0px)`;
    }
  }
});

document.querySelector(".btn-prev-slider").addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = numOfSlide - 1;
  }
  slideTo(currentSlide);
});

document.querySelector(".btn-next-slider").addEventListener("click", () => {
  currentSlide++;
  if (currentSlide === numOfSlide) {
    currentSlide = 0;
  }
  slideTo(currentSlide);
});

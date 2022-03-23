const boxes = document.querySelectorAll(".drive__item");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".header__menu-btn span");
const menuList = document.querySelector(".header__menu-list");

let isMenu = false;

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  if (window.scrollY > 5) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});

// menuBtn.addEventListener("click", (e) => {
//   menuList.classList.add("show");
//   isMenu = true;
// });

window.addEventListener("click", (e) => {
  if (e.target !== menuList && isMenu) {
    menuList.classList.remove("show");
    isMenu = false;
  } else if (e.target === menuBtn) {
    menuList.classList.add("show");
    isMenu = true;
  }
});

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

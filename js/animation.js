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

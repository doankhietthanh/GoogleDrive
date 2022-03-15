const boxes = document.querySelectorAll(".drive");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

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

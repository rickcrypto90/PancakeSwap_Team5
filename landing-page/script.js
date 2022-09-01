let tl = gsap.timeline({ repeat: -1, yoyo: true });

let animazione1 = tl
  .to("figure", {
    y: 15,
    x: 5,
    duration: 1.5,
    stagger: 0.2,
    ease: "inOut",
  })
  .to("#arrow", { y: 10, x: 5, duration: 1, stagger: 0.2, ease: "in" }, "-=1.5")
  .to("#cake", { y: 15, x: 5, duration: 1, stagger: 0.2, ease: "in" }, "-=1.5")
  .to(
    "#folder",
    { y: 15, x: 5, duration: 1, stagger: 0.2, ease: "in" },
    "-=1.5"
  );

const title = document.querySelector(".title-res-data>span");
const arrows = document.querySelector(".title-res-data>button");
const hidden = document.querySelector("#res-data-hidden");
const first = document.querySelector(".res-data");

arrows.addEventListener("click", () => {
  if (title.innerHTML === "Farms") {
    title.innerHTML = "Syrup Pools";
    hidden.style.display = "flex";
    // first.style.display = "none";
    first.setAttribute("style", "display:none !important");
  } else if (title.innerHTML === "Syrup Pools") {
    title.innerHTML = "Farms";
    hidden.style.display = "none";
    first.style.display = "flex";
    hidden.setAttribute("style", "display:none !important");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  hidden.setAttribute("style", "display:none !important");
});

let tl = gsap.timeline({ repeat: -1, yoyo: true });

let animazione = tl
  .to("figure", {
    y: 15,
    x: 5,
    duration: 1.5,
    stagger: 0.2,
    ease: "inOut",
  })
  .to(
    "#arrow",
    { y: 10, x: 5, duration: 1, stagger: 0.2, ease: "in" },
    "-=1.5"
  )
  .to(
    "#cake",
    { y: 15, x: 5, duration: 1, stagger: 0.2, ease: "in" },
    "-=1.5"
  )
  .to(
    "#folder",
    { y: 15, x: 5, duration: 1, stagger: 0.2, ease: "in" },
    "-=1.5"
  );

const title = document.querySelector(".title-res-data>span");
const arrows = document.querySelector(".title-res-data>button");
const hidden = document.querySelector(".hidden");
const first = document.querySelector(".res-data");

arrows.addEventListener("click", () => {
  if (title.innerHTML === "Farms") {
    title.innerHTML = "Syrup Pools";
    hidden.style.display = "block";
    first.style.display = "none";
  } else if (title.innerHTML === "Syrup Pools") {
    title.innerHTML = "Farms";
    hidden.style.display = "none";
    first.style.display = "flex";
  }
});
